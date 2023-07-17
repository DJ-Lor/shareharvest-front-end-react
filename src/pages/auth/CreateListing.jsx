import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { useState } from "react";
import { createListing } from "../../helper/createListing";
import { Navigate } from "react-router-dom";


export default function CreateListing() {
  // Setup local state
  const [category, setCategory] = useState("")
  const [postcode, setPostcode] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [listCreated, setListCreated] = useState(false)

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    createListing(category, postcode, title, description).finally(() => {
      setLoading(false);
      setListCreated(true)
    });
  };

  return (
    <div>
    {listCreated ? (
      <Navigate to="/dashboard" />
    ) : (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 
    py-10 md:py-16 lg:py-10 ">
      <form className="flex max-w-md flex-col gap-4
       bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold 
        text-center text-lg px-4 pb-4">
          Create New Listing
        </p>

        {/* File Upload */}

        {/* <label
          className="block mb-2 text-sm font-medium text-black"
          htmlFor="multiple_files"
        >
          Upload Images
        </label>
        <input
          className="block w-full text-sm text-black border border-gray-300 rounded-lg 
    cursor-pointer bg-white"
          id="multiple_files"
          type="file"
          multiple
          required
        /> */}

        {/* Categories */}
        <div>
        <label htmlFor="countries" className="block mb-2 text-sm 
        font-medium text-brownc">Select Category
        </label>
        <select id="countries" className="bg-white
         text-brownc border border-gray-300 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 
         block w-full p-2.5 required" 
         onChange={handleChangeCategory}
         value={category}>
            <option value="">Select an option</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy / Eggs</option>
            <option>Homemade Goods</option>
            <option>Seedlings</option>
            <option>Others</option>
          </select>
        </div>

         {/* Post Code */}
         <div>
        <label htmlFor="countries" className="block mb-2 text-sm 
        font-medium text-brownc">
          Select Postcode</label>
        <select id="countries" className="bg-white text-browncborder
         border-gray-300 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 
         block w-full p-2.5 required"
         onChange={handleChangePostcode}
         value={postcode}>
            <option value="">Select an option</option>
            <option>3000</option>
            <option>3045</option>
            <option>2000</option>
            <option>5000</option>
            <option>2034</option>
            <option>3865</option>
          </select>
        </div>

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
          onChange={handleChangeTitle}
          value={title}
        />
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
            onChange={handleChangeDescription}
            value={description}
          />
        </div>

        <Button
              onClick={handleFormSubmit}
              className="bg-pinkc"
              pill
              isProcessing={loading}
              disabled={loading}
            >
              Post Listing
            </Button>
      </form>
    </div>)}
  </div>
  );
}
