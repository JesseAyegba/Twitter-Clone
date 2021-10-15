import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__text">Home</h1>
      <BsStars className="header__icon" />
    </div>
  );
}
