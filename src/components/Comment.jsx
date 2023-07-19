import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { createComment } from "../helper/createComment";
import CommentAvatar from "./CommentAvatar"

export default function Comment() {
  // Setup local state
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);

  let { id: listingId } = useParams();

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    createComment(comment, listingId).finally(() => {
      setLoading(false);
      setComment("");
    });
  };

  useEffect(() => {
    // Make the API request when the component mounts
    fetchComments(listingId);
  }, [listingId, commentList]);

  const fetchComments = async (listingId) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/listings/${listingId}/comments`
      );

      const fetchedComments = res.data.comments;
      setCommentList(fetchedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            Comments
          </h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
              value={comment}
              onChange={handleChangeComment}
            ></textarea>
          </div>
          <Button
            onClick={handleCommentSubmit}
            className="bg-pinkc hover:bg-pink2c"
            pill
            isProcessing={loading}
            disabled={loading}
          >
            Post comment
          </Button>
        </form>

        {/* Comment Thread */}
        <div>
        {commentList.length > 0 ?
        (<article className="p-6 mb-6 text-base bg-white rounded-lg">
          <div className="text-sm text-gray-600 space-y-4">
            {commentList
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((comment, index) => (
                <div key={index} className="border-b space-y-2 pb-2">
                  <span className="flex space-x-3 items-center">
                    <CommentAvatar username={comment.userId.username} />
                    <p className="text-md text-brownc font-bold">
                      {comment.userId.username}
                    </p>
                    <p className="text-xs italic text-gray-300">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </span>
                  <p className="text-gray-500">{comment.comment}</p>
                </div>
              ))}
          </div>
        </article>) : (null)}
      </div>
      </div>
    </section>
    
  );
}
