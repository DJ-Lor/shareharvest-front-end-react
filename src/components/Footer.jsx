import NewsletterForm from "./NewsletterForm";

export default function Footer(){

  return(
    <div className=" text-white bg-brown font-google px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10">
    
      <div className="flex flex-row wrap justify-between">  
        {/* Newsletter  */}
        <div className="">
          <p className="text-3xl font-bold">Sign Up for Newsletters</p>
          <NewsletterForm />
        </div>

        {/* Nav Reference */}
        <div className="flex flex-row space-x-20 pr-16">
          <ul className="text-lg space-y-3">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Contact Us</li>
          </ul>
          <ul className="text-lg space-y-3">
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>  

      <div className="flex flex-row wrap items-center justify-between pt-2">
        <p className="text-s">© Copyright 2023</p>
        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-14 w-14"
          />
      </div>

    </div>
  )
}
