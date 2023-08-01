
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function UploadWidget(){
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [uploaded, setUploaded] = useState(false)
  const [listingImageUrls, setListingImageUrls] = useState([])
  const [fileImageNames, setFileImageNames] = useState([])


  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "drmryuqyy",
        uploadPreset: "shareharvestuploadpreset",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
            // Create an array of URLs from the files list
             const imageUrls = result.info.files.map(
              (file) => file.uploadInfo.url
            )
            // Set the state with the array of URLs
            setListingImageUrls(imageUrls)

            // Create an array of image names 
            const imageNames = result.info.file.map(
              (file) => file.name
            )
          setFileImageNames(imageNames)
          // Save the image name to MongoDB Atlas here
          // saveImageToMongoAtlas(result.info.original_filename);
          setUploaded(true)
        }
        console.log(result)
        console.log(fileImageNames)
        console.log(listingImageUrls)
        }
    );
  }, []);

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
  
  return(
    <div className="bg-light border border-gray-300 w-full p-4 rounded-lg text-center flex justify-center">
    <button 
    type="submit"
    onClick={onClickUpload}
    className="bg-gray-500 text-light p-2 flex justify-center rounded-lg"
    pill
    >
      Upload photo
    </button>
    {uploaded && <p className="text-greenc flex text-center items-center">Uploaded successfully! Image Name: {fileImageNames}</p>}
  </div>
  )
}

//uploaded successfully should be based off something else, not click 

// update the file name to reflect once uploaded in view 
// edit the file name with added code for uniqueness before saving to atlas
// display the image in view end point 