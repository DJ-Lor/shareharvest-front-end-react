import React from 'react'
import { Link } from 'react-router-dom';

export default function ListingCard({listing}) {
  return (
    <Link to={`/listings/${listing._id}/comments`}>
    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg box-border p-4 border-gray-200 m-4">
      <h2>{listing.title}</h2>
      <p>Category: {listing.category}</p>
      <p>Postcode: {listing.postcode}</p>
    </div>
    </Link>
  );
};
