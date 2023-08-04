import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [postcode, setPostcode] = useState("");

  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserInfo = async () => {
      if (token) {
        try {
          axios.defaults.headers.common["x-auth-token"] = token;
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/users/info`
          );
          setUser(res.data.user); // Save the user data to the state
        } catch (err) {
          console.error(err);
        }
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
      }
    };

    fetchUserInfo();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="md:px-12 lg:px-14 py-10 md:py-16 lg:py-10">
      {/* Back Link */}
      <div className="flex items-center justify-between mb-5">
        <Button onClick={goBack} className="text-purplec">
          <ArrowLeftIcon className="text-purplec h-5 w-5 hover:text-pinkc hover:underline" />
          <p className="ml-2">Back</p>
        </Button>
      </div>

      <div className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className="text-brownc font-bold text-center text-xl px-4 pb-4">
          Your Profile
        </p>
        {user ? (
          <div className="text-m space-y-8  text-brownc">
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold text-pink">Username</p>
              <p>{user.username}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">Email</p>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              {/* Post Code */}
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm 
                  font-medium text-brownc"
                >
                  Select Postcode
                </label>
                <select
                  id="countries"
                className="bg-white text-brownc border
                border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 required"
                  onChange={handleChangePostcode}
                  value={postcode}
                >
                  <option value="">Select an option</option>
                  <option>3000</option>
                  <option>3045</option>
                  <option>2000</option>
                  <option>5000</option>
                  <option>2034</option>
                  <option>3865</option>
                </select>
              </div>
              {/* <p className="font-bold">Postcode</p>
              <p>{user.postcode}</p> */}
            </div>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
}
