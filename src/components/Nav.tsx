const Nav = () => {
  return (
    <>
      <nav className="flex justify-between absolute w-full pr-[1rem] py-5 px-5 items-center font-plus z-3 xl:px-6">
        <div className=" font-bold font-plus text-[1.5rem] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          <a href="#">DesignAI</a>
        </div>

        <div className="flex justify-between items-center xl:w-50 xl:pr-4">
          <a
            href="#"
            className="text-primary hover:text-accent transition-colors duration-330 font-[500] hidden xl:block"
          >
            Log In
          </a>
          <button className="bg-primary px-4 py-2 rounded-full hover:bg-accent active:bg-text-1 transition-colors duration-330 text-bg">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
