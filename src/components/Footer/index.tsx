import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";
import IcSharpFavorite from "../Icons/IcSharpFavorite";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div>
          <SocialLink color="white"/>
          <span>
            © Copyright 2023 Mampii
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
