import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserInfo = async () => {
      if (token) {
        try {
          axios.defaults.headers.common["x-auth-token"] = token;
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/info`);
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

  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10">
       {/* Back Link */}
      <span className="text-purplec flex space-x-2 hover:text-pinkc hover:underline mb-5"> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <a href="/dashboard"> Back to Listing</a>
      </span>

      <div className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className="text-brownc font-bold text-center text-xl px-4 pb-4">
          Your Profile
        </p>
        {user ? (
          <div className="text-m space-y-8">
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold text-pink">Username:</p>
              <p>{user.username}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">Email:</p>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-bold">Postcode:</p>
              <p>{user.postcode}</p>
            </div>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
}
