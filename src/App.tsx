import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/productDetails";



export default function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome/>}>
      <Route index element={<Catalog/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="ProductDetails" element={<ProductDetails/>}/>


      </Route>

    </Routes>
    </BrowserRouter>


  );
 
}

