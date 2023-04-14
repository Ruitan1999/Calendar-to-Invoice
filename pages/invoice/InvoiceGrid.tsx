import React, { useState } from "react";
import Box from "@mui/material/Box";
import classes from "./InvoiceInfo.module.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const InvoiceGrid = () => {
  const getDataFromLocalStorage = (key: string): any | null => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Check if window is defined and localStorage is available (to avoid issues during server-side rendering)
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  };

  const newRows = getDataFromLocalStorage("eventdata");

  // Check if newRows and newRows.value are defined and not empty
  const datesArray =
    newRows && newRows.value
      ? newRows.value.map((item: { start: any }) => {
          const date = new Date(item.start.dateTime);
          const dateInAustralia = date.toLocaleDateString("zh-Hans-CN", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          return dateInAustralia;
        })
      : [];

  // Create a Set to store unique dates
  const uniqueDatesSet = new Set();

  // Loop through datesArray
  for (const date of datesArray) {
    // Add each date to the Set
    uniqueDatesSet.add(date);
  }

  // Convert the Set back to an array to get uniqueDateArray
  const uniqueDateArray = Array.from(uniqueDatesSet);

  const amountOfDayWorked = uniqueDateArray.length;

  // create a new array called row with
  // amount of day worked, rates, description, linetotal

  const linetotal = amountOfDayWorked * 300;

  const rows = [
    {
      id: Math.random(),
      amount: amountOfDayWorked,
      description: "Write Your Own",
      unitprice: `$${300}`,
      linetotal: `$${linetotal}`,
    },
  ];

  const GST = linetotal * 0.1;
  const totalAmountPlusGst = linetotal + GST;

  const columns: GridColDef[] = [
    { field: "amount", headerName: "Quantity", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      editable: true,
    },
    {
      field: "unitprice",
      headerName: "Unit Price",
      width: 150,
      editable: true,
    },
    {
      field: "linetotal",
      headerName: "Line Total",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          //   slots={{
          //     toolbar: CustomToolbar,
          //   }}
          rows={rows}
          hideFooter
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
      <div className={classes.total}>
        <p>Subtotal: ${linetotal}</p>
        <p>Sales Tax @ 10%: ${GST}</p>
        <h2>TOTAL: ${totalAmountPlusGst}</h2>
      </div>
    </>
  );
};

export default InvoiceGrid;
