import CallToAction from "../../components/CallToAction";
import HowToBox from "../../components/HowToBox";

export default function HowItWorks() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center wrap md:pb-10">
        <div className="md:flex md:flex-col md:pr-20">
          <p className="text-3xl md:text-5xl font-bold mb-3 mt-3">
            It starts with connections
          </p>

          <p className="text-lg md:text-xl pb-10">
            ShareHarvest is a{" "}
            <strong className="text-purplec">money-free</strong> platform for
            connecting like-minded people who want to promote sustainable
            living, reduce wastage and share their passion for food and
            gardening.
          </p>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/images/broccoli.png`}
          alt="brocolli"
          className="h-44 w-44 mb-4"
        />
      </div>

      <HowToBox />
      <CallToAction />
    </div>
  );
}
