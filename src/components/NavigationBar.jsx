import Button from "./Button";


export default function NavigationBar(){
  return(
    <div className= "text-white bg-brown font-google px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex wrap items-center justify-between">
      {/* Logo */}
      <div className="flex flex-row">
      <div className="text-4xl font-bold pr-24">ShareHarvest</div>
          {/* Menu */}
            <ul className="text-xl flex flex-row space-x-16 items-center">
              <li>How It Works</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>  
      </div>

          {/* Login and Sign Up */}
          <div className="flex flex-row space-x-4 items-center">
              <p className="text-xl">Log In</p>
              <Button>Sign Up</Button>
          </div>
     
      
    </div>
  )
}


