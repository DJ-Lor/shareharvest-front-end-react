import { Button, Select, TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// Hook Import ---
import { useAuth } from "../../hooks/useAuth";
import ListingSection from "../../components/ListingSection";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      {/* Greeting */}

      <Button type="button" className="bg-pinkc" pill>
        Hello, {user?.username}!
      </Button>

      {/* Search Bar Main*/}
      <form className="mt-4">
        <div className="flex flex-col-reverse">
          <div className="flex justify-center space-x-4 pt-1">
            {/* Categories */}
            <div>
              <Select id="countries">
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
              <Select id="countries">
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
            id="email4"
            placeholder="What are you looking for?"
            required
            rightIcon={MagnifyingGlassIcon}
            type="email"
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
      <ListingSection />
    </div>
  );
}
