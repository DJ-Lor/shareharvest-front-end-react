import { useEffect, useRef, useState } from "react"

export default function UploadWidget({func}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [uploaded, setUploaded] = useState(false);
  const [listingImageUrls, setListingImageUrls] = useState([]);
  const [fileImageNames, setFileImageNames] = useState([]);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "drmryuqyy",
        uploadPreset: "shareharvestuploadpreset",
      },
      function (error, result) {
        console.log(result.event);
        if (!error && result && result.event === "queues-end") {
          console.log(result);
          // Check if 'info' and 'files' properties exist before accessing them
          const files = result.info?.files || [];
          // Create an array of URLs from the files list
          const imageUrls = files.map((file) => file.uploadInfo?.url);
          // Set the state with the array of URLs
          setListingImageUrls(imageUrls);

          // Create an array of image names
          const imageNames = files.map((file, index) => (( index ? "," : "") + file.name));
          setFileImageNames(imageNames);

          // Save the image name to MongoDB Atlas here
          // saveImageToMongoAtlas(result.info.original_filename);
          setUploaded(true);
        }
        // console.log(result);
        // console.log(fileImageNames);
        // console.log(listingImageUrls);
      }
    );
  }, []);

  useEffect(() => {
    // This effect will run after each render and will log the state values
    // console.log("Updated File Image Names:", fileImageNames);
    // console.log("Updated Listing Image URLs:", listingImageUrls);
    // Call the 'func' prop with the listingImageUrls array
    func(listingImageUrls);
  }, [fileImageNames, listingImageUrls]); // Add fileImageNames and listingImageUrls as dependencies

  function onClickUpload() {
    widgetRef.current.open();
  }

  //  // Function to save the image name to Mongo Atlas
  //  async function saveImageToMongoAtlas(imageName) {
  //   const config = {
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   try {
  //     await axios.post(`${process.env.REACT_APP_API_URL}/listings/`, {
  //       listingImage: listingImage, config
  //     });
  //     console.log("Image name saved to MongoDB:", imageName);
  //   } catch (error) {
  //     console.error("Error saving image name to MongoDB:", error);
  //   }
  // }

  return (
    <div className="bg-light border border-gray-300 w-full p-4 rounded-lg text-center flex justify-center">
      <button
        type="submit"
        onClick={onClickUpload}
        className="bg-gray-500 text-light p-2 flex justify-center rounded-lg"
        pill
      >
        Upload photo
      </button>
      {uploaded && (
        <p className="text-greenc flex text-center items-center">
          Uploaded successfully! Image Name: {fileImageNames}
        </p>
      )}
    </div>
  );
}

//uploaded successfully should be based off something else, not click

// update the file name to reflect once uploaded in view
// edit the file name with added code for uniqueness before saving to atlas
// display the image in view end point
