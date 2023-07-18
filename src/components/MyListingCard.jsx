import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

export default function MyListingCard({listing}) {
  return (
    <Link to={`/listings/${listing._id}/comments`}>
    <div className='bg-purplec'>
    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg box-border p-4 border-gray-200 m-4">
      <h2>{listing.title}</h2>
      <p>Category: {listing.category}</p>
      <p>Postcode: {listing.postcode}</p>
    </div>
    <span className='flex justify-center'>
    <Button
              className="bg-pinkc"
              pill
            >
              Edit
            </Button>
      
     <Button
              className="bg-pinkc"
              pill
            >
              Shared
            </Button>
    </span>
    </div>
    </Link>
  );
};
