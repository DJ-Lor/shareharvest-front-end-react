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
      {/* Greeting */}
      <Button type="button" className="bg-pinkc" pill>
        Hello, {user?.username}!
      </Button>

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
