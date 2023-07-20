import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { TextInput } from "flowbite-react";
import { HiArrowSmRight } from "react-icons/hi";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const createSubscriber = async (email) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/subscribe`,
        { email },
        config
      );
      toast.success("Subscription added!");
    } catch (err) {
      toast.error("There has been an error");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createSubscriber(email)
    setEmail("")
  };

  return (
    <div className="max-w-md">
      <form onSubmit={handleFormSubmit}>
      <TextInput
        id="email4"
        placeholder="Email"
        rightIcon={HiArrowSmRight}
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      </form>
    </div>
  );
}