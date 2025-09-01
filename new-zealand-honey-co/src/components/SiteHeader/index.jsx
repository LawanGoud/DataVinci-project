import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const LOGO = "https://res.cloudinary.com/db3erodfw/image/upload/v1756566518/Link_SVG_k0l5hl.png";

export default function SiteHeader(){
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(()=>{
    const onKey = e => { if(e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  },[]);

  useEffect(()=>{
    if(isOpen && closeRef.current) closeRef.current.focus();
  },[isOpen]);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="site-header__left">
          <button
            className="site-header__hamburger"
            aria-label="Open navigation"
            aria-expanded={isOpen}
            onClick={()=> setIsOpen(true)}
          >☰</button>

          <button className="site-header__cta">WHICH MANUKA IS FOR ME?</button>

          <nav className="site-header__nav site-header__nav--left" aria-label="Primary">
            <ul>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#explore">Explore</a></li>
            </ul>
          </nav>
        </div>

        <a className="site-header__logo" href="/">
          <img src={LOGO} alt="New Zealand Honey Co." />
        </a>

        <div className="site-header__right">
          <nav className="site-header__nav site-header__nav--right" aria-label="Secondary">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#rewards">Rewards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="site-header__icons" aria-hidden="true">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                <circle cx="12" cy="8" r="3.6"></circle>
                <path d="M4.5 19.5c1.8-3.3 13.2-3.3 15 0" strokeLinecap="round"></path>
              </svg>
            </span>
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                <circle cx="11" cy="11" r="7.5"></circle>
                <path d="M20 20l-3.5-3.5" strokeLinecap="round"></path>
              </svg>
            </span>
            <span className="icon icon--bag" aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                <path d="M5 8h14l-1.2 12.5a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z"></path>
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round"></path>
              </svg>
              <span className="icon__badge">0</span>
            </span>
          </div>
        </div>
      </div>

      {isOpen && <div className="site-header__scrim" onClick={()=> setIsOpen(false)} />}

      <aside className={"mobile-drawer" + (isOpen ? " mobile-drawer--open" : "")} aria-hidden={!isOpen}>
        <button className="mobile-drawer__close" aria-label="Close menu" ref={closeRef} onClick={()=> setIsOpen(false)}>✕</button>
        <button className="site-header__cta site-header__cta--block">WHICH MANUKA IS FOR ME?</button>
        <nav aria-label="Mobile">
          <ul onClick={()=> setIsOpen(false)}>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#rewards">Rewards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}
