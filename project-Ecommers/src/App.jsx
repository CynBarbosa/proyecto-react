import ItemListContainer from "./componentes/ItemListContainer";
import Layout from "./componentes/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componentes/NotFound";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Cart from "./componentes/Cart";
import OrderSummary from "./componentes/OrderSummary";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/orders/:ordersId" element={<OrderSummary />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
