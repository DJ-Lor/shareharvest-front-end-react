import { useEffect, useRef } from "react"
import { Button } from "flowbite-react";

export default function UploadWidget(){
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName:'drmryuqyy',
      uploadPresent: 'shareharvestuploadpreset'
    }, function(error, result) {
      console.log(result);
    })
  },[])
  
  return(
    <div>
      <Button 
      onClick={() => widgetRef.current.open()}
      className="bg-pinkc hover:bg-pink2c"
      pill
      >
        Upload 
      </Button>
    </div>
  )
}