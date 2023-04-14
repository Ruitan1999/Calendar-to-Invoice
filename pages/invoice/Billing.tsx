import React from "react";
import InvoiceInfo from "./InvoiceInfo";
import { TextField } from "@mui/material";
import classes from "./InvoiceInfo.module.css";

const Billing = () => {
  return (
    <>
      <div className={classes.billing}>
        <div>
          <h3>BILL TO</h3>
          <TextField
            id="Company Name"
            label="Company Name"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <InvoiceInfo></InvoiceInfo>
      </div>
    </>
  );
};

export default Billing;
