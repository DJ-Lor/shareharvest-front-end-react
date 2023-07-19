
import axios from "axios";

export const startSearch = async (category, postcode, title, currentPage) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
     // Define query parameters as an object
     const queryParams = {
      category,
      postcode,
      title,
      page: currentPage, 
    };
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/listings`, { params: queryParams, config });
    return { foundListings: response.data.listings, responseTotalPages: response.data.responseTotalPages};
  } catch (err) {
    return { foundListings: [], responseTotalPages: 0 };
  }
}

 