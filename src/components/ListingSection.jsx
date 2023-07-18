// import axios from "axios";
import React from "react";
import ListingCard from "./ListingCard";

export default function ListingSection(listings) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {listings.length &&
        listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
    </div>
  );
}
