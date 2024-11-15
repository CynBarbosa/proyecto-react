import {
  addDoc,
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const endPurchase = async (cart) => {
  const productsToUpdateRefs = [];

  for (const itemProduct of cart) {
    if (!itemProduct.item.id) {
      throw new Error(
        `Product ID missing for item: ${JSON.stringify(itemProduct)}`
      );
    }
    const productRef = doc(db, "products", itemProduct.item.id);
    productsToUpdateRefs.push({ ref: productRef, id: itemProduct.item.id });
  }

  const orderCollectionRef = collection(db, "orders");
  try {
    const order = await runTransaction(db, async (transaction) => {
      const stocksUpdated = [];

      for (const productToUpdate of productsToUpdateRefs) {
        const { ref } = productToUpdate;
        const product = await transaction.get(ref);
        if (!product.exists()) {
          throw new Error("Product does not exist!");
        }

        const productInCart = cart.find(
          (cartElement) => cartElement.item.id === product.id
        );

        if (!productInCart) {
          throw new Error(`Product ${product.id} not found in cart.`);
        }

        const resultStock = product.data().stock - productInCart.quantity;
        if (resultStock < 0) {
          throw new Error(
            `Product: ${product.data().title} doesn't have enough stock.`
          );
        }

        stocksUpdated.push({
          productId: product.id,
          stock: resultStock,
        });
      }

      for (const product of productsToUpdateRefs) {
        const { ref, id } = product;
        const stockUpdated = stocksUpdated.find(
          (stock) => stock.productId === id
        );
        if (stockUpdated) {
          transaction.update(ref, { stock: stockUpdated.stock });
        }
      }

      const order = {
        products: cart,
        user: { name: "Cynthia" },
        timestamp: serverTimestamp(),
      };

      await addDoc(orderCollectionRef, order);

      return order;
    });

    console.log("Order created successfully!", order);
  } catch (e) {
    console.error("Error creating order:", e);
  }
};

export default endPurchase;
