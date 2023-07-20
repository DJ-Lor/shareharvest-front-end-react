export default function ContactUs() {
  return (
    <div className="md:px-12 lg:px-14 md:py-16 lg:py-10 flex flex-col-reverse md:flex-row justify-center wrap items-center">
      <div className="md:flex md:flex-col md:pr-36">
        <p className="text-3xl md:text-5xl font-bold mb-3 mt-8">Get In Touch</p>

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
        <p className="text-end pr-4 md:pt-4 text-lg md:text-2xl">
          <a
            href="mailto:helloshareharvest@gmail.com"
            className="border-b-4 border-pinkc text-xl"
          >
            Say Hello
          </a>
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/placeholder.png`}
        alt="green-chilli"
        className="h-44 w-44 mb-4"
      />
    </div>
  );
}
