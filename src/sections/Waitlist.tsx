import { useState } from "react";
import Button from "../components/Button";
import SplitTitle from "../components/SplitTitle";
import SplitText from "../components/SplitText";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";

const Waitlist = () => {
  const container = useRef(null!);
  const [email, setEmail] = useState("");
  const text = "Get Early Access";
  const subText = `Join our waitlist to be notified when DesignAI is ready. You'll be among the first to experience the future of design.`;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission logic here
    console.log("Submitted email:", email);
    alert(`Thank you for joining the waitlist with ${email}!`);
    setEmail("");
  };

  useScrollAnimation(
    container,
    ".access",
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.04,
    },
    {
      opacity: 0,
      y: 10,
    },
  );

  useScrollAnimation(
    container,
    ".text",
    {
      yPercent: 0,
      stagger: 0.02,
      ease: "power4.out",
    },
    {
      yPercent: 100,
    },
  );

  useScrollAnimation(
    container,
    ".form",
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    },
    {
      opacity: 0,
      y: 10,
    },
  );

  useScrollAnimation(
    container,
    ".info",
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    },
    {
      opacity: 0,
      y: 10,
    },
  );

  return (
    <section className="py-28 mt-20 bg-black" id="waitlist" ref={container}>
      <div className="mx-auto text-center max-w-2xl">
        <div className="mb-4 text-[2.5rem] font-plus font-bold">
          <SplitTitle text={text} selector="access" />
        </div>
        <p className="mx-auto w-[80%] text-[0.9rem] font-light text-text/80 mb-8">
          <SplitText text={subText} selector="text" />
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 justify-center items-center mx-auto form"
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
        <p className="text-xs text-text/60 mt-4 info">
          We respect your privacy. No spam.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;
