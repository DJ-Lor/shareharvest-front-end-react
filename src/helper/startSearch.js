
import axios from "axios";

export const startSearch = async (category, postcode, title) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
     // Define query parameters as an object
     const queryParams = {
      category,
      postcode,
      title,
    };
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/listings`, { params: queryParams, config });
    return response.data.listings;
  } catch (err) {
    return [];
  }
}

 