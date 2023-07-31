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
    <div className="bg-light border border-gray-300 block w-full p-4 rounded-lg text-center">
      <input
        type="file"
        id="fileInput"
        name="filename"
        onChange={onClickUpload}
      />
      {uploaded && <p className="text-greenc">Uploaded successfully!</p>}
    </div>
  )
}