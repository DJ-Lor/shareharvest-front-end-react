import CustomBox from "../components/CustomBox";

export default function HowToBox() {
  return (
    <div className="bg-light flex flex-col items-center py-8">
      <p className="text-pinkc text-3xl font-bold mb-4">How It Works</p>
      <div>
        {/* To Source */}
        <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
          <p className="text-pinkc text-xl font-bold mb-2 md:items-center flex">
            To Source
          </p>
          <CustomBox
            number="01"
            title="Join"
            instruction="Sign up for FREE!"
            textColor="text-pinkc"
          />
          <CustomBox
            number="02"
            title="Profile"
            instruction="Personalise your community profile"
            textColor="text-pinkc"
          />
          <CustomBox
            number="03"
            title="Search"
            instruction="Look for a specific item or browse all listing categories"
            textColor="text-pinkc"
          />
          <CustomBox
            number="04"
            title="Connect & Collect"
            instruction="Comment and organise collection"
            textColor="text-pinkc"
          />
        </div>
        {/* To Share */}
        <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
          <p className="text-greenc text-xl font-bold mb-2 mt-10 md:items-center flex">
            To Share
          </p>
          <CustomBox
            number="01"
            title="Join"
            instruction="Sign up for FREE!"
            textColor="text-greenc"
          />
          <CustomBox
            number="02"
            title="Profile"
            instruction="Personalise your community profile"
            textColor="text-greenc"
          />
          <CustomBox
            number="03"
            title="List & Upload"
            instruction="List item to be shared and upload photos"
            textColor="text-greenc"
          />
          <CustomBox
            number="04"
            title="Exchange"
            instruction="Reply to a comment and organise collection"
            textColor="text-greenc"
          />
        </div>
      </div>
    </div>
  );
}
