import HowToBox from "./HowToBox";

export default function HowItWorks() {

  return(
    <div className="font-google bg-brown text-white">

      <div className="px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col md:flex-row justify-center wrap">
      <p className="text-3xl font-bold mb-3">It starts with connections</p>

      <p>ShareHarvest is a money-free 
        platform for connecting like-minded people who want to promote sustainable living, 
        reduce wastage and share their passion for food and gardening. </p>
      </div>
      
      <HowToBox />

    </div>
  )

}