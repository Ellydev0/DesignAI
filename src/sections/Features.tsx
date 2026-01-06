import ChatFeature from "./ChatFeature";
import TeamFeature from "./TeamFeature";
import CritiqueFeature from "./CritiqueFeature";
import ImageFeature from "./ImageFeature";

const Feature = () => {
  return (
    <div className="px-6 mt-0 xl:mt-24">
      <ChatFeature />
      <TeamFeature />
      <CritiqueFeature />
      <ImageFeature />
    </div>
  );
};

export default Feature;
