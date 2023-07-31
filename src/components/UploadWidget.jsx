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
    <div className="bg-light border border-gray-300 block w-full p-2.5 rounded-lg">
      <button 
      type="submit"
      onClick={onClickUpload}
      className=" hover:bg-gray-500 text-brownc flex justify-center"
      pill
      >
        Upload photo
      </button>
      {uploaded && <p>Uploaded successfully!</p>}
    </div>
  )
}