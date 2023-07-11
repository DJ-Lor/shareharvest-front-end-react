import CallToAction from "../components/CallToAction";
import HowToBox from "./HowToBox";

export default function HowItWorks() {
  return (
    <div className="font-google bg-brownc text-white">
      <div className="px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col-reverse md:flex-row justify-center items-center wrap">
        <div className="md:flex md:flex-col md:pr-36">
          <p className="text-3xl md:text-5xl font-bold mb-3">
            It starts with connections
          </p>

          <p className="text-md md:text-xl">
            ShareHarvest is a money-free platform for connecting like-minded
            people who want to promote sustainable living, reduce wastage and
            share their passion for food and gardening.
          </p>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-44 w-44 mb-4"
        />
      </div>

      <HowToBox />
      <CallToAction />
    </div>
  );
}
