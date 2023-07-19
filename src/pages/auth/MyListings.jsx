import axios from "axios";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import MyListingCard from "../../components/MyListingCard";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";

export default function MyListings() {
  // Axios get request and sending the userID 
  // Display retrieved information 

  const { user } = useAuth();
  const [listings, setListings] = useState([]);

   // Fetch listings when the component mounts
   useEffect(() => {
    startSearch();
  }, []);

  const startSearch = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
  
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/listings/mylistings`, config);
      setListings(response.data.listings)
    } catch (err) {
      return [];
    }}

  return (
    <div>
        <span className="flex items-center justify-between mb-5">
      {/* Back Link */}
      <span className="text-purplec flex space-x-2 hover:text-pinkc hover:underline"> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <a href="/dashboard"> Back to Dashboard</a>
      </span>

      {/* Greeting */}
      <Button type="button" className="bg-purplec" pill>
        Hello, {user?.username}!
      </Button>
      </span>

      <div className="grid md:grid-cols-2">
        {listings.length === 0 ? (
          <p className="text-purplec flex justify-center italic mt-20">No listings created</p>
        ) : (
          listings.map((listing) => (
            <MyListingCard key={listing._id} listing={listing} />
          ))
        )}
      </div>
    </div>
  );
}
