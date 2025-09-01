import React from "react";
import SiteHeader from "./components/SiteHeader/index.jsx";
import ProductGallery from "./components/ProductGallery/index.jsx";
import ProductDetails from "./components/ProductDetails/index.jsx";

export default function App(){
  return (
    <>
      <SiteHeader />
      <main className="container">
        <div className="page-grid">
          <ProductGallery />
          <ProductDetails />
        </div>
      </main>
    </>
  );
}
