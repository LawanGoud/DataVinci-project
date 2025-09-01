import React from "react";
import "./index.css";

const STEPS = ["UMF™ 10+","UMF™ 15+","UMF™ 20+","UMF™ 24+","UMF™ 26+","UMF™ 28+","UMF™ 30+"];

export default function UmfScale(){
  return (
    <section className="umf-scale">
      <div className="umf-scale__label">UMF™ Scale</div>
      <div className="umf-scale__bar">
        {STEPS.map((s, i)=> (
          <div key={s} className={"umf-scale__tick" + (i===3 ? " umf-scale__tick--active" : "")}>
            <span className="umf-scale__line"></span>
            <span className="umf-scale__text">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
