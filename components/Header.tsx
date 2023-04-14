import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/yonglogo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className={classes.mainHeader}>
        <Image src={logo} alt="mainlgo" className={classes.logo} />
        <div className={classes.info}>
          <h2>Yong M PTY LTD</h2>
          <h3>Yongming Huang</h3>
          <p>110 Kent Street East Victoria Park 6101 WA</p>
          <p>+61 433 708 861</p>
          <p>Yongmhuang@outlook.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
