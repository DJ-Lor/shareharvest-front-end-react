export default function AboutUs() {
  return (
    <div className="font-google bg-brownc text-white">
      <div className="px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col-reverse md:flex-row justify-center wrap items-center">
        <div className="md:flex md:flex-col md:pr-36">
          <p className="text-3xl md:text-5xl font-bold mb-3">
            ShareHarvest Story
          </p>

          <p className="text-md md:text-xl">
            If you are like us, you found yourself enthusiastically planting
            fruit trees, veggies and herbs only to discover you can’t possibly
            use everything up before it goes off or goes to seed.
          </p>

          <p className="text-md md:text-xl pt-4">
            Wouldn’t it be great if you have a means to take excess you have and
            share it with your local community?
          </p>

          <div className="text-md md:text-xl pt-4">
            This is where <strong>ShareHarvest</strong> comes in.
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
          alt="green-chilli"
          className="h-44 w-44 mb-4"
        />
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/placeholder-fruits.jpeg`}
        alt="fruits"
        className=""
      />

      <div className="bg-light px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col md:flex-row justify-center wrap items-center space-y-8">
        <p className="text-black">
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

        <p className="text-black text-right">
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
    </div>
  );
}
