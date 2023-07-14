"use client";

import { Label, TextInput, Textarea } from "flowbite-react";
import CustomButton from "../../components/CustomButton";

export default function CreateListing() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 ">
      <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">
          Create New Listing
        </p>

        {/* File Upload */}

        <label
          class="block mb-2 text-sm font-medium text-black"
          for="multiple_files"
        >
          Upload Images
        </label>
        <input
          class="block w-full text-sm text-black border border-gray-300 rounded-lg 
    cursor-pointer bg-white"
          id="multiple_files"
          type="file"
          multiple
          required
        />

        {/* Categories */}
        <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-brownc">Select Category</label>
        <select id="countries" class="bg-white text-brownc border border-gray-300 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required">
 
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
        <label for="countries" class="block mb-2 text-sm font-medium text-brownc">Select Postcode</label>
        <select id="countries" class="bg-white text-browncborder border-gray-300 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required">
 
            <option>3000</option>
            <option>3045</option>
            <option>2000</option>
            <option>5000</option>
            <option>2034</option>
            <option>3865</option>
          </select>
        </div>

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
        />
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="itemname1"
              value="Item Name"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="itemname1"
            placeholder="item name"
            type="text"
            className=" text-brownc"
          />
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
          />
        </div>

        <CustomButton type="submit" className="bg-pinkc">
          Post Listing
        </CustomButton>
      </form>
    </div>
  );
}
