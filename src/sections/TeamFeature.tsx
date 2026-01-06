import { FaUser } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useRef } from "react";
import SplitTitle from "../components/SplitTitle";

const TeamFeature = () => {
  const container = useRef(null!);
  const text = "Shared workspaces, not scattered files.";

  useScrollAnimation(
    container,
    ".share",
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
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
    {
      opacity: 0,
      y: 30,
    },
  );
  return (
    <div ref={container} className="flex justify-between items-center mt-40">
      <div>
        <div className="text-[2.5rem] font-plus font-bold w-[90%] mb-3">
          <SplitTitle text={text} selector="share" />
        </div>
        <p className="text-[.9rem] font-[100] text-text/70 w-[60%] text opacity-0">
          Collaborate in persistent workspaces that keep designs, comments, and
          AI feedback attached to the right screens and versions. Assign
          reviewers, surface action items, annotate changes, and maintain a
          single source of truth so your team stays aligned, decisions are
          traceable, and you can move from feedback to finished work faster.
        </p>
      </div>

      <div className="flex gap-3 w-fit">
        <div className="flex flex-col gap-3">
          <div className="w-fit bg-primary/20 border border-primary rounded-xl p-4">
            <FaUser className="text-[6rem]" />
          </div>
          <div className="w-fit bg-primary/20 border border-primary rounded-xl p-4">
            <FaUser className="text-[6rem]" />
          </div>
        </div>

        <div className="flex flex-col gap-3 translate-y-6">
          <div className="w-fit bg-primary/20 border border-primary rounded-xl p-4">
            <FaUser className="text-[6rem]" />
          </div>
          <div className="w-fit bg-primary/20 border border-primary rounded-xl p-4">
            <FaUser className="text-[6rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamFeature;
