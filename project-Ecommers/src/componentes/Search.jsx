import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const Search = ({ item }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [juegos, setJuegos] = useState([]);

  // Conexión a Firebase
  useEffect(() => {
    const fetchGames = async () => {
      const db = getFirestore();
      const gamesCollection = collection(db, "products"); // Nombre de la colección en Firebase
      const gamesSnapshot = await getDocs(gamesCollection);

      const gamesData = gamesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setJuegos(gamesData);
      item(gamesData); // Renderiza inicialmente todos los juegos
    };

    fetchGames();
  }, [item]);

  // Filtrar juegos al escribir en el input
  const handleInputChange = (evento) => {
    const value = evento.target.value.toLowerCase();
    setSearchTerm(value);

    const arrayFiltrado = juegos.filter((juego) =>
      juego.title.toLowerCase().includes(value)
    );

    item(arrayFiltrado);
  };

  return (
    <input
      type="text"
      id="search"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default Search;
