import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const HERO = [
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756570825/22_ix4ui7.png",
];
const GALLERY = [
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578461/cfd19989-20c5-4766-9e44-fb2131a2e73b_nxfga0.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578462/dc4a7cd1-cd8a-4437-b74b-22c89cbdca34_zqpndq.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578471/065e0fba-8f9d-442b-b30b-13c90247a478_tmukrp.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578474/880c7ab7-2c68-4f54-9259-ab6de57087a7_oocnfm.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578475/4b6703b7-89da-467e-8351-8a716393a01d_fbg4yl.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578479/c48c095c-2ee5-4b11-a383-79d0827ab6af_iixmbu.jpg",
  "https://res.cloudinary.com/db3erodfw/image/upload/v1756578480/b839d851-5ebf-4efb-8f79-abf4c1b210aa_ry4mmp.jpg",
];

export default function ProductGallery(){
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const prev = ()=> setIndex(p => p===0 ? HERO.length-1 : p-1);
  const next = ()=> setIndex(p => p===HERO.length-1 ? 0 : p+1);

  useEffect(()=>{
    const onKey = e => { if(e.key==="ArrowLeft") prev(); if(e.key==="ArrowRight") next(); };
    window.addEventListener("keydown", onKey);
    return ()=> window.removeEventListener("keydown", onKey);
  },[]);

  return (
    <section className="product-gallery">
      <div
        className="product-gallery__viewport"
        onTouchStart={e=> (startX.current = e.changedTouches[0].clientX)}
        onTouchEnd={e=> {
          const dx = e.changedTouches[0].clientX - startX.current;
          if(dx > 40) prev();
          if(dx < -40) next();
          startX.current = null;
        }}
        aria-roledescription="carousel"
      >
        <button className="product-gallery__chevron product-gallery__chevron--left" onClick={prev} aria-label="Previous">❮</button>
        <img className="product-gallery__image" src={HERO[index]} alt="Manuka Honey bottle hero" />
        <button className="product-gallery__chevron product-gallery__chevron--right" onClick={next} aria-label="Next">❯</button>
        <div className="product-gallery__dots">
          {HERO.map((_, i)=> (
            <button key={i} className={"product-gallery__dot" + (i===index? " product-gallery__dot--active": "")} onClick={()=> setIndex(i)} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </div>

      <div className="product-gallery__grid">
        {GALLERY.map((src, i)=> (
          <figure key={src} className={"product-gallery__tile" + (i===2? " product-gallery__tile--span-2": "")}>
            <img src={src} alt={`product lifestyle ${i+1}`} />
          </figure>
        ))}
      </div>
    </section>
  );
}
