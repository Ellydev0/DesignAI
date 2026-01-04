import StructuredCritique from "../components/Critique";

const CritiqueFeature = () => {
  return (
    <div className="flex flex-col mt-40">
      <div className="mb-10">
        <h1 className="text-[2.5rem] font-plus font-bold w-[70%] mb-3">
          Clear critique, not vague opinions.
        </h1>
        <p className="text-[.9rem] font-[100] text-text/70 w-[60%]">
          Receive immediate, structured critique that pinpoints hierarchy,
          spacing, color, contrast, accessibility, copy, and overall layout.
          Each point includes clear rationale, a priority level, and actionable
          steps or alternatives you can apply and validate—so you know not just
          what to change, but why it matters and how to improve the design
          effectively.
        </p>
      </div>
      <div className="flex justify-end">
        <StructuredCritique />
      </div>
    </div>
  );
};

export default CritiqueFeature;
