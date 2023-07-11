export default function Home() {
  return (
    <div className="font-google bg-brownc text-white px-10 md:px-12 lg:px-14 py-10 md:py-16 lg:py-10 flex flex-col md:flex-row justify-center wrap">
      <img
        src={`${process.env.PUBLIC_URL}/images/placeholder-home.jpeg`}
        alt="home"
        className="rounded-lg pb-14 md:pr-14"
      />

      <div className="">
        <p className="text-3xl md:text-5xl font-bold">Your Local</p>
        <p className="text-3xl md:text-5xl font-bold">Community</p>
        <p className="text-pinkc text-3xl md:text-5xl font-bold">
          Sharing Platform
        </p>

        <p className="py-5 pr-4 md:pr-5 md:text-xl">
          Share homegrown produce, homemade things and excess items that might
          be useful for someone else. Share more, waste less.
        </p>

        <p className="text-end pr-4 md:pr-20 text-lg md:text-2xl">
          <a href="/" className="border-b-4 border-pinkc">
            Get Started
          </a>
        </p>
      </div>
    </div>
  );
}
