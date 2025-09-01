import React, { useState } from "react";
import "./index.css";

export default function FlavorProfile(){
  const [value, setValue] = useState(40);
  return (
    <section className="flavor-profile">
      <div className="flavor-profile__label">Taste Profile</div>
      <div className="flavor-profile__track">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={e=> setValue(+e.target.value)}
          aria-label="Taste profile"
          className="flavor-profile__range"
        />
      </div>
      <div className="flavor-profile__scale">
        <span>Clean &amp; Intense</span>
        <span>Bold &amp; Intense</span>
      </div>
    </section>
  );
}
