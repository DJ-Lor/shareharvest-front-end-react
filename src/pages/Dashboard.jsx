

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

    {/* Search Bar Main*/}
      <form className="mt-4">
        <div className="flex flex-col-reverse">      
        <div className="flex justify-center space-x-4 pt-1">
        {/* Categories */}
        <div>
        <select id="countries" class="bg-greenc text-brownc text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required">
            <option selected className="text-sm font-medium text-brownc">All Categories</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy / Eggs</option>
            <option>Homemade Goods</option>
            <option>Seedlings</option>
            <option>Others</option>
          </select>
        </div>

         {/* Post Code */}
         <div>
        <select id="countries" class="bg-purplec text-browncborder border-gray-300 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required">
            <option selected className="text-sm font-medium text-black">AU Postcode</option>
            <option>3000</option>
            <option>3045</option>
            <option>2000</option>
            <option>5000</option>
            <option>2034</option>
            <option>3865</option>
          </select>
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
