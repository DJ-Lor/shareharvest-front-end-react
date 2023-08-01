import { useEffect, useRef, useState } from "react"

export default function UploadWidget(){
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  const [uploaded, setUploaded] = useState(false)

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName:'drmryuqyy',
      uploadPreset: 'shareharvestuploadpreset'
    }, function(error, result) {
      console.log(result);
    })
  },[])

  function onClickUpload(){
    widgetRef.current.open()
    setUploaded(true)
  }
  
  return(
    <div className="bg-light border border-gray-300 w-full p-4 rounded-lg text-center flex justify-center">
    <button 
    type="submit"
    onClick={onClickUpload}
    className="bg-gray-300 text-light p-2 flex justify-center rounded-lg"
    pill
    >
      Upload photo
    </button>
    {uploaded && <p className="text-greenc flex text-center items-center">Uploaded successfully!</p>}
  </div>
  )
}

//uploaded successfully should be based off something else, not click 

// update the file name to reflect once uploaded in view 
// edit the file name with added code for uniqueness before saving to atlas
// display the image in view end point 