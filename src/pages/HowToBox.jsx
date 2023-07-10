import Box from "../components/Box";



export default function HowToBox(){

  return(
    <div className="bg-light flex flex-col items-center py-8">
     <p className="text-pink text-3xl font-bold mb-4">How It Works</p>
     <div>
     {/* To Source */}
     <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
     <p className="text-pink text-xl font-bold mb-2 md:items-center flex">To Source</p>
     <Box number="01" title="Join" instruction="Sign up for FREE!" textColor="text-pink"/>
     <Box number="02" title="Profile" instruction="Personalise your community profile" textColor="text-pink"/>
     <Box number="03" title="Search" instruction="Look for a specific item or browse all listing categories" textColor="text-pink"/>
     <Box number="04" title="Connect & Collect" instruction="Comment and organise collection" textColor="text-pink"/>
     </div>
     {/* To Share */}
     <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
     <p className="text-green text-xl font-bold mb-2 mt-10 md:items-center flex">To Share</p>
     <Box number="01" title="Join" instruction="Sign up for FREE!" textColor="text-green"/>
     <Box number="02" title="Profile" instruction="Personalise your community profile" textColor="text-green"/>
     <Box number="03" title="List & Upload" instruction="List item to be shared and upload photos" textColor="text-green"/>
     <Box number="04" title="Exchange" instruction="Reply to a comment and organise collection" textColor="text-green"/>
     </div>
     </div>


    </div>
  )
}