import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { startSearch } from "../../helper/startSearch";
import ListingCard from "../../components/ListingCard";
import ReactPaginate from "react-paginate";

// Hook Import ---
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
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // TODO: This is hardcoded atm on the backend to 2
  // const itemsPerPage = 2;

  useEffect(() => {
    queryListings();
  }, [currentPage]);

  function queryListings() {
    setLoading(true);
    setSearchPerformed(true);
    startSearch(category, postcode, title, currentPage).then((response) => {
      setListings(response.foundListings);
      setTotalPages(response.responseTotalPages);
      setLoading(false);
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    queryListings();
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  if (loading) {
    return (
      <p className="text-purplec flex justify-center italic mt-20">
        Loading...
      </p>
    );
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
          <div className="flex justify-center space-x-4 pt-1">
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
          {/* <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-black bg-light rounded-lg focus:ring-light focus:border-light"
              placeholder="I am looking for ..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div> */}
        </div>
      </form>

      <div className="grid md:grid-cols-2 py-12">
        {searchPerformed && listings?.length === 0 ? (
          <p className="text-purplec flex justify-center italic mt-20">
            No results found
          </p>
        ) : (
          listings?.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))
        )}
      </div>

      {/* Pagination Component */}
      <div>
      {(totalPages === 1) ? (null) :
      (<ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        pageCount={totalPages}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        className="text-light flex space-x-4 justify-center mb-6"
      />)}
      </div>
    </div>
  );
}
