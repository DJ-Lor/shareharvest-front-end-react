'use client';

import { Carousel } from 'flowbite-react';

export default function Listing() {
  return (
    <div className="bg-brownc px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 ">
    <div className="flex max-w-md flex-col gap-4 bg-pinkc box-border px-6 py-12 rounded-md ">

    <Carousel >
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
      
    </div>
    <p className=" text-white font-bold text-center text-lg px-4 pb-4">Code Sent!</p>
     
    </div>
  )
}


