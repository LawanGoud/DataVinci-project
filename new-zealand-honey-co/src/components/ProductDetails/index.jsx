import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import PurchaseOptions from "../PurchaseOptions/index.jsx";
import QuantitySelector from "../QuantitySelector/index.jsx";
import BundleOffer from "../BundleOffer/index.jsx";
import RewardsNotice from "../RewardsNotice/index.jsx";
import UmfScale from "../UmfScale/index.jsx";
import FlavorProfile from "../FlavorProfile/index.jsx";

const CERTS = [
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578485/d8427584-0d38-4bb8-9044-76bca383dfef_hr31pu.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578488/bfb687d0-7d16-4fec-907c-981e08189897_vgu79j.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578490/a7bd3ff5-25cd-46ec-91f7-62a5bbe09278_xtli4d.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578494/8a8e9836-ea73-4a36-96d3-6a81d22fcbd5_bzjbjy.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578495/d3ebc7b5-1b31-4605-bac0-df463684b732_vrdgr2.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578498/bc015648-949a-4d55-bb59-e00e9721cc45_u4ds3z.jpg",
];
const SIZES = [
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578509/e9779195-6d4d-48e0-965d-09b0af3ebdcd_h8l6ap.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578512/e18c583c-5beb-4b81-9c38-427a1988ea6c_tnga5y.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578514/d6a16a73-6455-4b13-8ce7-d05b8a349fb6_wza2pq.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578517/fc95144f-5a0e-4d43-a949-6b0426527844_pjdbda.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756580778/dd7439a2-81b6-4f89-8534-6a81c607c5ac_kzxf5r.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578521/53d482fe-e4b7-4141-b603-2f795574b3de_gtvuzh.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578525/f0477c6d-520f-4a14-8081-db5e2bfe9c1d_z0qazq.jpg",
];

export default function ProductDetails(){
  const [activeSize, setActiveSize] = useState(0);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(()=>{
    const onKey = e => { if(e.key === "Escape") setIsInfoOpen(false); };
    window.addEventListener("keydown", onKey);
    return ()=> window.removeEventListener("keydown", onKey);
  },[]);
  useEffect(()=>{ if(isInfoOpen && closeRef.current) closeRef.current.focus(); },[isInfoOpen]);

  return (
    <section className="product-details">
      <h1 className="product-details__title">Manuka Honey</h1>

      <div className="product-details__metrics">
        UMF™ <strong>24+</strong><br/>MGO <strong>1122+</strong>
      </div>

      <div className="product-details__actions">
        <button className="info-button" onClick={()=> setIsInfoOpen(true)}>
          ℹ️ What is UMF and MGO?
        </button>
      </div>

      <div className="product-details__rating">
        <span>The Optimiser</span>
        <span className="stars">★★★★★</span>
        <span className="muted">825 REVIEWS</span>
      </div>

      <p className="product-details__description">
        For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
      </p>

      <div className="product-details__certs">
        {CERTS.map((src, i)=> <img key={i} src={src} alt={"certification "+(i+1)} />)}
      </div>

      <div className="section-label">Size (Select one)</div>
      <div className="section-caption">Variant: 125g | 4.4oz</div>
      <div className="size-grid">
        {SIZES.map((src, i)=> (
          <button
            key={i}
            className={"size-card" + (i===activeSize ? " size-card--selected": "")}
            onClick={()=> setActiveSize(i)}
            aria-pressed={i===activeSize}
          >
            <img src={src} alt={`size ${i+1}`} />
          </button>
        ))}
      </div>

      <PurchaseOptions />
      <QuantitySelector />
      <BundleOffer />
      <RewardsNotice />

      <div className="key-facts">
        <div>
          <div className="key-facts__label">Delivery</div>
          <div className="key-facts__value">FREE DELIVERY ON ORDERS OVER $30</div>
        </div>
        <div>
          <div className="key-facts__label">Estimated delivery date:</div>
          <div className="key-facts__value">Jun 9 - Jun 13 to</div>
        </div>
      </div>

      <div className="key-facts">
        <div>
          <div className="key-facts__label">After Pay</div>
          <div className="key-facts__value">or 4 interest-free payments of $13.97 with <span className="badge-afterpay">Afterpay</span> ⓘ</div>
        </div>
      </div>

      <UmfScale />
      <FlavorProfile />

      {isInfoOpen && (
        <div className="modal" role="dialog" aria-modal="true" onClick={(e)=> e.target.classList.contains('modal') && setIsInfoOpen(false)}>
          <div className="modal__content">
            <h3>What is UMF and MGO?</h3>
            <div className="modal__info"><strong>UMF™</strong> is the strength and purity rating of Manuka honey.<p>The higher the number (10+, 15+, 20+, 24+, 30+), the greater the potency and rarity.</p></div>
            <div className="modal__info"><strong>MGO</strong> is the key natural compound that gives Manuka honey antibacterial strength.<p>Higher values (263+, 514+, 829+, 1122+, 1450+) mean stronger antibacterial properties.</p></div>
            <button className="modal__close" onClick={()=> setIsInfoOpen(false)} ref={closeRef}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
