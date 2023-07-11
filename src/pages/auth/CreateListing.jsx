"use client";

import { Label, TextInput, Textarea, FileInput } from "flowbite-react";
import CustomButton from "../../components/CustomButton";

export default function CreateListing() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 ">
      <form className="flex max-w-md flex-col gap-4 bg-light box-border px-6 py-12 rounded-md">
        <p className=" text-brownc font-bold text-center text-lg px-4 pb-4">
          Create New Listing
        </p>
       
       {/* File Upload */}
     
    <label class="block mb-2 text-sm font-medium text-black" for="multiple_files">Upload Images</label>
    <input class="block w-full text-sm text-black border border-gray-300 rounded-lg 
    cursor-pointer bg-light" id="multiple_files" type="file" multiple/>
   
    
       {/* Categories */}
       <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-20 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
             text-black bg-greenc rounded hover:bg-greenc focus:ring-2 focus:outline-none
              focus:ring-light"
            type="button"
          >
            All categories
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-20 hidden bg-greenc rounded-lg w-8/12"
          >
            <ul
              className="py-2 text-sm text-black"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Vegetables
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Fruits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Homemade Goods
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Dairy/Eggs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Seedlings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  Others
                </button>
              </li>
            </ul>
          </div>

          <button
            id="dropdown-button2"
            data-dropdown-toggle="dropdown2"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
             text-black bg-purplec hover:bg-purplec rounded focus:ring-2 focus:outline-none
              focus:ring-light"
            type="button"
          >
            Choose Postcode
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown2"
            className="z-10 hidden bg-purplec rounded-lg w-8/12"
          >
            <ul
              className="py-2 text-sm text-black"
              aria-labelledby="dropdown-button2"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2043
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2031
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 font-bold hover:bg-light"
                >
                  2000
                </button>
              </li>    
            </ul>
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
            required
            type="text"
            className=" text-brownc"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="quantity1"
              value="Quantity(approx # pcs)"
              className=" text-brownc"
            />
          </div>
          <TextInput
            id="quantity1"
            required
            placeholder="e.g. 20pcs or 3 bags"
            type="password"
            className=" text-brownc"
          />
        </div>
        <div
      className="max-w-md"
      id="textarea"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="description"
          value="Description"
        />
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
