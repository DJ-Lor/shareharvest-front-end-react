import CallToAction from "../../components/CallToAction";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center wrap items-center">
        <div className="md:flex md:flex-col md:pr-36">
          <p className="text-3xl md:text-5xl font-bold mb-3 mt-3">
            ShareHarvest Story
          </p>

          <p className="text-lg md:text-xl">
            If you are like us, you found yourself enthusiastically planting
            fruit trees, veggies and herbs only to discover you can’t possibly
            use everything up before it goes off or goes to seed.
          </p>

          <p className="text-lg md:text-xl pt-4">
            Wouldn’t it be great if you have a means to take excess you have and
            share it with your local community?
          </p>

          <div className="text-lg md:text-xl pt-4 pb-10">
            This is where <strong className="text-purplec">ShareHarvest</strong> comes in.
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-44 w-44 mb-4"
        />
      </div>
      {/* <img
        src={`${process.env.PUBLIC_URL}/images/placeholder-fruits.jpeg`}
        alt="fruits"
        className="rounded-lg mb-4"
      /> */}

      <div className="bg-light rounded-lg px-4 md:px-12 py-10 flex flex-col lg:flex-row justify-center wrap items-center space-y-8 md:space-x-12">
        <p className="text-brownc text-lg">
          Not everyone will grow the same produce. Sometimes,
          our harvest produces more than what we can consume. The ShareHarvest
          platform opens up an excellent opportunity to <strong>give what’s not useful
          for one to another who will find it useful.</strong>
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-44 w-44 mb-4"
        />

        <p className="text-brownc text-lg text-right lg:text-left">
          We live in a world where we are physically close to everyone, yet
          feel ever so distant from our neighbours. The ShareHarvest app opens up
          the opportunity to <strong>build a harmonious and friendly relationship with
          your local community</strong> who have something to offer that you might need.
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-44 w-44 mb-4"
        />
      </div>
      <CallToAction />
    </div>
  );
}
