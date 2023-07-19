import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Label, TextInput, Textarea, Button } from "flowbite-react";

import Comment from "../../components/Comment";
import { editListing } from "../../helper/editListing";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";
import { deleteListing } from "../../helper/deleteListing";

export default function Listing() {
  const [listing, setListing] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedListing, setEditedListing] = useState({});
  const [category, setCategory] = useState("");
  const [postcode, setPostcode] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const { id: listingId } = useParams();
  const { user } = useAuth();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Make the API request when the component mounts
    fetchListing();
  }, []);

  const fetchListing = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/listings/${listingId}`
      );
      const fetchedListing = res.data.listing;
      setListing(fetchedListing);
      setCategory(fetchListing.category);
      setPostcode(fetchListing.postcode);
      setCommentList(res.data.comments);
    } catch (error) {
      console.error("Error fetching listing:", error);
    }
  };

  function setEditMode() {
    setIsEditing(true);
    setEditedListing(listing);
  }

  function handleChangeCategory(event) {
    setCategory(event.target.value);
    setEditedListing({ ...editedListing, category });
  }

  function handleChangePostcode(event) {
    setPostcode(event.target.value);
    setEditedListing({ ...editedListing, postcode });
  }

  // Saving the edited listing to the database
  async function handleSaveChanges(event) {
    event.preventDefault();
    // Call the editListing function with the updated data and listingId
    const category = editedListing.category;
    const postcode = editedListing.postcode;
    const title = editedListing.title;
    const description = editedListing.description;
    await editListing(listingId, category, postcode, title, description);
    setListing(editedListing);
    setIsEditing(false);
  }

  // For edit and delete functions, check if the user created the listing
  const userId = user?._id;
  const listingUserId = listing.userId;
  const isListOwner = listingUserId === userId;

  // Deleting the current listing from the database
  async function handleDeleteListing(event) {
    event.preventDefault();
    if (isListOwner) {
      await deleteListing(listingId);
      setIsDeleted(true);
    }
  }

  return (
    <div
      className="bg-brownc px-10 md:px-12 lg:px-14 
    py-10 md:py-16 lg:py-10"
    >
      {/* Back Link */}
      <div className="flex items-center justify-between mb-5">
        <Button onClick={goBack} className="text-purplec hover:underline">
          <ArrowLeftIcon className="text-purplec h-5 w-5 hover:text-pinkc hover:underline" />
          <p className="ml-2">Back to Dashboard</p>
        </Button>
      </div>

      {/* Listing Card */}
      <div
        className="flex max-w-md flex-col gap-4
       bg-light box-border px-6 py-12 rounded-md"
      >
        <div>
          {isListOwner ? (
            <span className="flex justify-end text-sm">
              {isEditing ? (
                <Button
                  onClick={handleSaveChanges}
                  className="bg-pinkc hover:bg-pink2c"
                  pill
                >
                  SAVE
                </Button>
              ) : (
                <span className="flex justify-end space-x-4 text-sm">
                  <Button
                    onClick={setEditMode}
                    className="bg-pinkc hover:bg-pink2c"
                    pill
                  >
                    EDIT
                  </Button>
                  <div>
                    {isDeleted ? (
                      <Navigate to="/listings/mylistings" />
                    ) : (
                      <Button
                        onClick={handleDeleteListing}
                        className="bg-pinkc hover:bg-pink2c"
                        pill
                      >
                        DELETE
                      </Button>
                    )}
                  </div>
                </span>
              )}
            </span>
          ) : null}
        </div>
        <div className="p-2 space-y-4">
          {isEditing ? (
            <>
              {/* Title */}
              <div className="mb-2 block">
                <Label
                  htmlFor="title1"
                  value="Title"
                  className=" text-brownc"
                  required
                />
              </div>
              <TextInput
                id="title1"
                placeholder="title"
                required
                type="text"
                className=" text-brownc"
                onChange={(e) =>
                  setEditedListing({ ...editedListing, title: e.target.value })
                }
                value={editedListing.title}
              />

              {/* Categories Dropdown */}
              <div>
                <label
                  htmlFor="categories"
                  className="block mb-2 text-sm font-medium text-brownc"
                >
                  Select Category
                </label>
                <select
                  id="categories"
                  className="bg-white text-brownc border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required"
                  onChange={handleChangeCategory}
                  value={category}
                >
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Dairy / Eggs</option>
                  <option>Homemade Goods</option>
                  <option>Seedlings</option>
                  <option>Others</option>
                </select>
              </div>
              {/* Post Code Dropdown */}
              <div>
                <label
                  htmlFor="postcodes"
                  className="block mb-2 text-sm font-medium text-brownc"
                >
                  Select Postcode
                </label>
                <select
                  id="postcodes"
                  className="bg-white text-brownc border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required"
                  onChange={handleChangePostcode}
                  value={postcode}
                >
                  <option>3000</option>
                  <option>3045</option>
                  <option>2000</option>
                  <option>5000</option>
                  <option>2034</option>
                  <option>3865</option>
                </select>
              </div>

              <div className="max-w-md" id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="e.g. need to pick apples from tree"
                  required
                  rows={4}
                  className="text-sm"
                  value={editedListing.description}
                  onChange={(e) =>
                    setEditedListing({
                      ...editedListing,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <>
              <p className="text-brownc font-bold text-2xl">{listing.title}</p>
              <p className="text-brownc text-xl">
                Category: {listing.category}
              </p>
              <p className="text-brownc text-xl">
                Postcode: {listing.postcode}
              </p>
              <div className="space-y-1">
                <p className="text-brownc text-xl">Description:</p>
                <p className="text-brownc text-xl">{listing.description}</p>
              </div>
            </>
          )}
        </div>
        {isEditing ? null : <Comment comments={commentList} />}
      </div>
    </div>
  );
}
