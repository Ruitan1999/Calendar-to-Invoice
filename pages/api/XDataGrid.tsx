import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import classes from "./DataGrid.module.css";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

export default function XDataGrid({ eventData }: any) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (eventData) {
      const NewEventData = eventData?.value.map((item: any) => {
        const startDayTime = new Date(item.start.dateTime);
        const day = startDayTime.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const date = new Date(item.start.dateTime);
        const dateInAustralia = date.toLocaleDateString("en-AU", {
          timeZone: "Australia/Perth",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        });

        return {
          ...item,
          amount: 1,
          rate: 500.00,
          address: item.subject,
          date: dateInAustralia,
          day: day,
        };
      });
      setRows(NewEventData);
    }
  }, [eventData]);



  const columns: GridColDef[] = [
    { field: "amount", headerName: "Regular Day", width: 150, editable: true },
    {
      field: "day",
      headerName: "Day",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 550,
      editable: true,
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <>
      <Box sx={{ height: 600, width: "100%" }}>
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
    
    </>
  );
}
