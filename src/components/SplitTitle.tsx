import type { FC } from "react";

interface SplitTitleProps {
  text: string;
  selector: string;
}

const SplitTitle: FC<SplitTitleProps> = ({ text, selector }) => {
  return (
    <>
      {text.split("").map((c, i) =>
        c !== " " ? (
          <div key={i} className={`inline-block opacity-0 ${selector}`}>
            {c}
          </div>
        ) : (
          <div key={i} className="inline-block">
            &nbsp;
          </div>
        ),
      )}
    </>
  );
};

export default SplitTitle;
