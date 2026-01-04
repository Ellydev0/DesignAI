const Footer = () => {
  return (
    <div className="relative  bg-bg text-text overflow-hidden mt-20">
      <div className="absolute w-150 h-150 -top-60 -right-10 rotate-z-35 border-100 rounded-2xl border-solid border-primary/30 z-0" />

      <footer className=" relative z-10 ">
        <div className="z-12">
          <div className=" px-12 pt-13 mb-90 ">
            <div className="mb-8">
              <p className="text-[1.5rem] font-plus xl:text-[1.1rem] xl:w-[40%]">
                Empowering your creativity with AI-driven design solutions that
                make every idea faster, smarter, and beautifully intentional.
              </p>
            </div>

            <div className="float-right flex flex-row-reverse gap-15 z-2">
              <ul className=" text-[1.2rem] xl:text-[1rem]">
                <li>
                  <a href="#" className="text-text-1  text-[.8rem]">
                    Company
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4  hover:text-accent active:text-gray-600 transition-colors "
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4  hover:text-accent active:text-gray-600 transition-colors"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4 hover:text-accent active:text-gray-600 transition-colors "
                  >
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className=" text-[1.2rem] xl:text-[1rem]">
                <li>
                  <a href="#" className="text-text-1  text-[.8rem]">
                    Get in touch
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4 hover:text-accent active:text-gray-600 transition-colors "
                  >
                    Media
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4 hover:text-accent active:text-gray-600 transition-colors "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" cursor-pointer mt-4 hover:text-accent active:text-gray-600 transition-colors "
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" -z-1 absolute  font-bold font-plus w-full h-fit text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent -bottom-80 xl:top-50">
            <a href="# " className="text-[5rem] xl:text-[18rem] ">
              DesignAI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
