import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Producr from "./components/Producr";
import ProductDetails from "./components/ProductDetails";
import UserName from "./components/UserName";
import Welcome from "./components/Welcome";

function App() {
    
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />}>
            <Route path=":userName" element={<UserName />} />
          </Route>
          <Route path="/products" element={<Producr />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
