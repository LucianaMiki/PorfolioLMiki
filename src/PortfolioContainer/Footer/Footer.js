import React from "react";
import "./Footer.css";
import ScrollServices from "../../utilities/ScrollServices";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollServices.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
