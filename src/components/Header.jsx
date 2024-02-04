import Navbar from "./Navbar";

function Header() {
  return (
    <header className="pt-[2rem] pb-[9rem] px-[1rem] sm:px-[2rem] lg:px-[5rem]">
      <Navbar />
      <section className="sm:flex sm:flex-row-reverse sm:gap-[1rem] sm:mt-[5rem]">
        <img
          src="images/illustration-working.svg"
          alt=""
          className="scale-[1.4] translate-x-[80px] mt-[5rem] max-w-[350px] mx-auto sm:max-w-[none] z-[0] sm:scale-[1] sm:translate-x-0 sm:object-cover sm:object-left sm:flex-grow-1 sm:mt-0 sm:w-[50%]"
        />

        <div className="mt-[6rem] sm:w-[50%]">
          <div className="mx-auto max-w-[500px] w-[90%] lg:mx-0">
            <h1 className="text-[2.5rem] font-[700] leading-[1.2] ">
              More than just shorter links
            </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="py-[1rem] px-[2rem] rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
