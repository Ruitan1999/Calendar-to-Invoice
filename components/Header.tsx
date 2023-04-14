import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/startup.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className={classes.mainHeader}>
        <Image src={logo} alt="mainlgo" className={classes.logo} />
        <div className={classes.info}>
          <h2>Company R</h2>
          <h3>Jason Barn</h3>
          <p>125 James Street Perth</p>
          <p>+61 429 928 123</p>
          <p>CompanyR@outlook.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
