
import axios from "axios";

export default async function getUserInfo() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      axios.defaults.headers.common["x-auth-token"] = token;
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/info`);
      const user = res.data.user
    } catch (err) {
      console.error(err);
    }
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
return (
        <div></div>

)}