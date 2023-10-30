import React, { FC } from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";
import "./style.scss";
import Youpic from "../Icons/Youpic";
import Linkedin from "../Icons/Linkedin";

type SocialLinkProps = {
  color: string;
};

const SocialLink: FC<SocialLinkProps> = ({ color }) => {
  return (
    <ul
      className={`socialLinkWrapper ${color === "white" ? "white" : "black"}`}
    >
      <li>
        <a
          href="https://www.facebook.com/MampiononaRakotojaonaPhotography"
          target="_blank"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/m.a.m.p.i.i_/" target="_blank">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rakotojaona-mampionona-bb0563229/" target="_blank">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://youpic.com/rakotomampionona12" target="_blank">
          <Youpic />
        </a>
      </li>
      <li>
        <a href="mailto:rakotomampionona12@gmail.com">
          <Email />
        </a>
      </li>
      <li>
        <a href="tel:0328512630">
        +261 32 85 126 30
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;
