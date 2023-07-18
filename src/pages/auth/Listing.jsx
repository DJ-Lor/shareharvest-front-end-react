import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment";
import { Button } from "flowbite-react";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";

export default function Listing() {
  const [listing, setListing] = useState({});
  let { id: listingId } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    // Make the API request when the component mounts
    fetchListing(listingId);
  }, []);

  const fetchListing = async (listingId) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/listings/${listingId}/comments`
      );
      const fetchedListing = res.data.listing;
      setListing(fetchedListing);
    } catch (error) {
      console.error("Error fetching listing:", error);
    }
  };

  return (
    <div
      className="bg-brownc px-10 md:px-12 lg:px-14 
    py-10 md:py-16 lg:py-10"
    >
      <span className="flex items-center justify-between mb-5">
      {/* Back Link */}
      <span className="text-purplec flex space-x-2 hover:text-pinkc hover:underline"> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <a href="/dashboard"> Back to Listing</a>
      </span>

      {/* Greeting */}
      <Button type="button" className="bg-purplec" pill>
        Hello, {user?.username}!
      </Button>
      </span>

      {/* Listing Card */}
      <div
        className="flex max-w-md flex-col gap-4
       bg-light box-border px-6 py-12 rounded-md"
      >
        <div className="p-2 space-y-4">
          <p className="text-brownc font-bold text-2xl">{listing.title}</p>
          <p className="text-brownc text-xl">Category: {listing.category}</p>
          <p className="text-brownc text-xl">Postcode: {listing.postcode}</p>
          <div className="space-y-1">
            <p className="text-brownc text-xl">Description:</p>
            <p className="text-brownc text-xl">{listing.description}</p>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
}
