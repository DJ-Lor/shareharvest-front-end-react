

export default function CallToAction(){
  return(
    <div className="font-google bg-brown text-white px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col md:flex-row ">
      <div className="flex flex-col md:pr-36">
      <p className="text-3xl md:text-5xl font-bold">Share more,</p>
      <p className="text-3xl md:text-5xl font-bold">waste less.</p>
      <p className="text-lg md:text-xl pt-4">Building sustainable communities one homegrown excess produce at a time.</p>
      <p className="text-end pr-4 md:pt-4 text-lg md:text-2xl">
        <a href="/" className="border-b-4 border-pink">Get Started
        </a>
      </p>
      </div>
      <img
          src={`${process.env.PUBLIC_URL}/images/placeholder-veggie.jpeg`}
          alt="veggies"
          className="pt-8 md:h-72"
          />
    </div>
  )
}