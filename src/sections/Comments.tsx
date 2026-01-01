import { GrAnnounce } from "react-icons/gr";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Comments = () => {
  const comments = [
    {
      id: 1,
      profilePic: "./img/brick.webp",
      alias: "John Doe",
      position: "CEO at X",
      comment: "This is an amazing product! It has changed the way I work.",
    },
    {
      id: 2,
      profilePic: "./img/brick.webp",
      alias: "Jane Smith",
      position: "CTO at Y",
      comment:
        "Incredible experience! The design is intuitive and user-friendly.",
    },
    {
      id: 3,
      profilePic: "./img/brick.webp",
      alias: "Alice Johnson",
      position: "Designer at Z",
      comment: "I love how seamless everything feels. Great job!",
    },
  ];

  const container = useRef<HTMLDivElement>(null!);

  useScrollAnimation(container, ".title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".comments", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  });

  useScrollAnimation(container, ".comments", {
    x: "-15%",
    duration: 40,
    delay: 1.6,
    repeat: -1,
  });

  return (
    <div className="mt-50 xl:px-13" ref={container}>
      <div className="title text-center mb-16 opacity-0 translate-y-[10%]">
        <h2 className="text-[3rem] font-bold font-plus">
          <GrAnnounce fontSize={68} className="mx-auto mb-2" /> What Our{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent w-fit xl:text-[3.2rem] font-grand tracking-wider">
            Customers
          </span>{" "}
          Say!
        </h2>
      </div>

      <div className="comments grid grid-cols-5 w-[300%] gap-6 xl:grid-cols-10 opacity-0">
        {Array.from({ length: 10 }).map((_, index) => {
          const { profilePic, alias, position, comment } =
            comments[index % comments.length];
          return (
            <div
              key={index}
              className="shadow-lg bg-bg rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={profilePic}
                alt={`${alias}'s profile`}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{alias}</h3>
              <p className="text-sm text-gray-500">{position}</p>
              <p className="mt-2 text-gray-700">{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
