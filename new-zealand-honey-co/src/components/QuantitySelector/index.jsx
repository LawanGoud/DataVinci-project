import React, { useState } from "react";
import "./index.css";

export default function QuantitySelector(){
  const [count, setCount] = useState(1);
  const dec = ()=> setCount(v => Math.max(1, v-1));
  const inc = ()=> setCount(v => v+1);
  return (
    <div className="quantity-selector">
      <div className="quantity-selector__control" role="group" aria-label="Quantity">
        <button className="quantity-selector__btn" onClick={dec} aria-label="Decrease quantity">−</button>
        <span className="quantity-selector__count">{count}</span>
        <button className="quantity-selector__btn" onClick={inc} aria-label="Increase quantity">+</button>
      </div>
      <button className="cta cta--primary">ADD TO CART</button>
    </div>
  );
}
