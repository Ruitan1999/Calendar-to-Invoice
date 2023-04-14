import React, { Fragment } from "react";
import Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <header className={classes.header1}>
        <nav>
          <ul className={classes.list}>
            <NavItem href="/" label="Home" />
            <NavItem href="/timesheet" label="Timesheet" />
            <NavItem href="/invoice" label="Invoice" />
          </ul>
        </nav>
      </header>
    </>
  );
};

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem = (props: NavItemProps) => {
  return (
    <li>
      <Link href={props.href}>{props.label}</Link>
    </li>
  );
};

export default NavBar;
