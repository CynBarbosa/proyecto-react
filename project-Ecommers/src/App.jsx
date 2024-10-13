import ItemListContainer from "./componentes/ItemListContainer";
import Layout from "./componentes/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componentes/NotFound";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
