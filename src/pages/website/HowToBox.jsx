import CustomBox from "../../components/CustomBox";

export default function HowToBox() {
  return (
    <div className="bg-light flex flex-col items-center py-8 rounded-lg">
      <p className="text-pinkc text-3xl font-bold mb-4">How It Works</p>
      <div>
        {/* To Source */}
        <p className="text-pinkc text-xl font-bold mb-2 flex justify-center md:justify-start">
            To Source
          </p>
        <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
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
        <p className="text-greenc text-xl font-bold mb-2 mt-10 flex justify-center md:justify-start">
            To Share
          </p>
        <div className="space-y-2 md:space-x-8 flex items-center flex-col md:flex-row">
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
