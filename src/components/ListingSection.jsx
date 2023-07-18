import axios from "axios";
import ListingCard from "./ListingCard";

import React, { useEffect, useState } from 'react'

export default function ListingSection(category, postcode, title) {
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    // Define query parameters as an object
    const queryParams = {
      category,
      postcode,
      title,
    };

    // Axios GET request with the query parameters
    axios.get(`${process.env.REACT_APP_API_URL}/listings`, { params: queryParams })
      .then((response) => {
        setListings(response.data.listings); 
      })
      .catch((error) => {
        console.error('Error fetching listings:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
  )
}
