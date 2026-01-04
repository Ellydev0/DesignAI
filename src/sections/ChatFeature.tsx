import ChatPreview from "../components/ChatPreview";

const ChatFeature = () => {
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-[2.5rem] font-plus font-bold w-[70%] mb-3">
          Design conversations, not aimless prompts.
        </h1>
        <p className="text-[.9rem] font-[100] text-text/70 w-[50%]">
          Engage in natural, design-focused conversations with an AI that
          understands your project's visual language, user goals, and
          constraints. It provides clear, structured feedback on layout,
          typography, color, and accessibility, suggests concrete improvements
          and alternative solutions, and helps you iterate faster by proposing
          actionable next steps, rationale, and follow-up suggestions.
        </p>
      </div>
      <ChatPreview />
    </div>
  );
};

export default ChatFeature;
