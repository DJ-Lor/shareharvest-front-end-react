import axios from "axios";
import { useState, useEffect } from "react";
import MyListingCard from "../../components/MyListingCard";
import { Pagination } from "flowbite-react";

export default function MyListings() {
  const [listings, setListings] = useState([]);

    // Paginate Values
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);  

  // Fetch listings when the component mounts
  useEffect(() => {
    startSearch();
  }, [currentPage]);

  const startSearch = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/listings/mylistings?page=${currentPage}`,config
      );
      // Sort listings by the latest createdAt date
      const sortedListings = response.data.listings.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setListings(sortedListings);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      return [];
    }
  };

  return (
    <div>
      <span className="flex items-center justify-between mb-5">
        {/* Back Link */}
        <span className="text-purplec flex space-x-2 hover:text-pinkc hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <a href="/dashboard"> Back to Dashboard</a>
        </span>
      </span>

      <div className="grid md:grid-cols-2 pb-10">
        {listings.length === 0 ? (
          <p className="text-purplec flex justify-center italic mt-20">
            No listings created
          </p>
        ) : (
          listings.map((listing) => (
            <MyListingCard key={listing._id} listing={listing} />
          ))
        )}
      </div>
       {/* Pagination Component */}
       <div className="flex justify-center mb-5">
        {totalPages === 1 ? null : (
          <Pagination
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}
