import { useEffect, useRef } from "react"

export default function UploadWidget(){
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName:'drmryuqyy',
      uploadPreset: 'shareharvestuploadpreset'
    }, function(error, result) {
      console.log(result);
    })
  },[])
  
  return(
    <div className="bg-light border border-gray-300 block w-full p-2.5 rounded-lg">
      <button 
      type="submit"
      onClick={() => widgetRef.current.open()}
      className=" hover:bg-gray-500 text-brownc flex justify-center"
      pill
      >
        Upload photo
      </button>
    </div>
  )
}