import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CommentAvatar = ({ username }) => {
  const firstLetter = username ? username.charAt(0).toUpperCase() : "";

  return (
    <div className="flex items-center justify-center w-6 h-6 bg-greenc rounded-full">
      {username ? (
        <span className="text-light font-bold italic text-md">{firstLetter}</span>
      ) : (
        <FaUserCircle size={24} color="#A0AEC0" />
      )}
    </div>
  );
};

export default CommentAvatar;