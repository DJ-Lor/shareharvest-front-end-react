

export default function Dashbboard() {
  return (
    <div>
      
      {/* Greeting */}

      <button
      type="button"
      className="bg-pinkc hover:bg-pink2c text-black text-xs m:text-md p-1 px-3 rounded-full"
    >
    Hello, INSERT!
    </button>

    {/* Search Bar */}
      <form className="mt-4">
        <div className="flex flex-col-reverse">      
        <div className="flex justify-center space-x-4 pt-1">
          {/* Categories */}
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
             text-black bg-greenc rounded hover:bg-greenc focus:ring-2 focus:outline-none
              focus:ring-light"
            type="button"
          >
            All categories
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-greenc rounded-lg w-44"
          >
            <ul
              className="py-2 text-sm text-black"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Vegetables
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Fruits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Homemade Goods
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Dairy/Eggs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Seedlings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Others
                </button>
              </li>
            </ul>
          </div>

            {/* Postcode */}
   
            <button
            id="dropdown-button2"
            data-dropdown-toggle="dropdown2"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
             text-black bg-purplec hover:bg-purplec rounded focus:ring-2 focus:outline-none
              focus:ring-light"
            type="button"
          >
            Choose Postcode
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown2"
            className="z-10 hidden bg-purplec rounded-lg w-44"
          >
            <ul
              className="py-2 text-sm text-black"
              aria-labelledby="dropdown-button2"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2043
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2031
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2000
                </button>
              </li>    
            </ul>
          </div>
          </div>



      

        {/* Search Bar */}
          <div className="relative w-full">
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
          </div>
        </div>
      </form>
    </div>
  );
}
