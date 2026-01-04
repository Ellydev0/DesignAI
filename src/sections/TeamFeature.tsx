import { FaUser } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

const TeamFeature = () => {
  return (
    <div className="flex justify-between items-center mt-40">
      <div>
        <h1 className="text-[2.5rem] font-plus font-bold w-[90%] mb-3">
          Shared workspaces, not scattered files.
        </h1>
        <p className="text-[.9rem] font-[100] text-text/70 w-[60%]">
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

        <ImSpinner11 className="text-2xl -translate-x-3 text-primary" />
      </div>
    </div>
  );
};

export default TeamFeature;
