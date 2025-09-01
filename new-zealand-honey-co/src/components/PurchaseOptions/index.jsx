import React, { useState } from "react";
import "./index.css";

export default function PurchaseOptions(){
  const [mode, setMode] = useState("one-time");
  return (
    <section className="purchase-options">
      <div className="purchase-options__label">Payment Options (Select one)</div>
      <div className="purchase-options__box">
        <button
          className={"purchase-options__pill" + (mode==='one-time' ? " purchase-options__pill--active" : "")}
          onClick={()=> setMode('one-time')}
          aria-pressed={mode==='one-time'}
        >
          <div>One-time<br/>purchase</div>
          <div className="purchase-options__price"><strong>$55.88</strong> USD</div>
        </button>

        <button
          className={"purchase-options__pill purchase-options__pill--outline" + (mode==='subscribe' ? " purchase-options__pill--active" : "")}
          onClick={()=> setMode('subscribe')}
          aria-pressed={mode==='subscribe'}
        >
          <div>Subscribe &amp; save<br/><strong>20%</strong></div>
          <div className="purchase-options__price"><strong>$44.70</strong> USD</div>
        </button>
      </div>
      <div className="purchase-options__note">❔ What is a Subscription?</div>
    </section>
  );
}
