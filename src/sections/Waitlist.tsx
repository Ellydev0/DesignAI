import { useState } from "react";
import Button from "../components/Button";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission logic here
    console.log("Submitted email:", email);
    alert(`Thank you for joining the waitlist with ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-28 mt-20 bg-black" id="waitlist">
      <div className="mx-auto text-center max-w-2xl">
        <h2 className="mb-4 text-[2.5rem] font-plus font-bold">
          Get Early Access
        </h2>
        <p className="mx-auto w-[80%] text-[0.9rem] font-light text-text/80 mb-8">
          Join our waitlist to be notified when DesignAI is ready. You'll be
          among the first to experience the future of design.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 justify-center items-center mx-auto"
        >
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-md px-5 py-3 rounded-lg border-2 border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-magenta-500 text-white"
            required
          />
          <Button text="Join Waitlist" className="w-fit" />
        </form>
        <p className="text-xs text-text/60 mt-4">
          We respect your privacy. No spam.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;
