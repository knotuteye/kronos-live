import React, { useEffect, useState } from "react";
import { FetchVenues } from "../../api";
import ImportCSVSection from "../../components/ImportCSVSection";
import Table from "../../components/Table";

export default function Venues() {
  const [venues, setVenues] = useState(
    JSON.parse(window.localStorage.getItem("venues")) || []
  );

  function initVenues() {
    FetchVenues()
      .then((venues) => {
        let venueArray = [];
        for (const key in venues) {
          venueArray[key] = venues[key];
        }
        setVenues(venueArray);
      })
      .catch((err) => console.error(err));
  }

  useEffect(initVenues, []);

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">Venues</h1>

      {venues.length ? (
        <Table
          data={venues}
          headers={["ID", "Name", "Capacity", "Room"]}
        ></Table>
      ) : (
        <ImportCSVSection
          onImport={(venueData) => {
            setVenues(venueData);
            window.localStorage.setItem("venues", JSON.stringify(venueData));
          }}
        ></ImportCSVSection>
      )}
    </div>
  );
}
