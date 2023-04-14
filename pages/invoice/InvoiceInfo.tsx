import { TextField } from "@mui/material";
import React from "react";
import classes from "./InvoiceInfo.module.css";

const InvoiceInfo = () => {
  const newEndDate = new Date().toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className={classes.invoice}>
        <p>Invoice Date: {newEndDate}</p>
        <p>Payment Terms: Weekly</p>

        <div className={classes.main}>
          <TextField
            id="Invoice Number"
            label="Invoice Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceInfo;
