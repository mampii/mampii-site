import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "gatsby";
import MaterialSymbolsLinkedCameraOutline from "../Icons/MaterialSymbolsLinkedCameraOutline";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";
import SolarHamburgerMenuBroken from "../Icons/SolarHamburgerMenuBroken";
import IconoirCancel from "../Icons/IconoirCancel";
import Linkedin from "../Icons/Linkedin";
import Youpic from "../Icons/Youpic";
import IconNight from "../Icons/IconNight";
import IconDay from "../Icons/IconDay";
import icon from "../../images/icon.png";
import iconDark from "../../images/icon-light.png";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const [isNight, setIsNight] = useState(true);

  const changeMode = () => {
    var bodyTag = document.querySelector("body");
    if (bodyTag?.classList.contains("light-mode")) {
      bodyTag?.classList.remove("light-mode");
    } else {
      bodyTag?.classList.add("light-mode");
    }

    setIsNight((current) => !current);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        document.querySelector(".header-wrapper")?.classList.add("active");
      } else {
        document.querySelector(".header-wrapper")?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-wrapper">
      <nav>
        <Link to="/">
          {/* <MaterialSymbolsLinkedCameraOutline />
          Mampi. */}
          <img className="icon-normal" src={icon} alt="Logo Mampii" />
          <img className="icon-light" src={iconDark} alt="Logo Mampii" />
        </Link>
        <ul className={`nav-menu mobileActive ${showMenuMobile && "active"}`}>
          <li>
            <Link
              activeClassName="active-link"
              onClick={() => setShowMenuMobile(false)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active-link"
              onClick={() => setShowMenuMobile(false)}
              to="/folio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active-link"
              onClick={() => setShowMenuMobile(false)}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="social-link">
            <a
              href="https://www.facebook.com/MampiononaRakotojaonaPhotography"
              target="_blank"
            >
              <Facebook />
            </a>
            <a href="https://www.instagram.com/m.a.m.p.i.i_/" target="_blank">
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rakotojaona-mampionona-bb0563229/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://youpic.com/rakotomampionona12" target="_blank">
              <Youpic />
            </a>
            <a href="mailto:rakotomampionona12@gmail.com">
              <Email />
            </a>
          </li>
          <li>
            <Link
              onClick={() => setShowMenuMobile(false)}
              to="/contact"
              className="contact-button"
            >
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <span className="change-mode" onClick={() => changeMode()}>
              {isNight ? <IconNight /> : <IconDay />}
            </span>
          </li>
        </ul>
        <button
          className="menu-burger"
          onClick={() => setShowMenuMobile((current) => !current)}
        >
          {showMenuMobile ? <IconoirCancel /> : <SolarHamburgerMenuBroken />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
