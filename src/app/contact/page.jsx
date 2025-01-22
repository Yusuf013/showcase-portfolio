import Link from 'next/link';
import Image from "next/image";
import Footer from '../components/Footer';


export default function ContactPage() {
  return (
    <div className="bg-[#283127]">
      {/* SVG Container */}
      <div className="relative w-full">
        {/* SVG Inline */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 682"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="38" width="1440" height="604" fill="#1C221B" />
          <path
            d="M0 0V42H853.889L915.954 77H1440V35H915.954L853.889 0H0Z"
            fill="#F47519"
          />
          <path
            d="M0 605V647H503.889L565.954 682H1440V640H565.954L503.889 605H0Z"
            fill="#9A9B9B"
          />
        </svg>

        {/* Content bovenop de SVG */}
        <div className="absolute inset-0 flex justify-around items-center justify-center">
          <div className="w-[85%] flex ">
            <div className=" w-1/3 flex flex-col justify-center">
              <div className=''>Yusuf Tasci</div>
              <div className='py-5'>Yusuftasci013@gmail.com</div>
              <div className='w-[70%]'>Based in Tilburg, The Netherlands, I specialize in web development and UX/UI design</div>
            </div>
            <div className="flex flex-col items-center justify-center text-[80px] w-1/3">
              <span>Lets</span>
              <span>work</span>
              <span>Together!</span>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
              <div>
                <a href="https://www.linkedin.com/in/yusuf-tasci-44a710264/">
                  <Image
                    src="/images/linkedin (14).png"
                    alt="Logo"
                    width={66}
                    height={76}
                  />
                </a>
              </div>
              <div className='py-7'>
                <a href="https://github.com/Yusuf013">
                  <Image
                    src="/images/github (6).png"
                    alt="Logo"
                    width={66}
                    height={76}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
