import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-transparent mt-20 relative">
      {/* SVG Background */}
      <div className="relative w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.000681996 40L-1 219H844.086H938.652H1440L1441 52.3084H916.591L854.483 40H0.000681996Z"
            fill="#1C221B"
          />
          <path
            d="M1 0V42H854.889L916.954 77H1441V35H916.954L854.889 0H1Z"
            fill="#F47519"
          />
        </svg>

        {/* Content over de SVG */}
        <div className="absolute inset-0 flex justify-between items-center px-8">
          {/* Navigatie links */}
          <div className="w-[50%] p-4 flex justify-between mt-10 ml-10">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#F47519] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/aboutme"
              className="text-gray-300 hover:text-[#F47519] transition-colors duration-300"
            >
              About me
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-[#F47519] transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-[#F47519] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Contactgegevens rechts */}
          <div className="w-[35%] h-[45%] flex flex-col items-center justify-end mt-10">
            <p className="text-sm">Yusuftasci013@gmail.com</p>
            <div className="flex w-32 justify-between px-15 mt-3">
              <a href="https://www.linkedin.com/in/yusuf-tasci-44a710264/">
                <Image
                  src="/images/linkedin (14).png"
                  alt="Logo"
                  width={33}
                  height={38}
                />
              </a>
              <a href="https://github.com/Yusuf013">
                  <Image
                    src="/images/github (6).png"
                    alt="Logo"
                    width={33}
                    height={38}
                  />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
