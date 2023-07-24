import { Button, Select, TextInput, Pagination, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { startSearch } from "../../helper/startSearch";
import ListingCard from "../../components/ListingCard";
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [postcode, setPostcode] = useState("");
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Paginate Values
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    queryListings();
  }, [currentPage]);

  function queryListings() {
    setLoading(true);
    setSearchPerformed(true);
    startSearch(category, postcode, title, currentPage).then((response) => {
      setListings(response.foundListings);
      setTotalPages(response.totalPages);
      setLoading(false);
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    queryListings();
  }

  return (
    <div>
      {/* Greeting */}

      <div className="flex justify-end">
        <Button type="button" className="bg-pinkc" pill>
          Hello, {user?.username}!
        </Button>
      </div>

      {/* Search Bar Main*/}
      <form className="mt-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col-reverse">
          <div className="flex justify-start pt-1 space-x-2">
            {/* Categories */}
            <div>
              <Select
                id="countries"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">All Categories</option>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Dairy / Eggs</option>
                <option>Homemade Goods</option>
                <option>Seedlings</option>
                <option>Others</option>
              </Select>
            </div>

            {/* Post Code */}
            <div>
              <Select
                id="postcodes"
                value={postcode}
                onChange={(event) => setPostcode(event.target.value)}
              >
                <option value="">All Eastern Suburbs Postcode</option>
                <option>3000</option>
                <option>3045</option>
                <option>2000</option>
                <option>5000</option>
                <option>2034</option>
                <option>3865</option>
              </Select>
            </div>
          </div>

          {/* Search Bar */}
          <TextInput
            id="dashboard-input"
            placeholder="What are you looking for?"
            rightIcon={MagnifyingGlassIcon}
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            disabled={loading}
          />
        </div>
      </form>

      <div className="grid md:grid-cols-2 py-12">
        {(() => {
          if (loading) {
            return (
              <div className="flex justify-center">
                <Spinner size="lg" color="pink" />
              </div>
            );
          } else if (searchPerformed && listings?.length === 0) {
            return (
              <p className="text-purplec flex justify-center italic mt-20">
                No results found
              </p>
            );
          } else {
            return listings?.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ));
          }
        })()}
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
