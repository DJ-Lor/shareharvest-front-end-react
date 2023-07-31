import { useEffect, useRef } from "react"
import { Button } from "flowbite-react";

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
    <div className="border border-gray-300 block w-full p-2.5 rounded-lg">
      <Button 
      onClick={() => widgetRef.current.open()}
      className="bg-gray-300 hover:bg-gray-500 text-brownc flex justify-center"
      pill
      >
        Upload photo
      </Button>
    </div>
  )
}