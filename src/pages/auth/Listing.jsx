import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment";
import { editListing } from "../../helper/editListing";
import { Label, TextInput, Textarea, Button } from "flowbite-react";

// Hook Import ---
import { useAuth } from "../../hooks/useAuth";

export default function Listing() {
  const [listing, setListing] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedListing, setEditedListing] = useState({});
  const [category, setCategory] = useState("");
  const [postcode, setPostcode] = useState("");
  let { id: listingId } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    // Make the API request when the component mounts
    fetchListing(listingId);
  }, []);

  const fetchListing = async (listingId) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/listings/${listingId}/comments`
      );
      const fetchedListing = res.data.listing;
      setListing(fetchedListing);
      setCategory(fetchListing.category);
      setPostcode(fetchListing.postcode);
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
    setPostcode(event.target.value); // Update postcode state on change
    setEditedListing({ ...editedListing, postcode }); // Update editedListing's postcode
  }

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

  // // For edit and delete functions, check if the user created the listing
  // const userId = user?._id
  // const listingUserId = listing.userId

  // if (listingUserId.toString() !== userId.toString()) {
  //   throw new Error('You are not authorised to edit this listing')
  // } else {

  // }

  return (
    <div
      className="bg-brownc px-10 md:px-12 lg:px-14 
    py-10 md:py-16 lg:py-10"
    >
      <span className="flex items-center justify-between mb-5">
        {/* Back Link */}
        <span className="text-purplec flex space-x-2 hover:text-pinkc hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <a href="/dashboard"> Back to Listing</a>
        </span>

        {/* Greeting */}
        <Button type="button" className="bg-purplec" pill>
          Hello, {user?.username}!
        </Button>
      </span>

      {/* Listing Card */}
      <div
        className="flex max-w-md flex-col gap-4
       bg-light box-border px-6 py-12 rounded-md"
      >
        <span className="flex justify-end text-sm">
          {isEditing ? (
            <Button onClick={handleSaveChanges} className="bg-pinkc hover:bg-pink2c" pill>
              SAVE
            </Button>
          ) : (
            <span className="flex justify-end space-x-4 text-sm">
              <Button onClick={setEditMode} className="bg-pinkc hover:bg-pink2c" pill>
                EDIT
              </Button>
              <Button onClick={setEditMode} className="bg-pinkc hover:bg-pink2c" pill>
                DELETE
              </Button>
            </span>
          )}
        </span>
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
        {isEditing ? (null) : 
        (<Comment />)}
      </div>
    </div>
  );
}
