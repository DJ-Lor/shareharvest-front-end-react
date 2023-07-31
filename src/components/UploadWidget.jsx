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
    <div className="bg-light border border-gray-300 block w-full p-4 rounded-lg text-center flex justify-center">
    <button 
    type="submit"
    onClick={onClickUpload}
    className="bg-brownc text-light p-1 flex justify-center"
    pill
    >
      Upload photo/s
    </button>
    {uploaded && <p className="text-greenc">Uploaded successfully!</p>}
  </div>
  )
}


// update the file name to reflect once uploaded in view 
// edit the file name with added code for uniqueness before saving to atlas
// display the image in view end point 