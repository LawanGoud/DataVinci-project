import React from "react";
import "./index.css";

const AVATAR = "https://res.cloudinary.com/db3erodfw/image/upload/v1756578533/7a7e700c-69f6-4cd4-b0de-6f233e27a300_xibzok.jpg";

export default function RewardsNotice(){
  return (
    <div className="rewards-notice">
      <img src={AVATAR} alt="" className="rewards-notice__avatar" />
      <span>Colourclub members earn up to</span>
      <span className="rewards-notice__dot"></span>
      <strong>56</strong>
      <span>reward points when you buy this item. <a href="#">Sign up</a> or <a href="#">log in</a></span>
    </div>
  );
}
