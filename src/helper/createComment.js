
import axios from "axios";
import { toast } from "react-hot-toast";

export const createComment = async (comment, listingId) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/listings/${listingId}/comments`, 
    { comment, listingId }, 
    config
    );
    toast.success("New comment created")
  } catch (err) {
    toast.error("There has been an error")
  }

  return {createComment}
}