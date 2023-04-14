import React from 'react';
import XDataGrid from '../api/XDataGrid';
import Header from '@/components/Header';

const index = () => {

    const getDataFromLocalStorage = (key: string): any | null => {
        if (typeof window !== "undefined" && window.localStorage) {
            // Check if window is defined and localStorage is available (to avoid issues during server-side rendering)
            const storedData = localStorage.getItem(key);
            return storedData ? JSON.parse(storedData) : null;
        }
        return null;
    };
    
    const eventdatas = getDataFromLocalStorage("eventdata");
    const endDate = getDataFromLocalStorage("enddate");

    const newEndDate = new Date(endDate).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

    return (
        <div>
            <Header></Header>
            <h1>Time Card Week: {newEndDate}</h1>
            <br></br>
            <XDataGrid eventData={eventdatas}></XDataGrid>
        </div>
    );
};

export default index;
