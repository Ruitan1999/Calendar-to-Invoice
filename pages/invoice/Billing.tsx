import React from "react";
import InvoiceInfo from "./InvoiceInfo";
import classes from "./InvoiceInfo.module.css";

const Billing = () => {
  return (
    <>
      <div className={classes.billing}>
        <div>
          <h3>BILL TO</h3>
          <p>Drywall WA PTY LTD</p>
        </div>
        <InvoiceInfo></InvoiceInfo>
      </div>
    </>
  );
};

export default Billing;
