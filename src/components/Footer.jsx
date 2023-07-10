import NewsletterForm from "./NewsletterForm";

export default function Footer(){

  return(
    <div className=" text-white bg-brown font-google px-6 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10">
    
      <div className="flex flex-col md:flex-row wrap md:justify-between">  
        {/* Newsletter  */}
        <div className="">
          <p className="text-2xl md:text-3xl font-bold">Sign Up for Newsletters</p>
          <NewsletterForm />
        </div>

        {/* Nav Reference */}
        <div className="flex flex-col pt-8 md:pt-0 pb-4 md:pb-0 md:flex-row space-y-2 md:space-y-0 md:space-x-20 md:pr-16">
          <ul className="text-lg space-y-3">
            <li>
              <a href="/" className="hover:border-b-4 hover:border-pink hover:duration-100">
              About Us 
              </a>
            </li>
            <li>
              <a href="/" className="hover:border-b-4 hover:border-pink hover:duration-100">
              How It Works 
              </a>
            </li>
            <li>
              <a href="/" className="hover:border-b-4 hover:border-pink hover:duration-100">
              Contact Us
              </a>
            </li>
           
          </ul>
          <ul className="text-lg space-y-3">
            <li>
              <a href="/" className="hover:border-b-4 hover:border-pink hover:duration-100">
              Instagram
              </a>
            </li>
            <li>
              <a href="/" className="hover:border-b-4 hover:border-pink hover:duration-100">
              LinkedIn
              </a>
            </li>
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
