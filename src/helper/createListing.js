
import axios from "axios";
import { toast } from "react-hot-toast";

export const createListing = async (category, postcode, title, description, imageUrlsPulled) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/listings/`, 
    { category, postcode, title, description, imageUrlsPulled }, 
    config
    );
    toast.success("New listing created")
  } catch (err) {
    toast.error("There has been an error")
  }
}