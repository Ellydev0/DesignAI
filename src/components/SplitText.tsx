import type { FC } from "react";

interface SplitTextProps {
  text: string;
  selector: string;
}

const SplitText: FC<SplitTextProps> = ({ text, selector }) => {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className={`inline-block ${selector}`}>{word}&nbsp;</span>
        </span>
      ))}
    </>
  );
};

export default SplitText;
