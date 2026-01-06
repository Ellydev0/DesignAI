import Button from "./Button";

const Nav = () => {
  return (
    <>
      <nav className="z-90 absolute flex w-full justify-between pr-[1rem] py-5 px-5 items-center font-plus xl:px-6">
        <div className=" w-fit font-bold font-plus text-[1.5rem] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          <a href="#">DesignAI</a>
        </div>

        <div className="flex justify-between items-center gap-6 xl:pr-4">
          <a href="#waitlist">
            <Button text="Join the waitlist" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
