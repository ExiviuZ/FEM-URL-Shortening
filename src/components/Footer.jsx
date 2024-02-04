function Footer() {
  return (
    <footer className="bg-app-neutral-very-dark-violet text-app-neutral-gray py-[4rem] flex flex-col sm:flex-row sm:px-[2rem] lg:px-[5rem] gap-[2rem]">
      <a href="" className="mx-auto mb-[2.5rem] sm:w-[30%] ">
        <img src="images/logo-dark.svg" alt="" />
      </a>
      <ul className="flex flex-col gap-[2rem] sm:w-[70%] sm:flex-row sm:flex-wrap justify-between ">
        <li>
          <span className="text-white font-[700] mb-[2rem] block">
            Features
          </span>
          <ul className="flex flex-col gap-[0.75rem]">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </li>
        <li>
          <span className="text-white font-[700] mb-[2rem] block">
            Resources
          </span>
          <ul className="flex flex-col gap-[0.75rem]">
            <li>Blog</li>
            <li>Developer</li>
            <li>Support</li>
          </ul>
        </li>
        <li>
          <span className="text-white font-[700] mb-[2rem] block">Company</span>
          <ul className="flex flex-col gap-[0.75rem]">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </li>
        <ul className="flex justify-center gap-[1rem]">
          <li>
            <img src="images/icon-facebook.svg" alt="" />
          </li>
          <li>
            <img src="images/icon-twitter.svg" alt="" />
          </li>
          <li>
            <img src="images/icon-pinterest.svg" alt="" />
          </li>
          <li>
            <img src="images/icon-instagram.svg" alt="" />
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
