import React, { useEffect, useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import XDataGrid from "./XDataGrid";

const API = () => {
  const [selectedEvent, SetSelectedEvent] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [authKey, setAuthKey] = useState("");

  const handleStartDateChange = (event: any) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: any) => {
    setEndDate(event.target.value);
  };

  const handleAuthKeyChange = (event: any) => {
    setAuthKey(event.target.value);
  };

  const fetchData = () => {
    const storedData = localStorage.getItem("eventdata");
    if (storedData) {
      SetSelectedEvent(JSON.parse(storedData));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const axios = require("axios");
    const options = {
      method: "GET",
      url: `https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=${startDate}T03:33:32.843Z&enddatetime=${endDate}T03:33:32.843Z&$select=subject,body,bodyPreview,organizer,attendees,start,end,location`,
      headers: {
        Authorization: authKey,
      },
    };
    axios
      .request(options)
      .then(function (response: any) {
        SetSelectedEvent(response.data);
        localStorage.setItem("eventdata", JSON.stringify(response.data));
        localStorage.setItem("enddate", JSON.stringify(endDate));
      })
      .catch(function (error: any) {
        console.error(error);
      });
    fetchData(); // Call fetchData to retrieve data from localStorage
  };

  const handlePrevWeekData = () => {
    const currentDate = new Date();

    const prevWeekStart = new Date(currentDate);

    prevWeekStart.setDate(currentDate.getDate() - 7); // Subtract 7 days for previous week's start date
    prevWeekStart.setDate(prevWeekStart.getDate() - prevWeekStart.getDay() + 1); // Set to the first day (Sunday) of previous week

    const prevWeekEnd = new Date(prevWeekStart);

    prevWeekEnd.setDate(prevWeekStart.getDate() + 6); // Add 6 days for previous week's end date (Saturday)

    setStartDate(prevWeekStart.toISOString().split("T")[0]);
    setEndDate(prevWeekEnd.toISOString().split("T")[0]);
  };

  return (
    <>
      <div>
        <h1>Welcome to Calendar to Invoice Converter</h1>
        <br></br>
        <h2>Before you start</h2>
        <p>
          Step 1: To begin, please visit the provided link to obtain an Access
          Token for yourself.
        </p>
        <a
          href="https://developer.microsoft.com/en-us/graph/graph-explorer"
          target="_blank"
        >
          <Button type="button" variant="contained" sx={{ height: "50px" }}>
            Get Access Token
          </Button>
        </a>
        <p>
          Step 2: Once you have reached the website, navigate to the Outlook
          Calendar section and ensure that the "Calendars.Read" access is
          enabled.
        </p>
        <p>
          Step 3: Lastly, copy the Access Token from the website and paste it
          here to initiate the process.
        </p>
        <br></br>
        <h3>
          Choose a date range for which you would like to retrieve calendar
          events, and witness the magic unfold. It's that simple.
        </h3>
        <p>
          Once you have clicked on the "Get Data" button, proceed to the
          Timesheet page and Invoice page to view the results.
        </p>
        <br></br>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 12, md: 1 }}
          sx={{ marginBottom: "55px" }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              id="authKey"
              label="Key"
              type="text"
              value={authKey}
              onChange={handleAuthKeyChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              id="start-date"
              label="Week Start Date"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              id="end-date"
              label="Week End Date"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="outlined"
              type="button"
              onClick={handlePrevWeekData}
              fullWidth
              sx={{ height: "55px" }}
            >
              Get Prev Week Data
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ height: "55px" }}
            >
              Get Data
            </Button>
          </Grid>
        </Grid>
      </form>
      <XDataGrid eventData={selectedEvent}></XDataGrid>
    </>
  );
};

export default API;
