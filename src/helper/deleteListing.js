import axios from "axios";
import { toast } from "react-hot-toast";

export const deleteListing = async (listingId) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/listings/${listingId}`,
      config
    );
    toast.success("Listing deleted");
  } catch (err) {
    toast.error("There was an error in trying to delete the listing");
  }
};
