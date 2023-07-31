export default function ContactUs() {
  return (
    <div className="text-brownc flex flex-col-reverse md:flex-row justify-center md:justify-evenly wrap items-center p-4 md:p-10 bg-light rounded-lg mb-10">
      <div className="md:flex md:flex-col md:pr-36">
        <p className="text-3xl md:text-5xl font-bold mb-3">Get In Touch</p>

        <p className="text-lg md:text-xl mb-4">
          ShareHarvest is a{" "}
          <strong className="text-purplec">free service</strong> for everyone
          and we intend to keep it that way.
        </p>
        <p className="text-lg md:text-xl mb-4">
          We are an entirely volunteer-driven and aim to regularly check our
          emails and respond back the soonest we can.
        </p>
        <p className="text-lg md:text-xl mb-4">
          We appreciate your patience and looking forward to hearing from you!
        </p>
        <p className="text-end pr-4 pt-3 pb-2 md:pb-0 md:pt-4 text-lg md:text-2xl">
          <a
            href="mailto:helloshareharvest@gmail.com"
            className="border-b-4 border-pinkc text-xl md:text-3xl"
          >
            Say Hello
          </a>
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/basket-big.png`}
        alt="basket-big"
        className="h-72 mb-4"
      />
    </div>
  );
}
