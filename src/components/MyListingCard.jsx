import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function MyListingCard({ listing }) {
  const formattedDate = new Date(listing.createdAt).toLocaleString();

  return (
    <Link to={`/listings/${listing._id}/comments`}>
      <div className="pointer">
        <div className="py-4 px-4 mb-4 bg-white rounded-lg rounded-t-lg box-border p-4 border-gray-200 m-4 text-brownc">
          <p className="text-sm italic pb-4">Created At: {formattedDate}</p>
          <h2 className="font-bold">{listing.title}</h2>
          <p>Category: {listing.category}</p>
          <p>Postcode: {listing.postcode}</p>
          <div className="flex justify-center pt-4">
            <Button className="bg-pinkc" pill>
              Edit/Delete
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
