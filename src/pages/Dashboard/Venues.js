import React, { useEffect, useState } from "react";
import { FetchVenues } from "../../api";
import ImportCSVSection from "../../components/ImportCSVSection";
import SectionHeaderBar from "../../components/SectionHeaderBar";
import Table from "../../components/Table";

export default function Venues() {
  const [venues, setVenues] = useState(
    JSON.parse(window.localStorage.getItem("venues")) || []
  );

  function persistVenueData(venueData) {
    setVenues(venueData);
    window.localStorage.setItem("venues", JSON.stringify(venueData));
  }

  function clearVenueData() {
    setVenues([]);
    window.localStorage.removeItem("venues");
  }

  return (
    <div className="flex space-y-5 flex-col p-6 overflow-y-auto h-full">
      <SectionHeaderBar
        heading="Venues"
        onDelete={clearVenueData}
        onImport={persistVenueData}
      ></SectionHeaderBar>
      {venues.length ? (
        <Table
          data={venues}
          headers={[
            "No.",
            "ID",
            "Room Number",
            "Name",
            "Capacity",
            "Latitude",
            "Longitude",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ]}
          columns={[
            "ID",
            "room_number",
            "name",
            "capacity",
            "latitude",
            "longitude",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ]}
        ></Table>
      ) : (
        <ImportCSVSection onImport={persistVenueData}></ImportCSVSection>
      )}
    </div>
  );
}
