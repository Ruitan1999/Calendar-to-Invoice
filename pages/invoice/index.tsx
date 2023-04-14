import Header from "@/components/Header";
import React from "react";
import Billing from "./Billing";
import InvoiceInfo from "./InvoiceInfo";
import XDataGrid from "../api/XDataGrid";
import classes from "./InvoiceInfo.module.css";
import InvoiceGrid from "./InvoiceGrid";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className={classes.index}>
      <Header></Header>
      <h1>Tax Invoice</h1>

      <Billing></Billing>

      <br></br>
      <br></br>
      <InvoiceGrid></InvoiceGrid>

    </div>
  );
};

export default index;
