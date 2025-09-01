import React from "react";
import "./index.css";

export default function BundleOffer(){
  return (
    <section className="bundle-offer">
      <div className="bundle-offer__header">
        <button className="bundle-offer__chev" aria-label="Previous">‹</button>
        <span className="bundle-offer__title">Beauty Bundle</span>
        <button className="bundle-offer__chev" aria-label="Next">›</button>
      </div>

      <div className="bundle-offer__card">
        <div className="bundle-offer__items">
          <div className="bundle-offer__item">
            <div className="bundle-offer__image">
              <img src="https://res.cloudinary.com/db3erodfw/image/upload/v1756578530/7c321608-ef1a-4027-ad97-2f3d845b84f0_x4cpm1.jpg" alt="UMF 20+" />
            </div>
            <div className="bundle-offer__item-title">UMF 20+</div>
            <select className="bundle-offer__select"><option>250g ▾</option></select>
          </div>
          <div className="bundle-offer__plus">+</div>
          <div className="bundle-offer__item">
            <div className="bundle-offer__image">
              <img src="https://res.cloudinary.com/db3erodfw/image/upload/v1756578534/2c541e3f-e722-4e0c-ba0f-dd1dadbcc009_eahgjw.jpg" alt="UMF 24+" />
            </div>
            <div className="bundle-offer__item-title">UMF 24+</div>
            <select className="bundle-offer__select"><option>250g ▾</option></select>
          </div>
          <div className="bundle-offer__plus">+</div>
          <div className="bundle-offer__item">
            <div className="bundle-offer__image">
              <img src="https://res.cloudinary.com/db3erodfw/image/upload/v1756578528/eb226252-e8d3-4caa-9606-d58feeb908dc_torr31.jpg" alt="Wooden Spoon" />
            </div>
            <div className="bundle-offer__item-title">Wooden<br/>Spoon</div>
          </div>
        </div>

        <div className="bundle-offer__aside">
          <div className="bundle-offer__price">
            <s>$478.75 USD</s>
            <strong>$430.88 USD</strong>
            <span className="bundle-offer__save">Save 10%</span>
          </div>
          <button className="bundle-offer__cta">ADD BUNDLE TO CART</button>
        </div>
      </div>
    </section>
  );
}
