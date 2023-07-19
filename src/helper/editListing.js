import axios from "axios";
import { toast } from "react-hot-toast";

export const editListing = async (listingId, category, postcode, title, description) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/listings/${listingId}`,
      { category, postcode, title, description },
      config
    );
    toast.success("Listing updated");
  } catch (err) {
    toast.error("There was an error updating the listing");
  }
};
