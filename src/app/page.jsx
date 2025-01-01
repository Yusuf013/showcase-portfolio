import NameAnimation from "./components/NameAnimation"
import FloatingText from './components/FloatingText';
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-center p-3">
        <div className="w-[10%] flex items-center justify-around">
        <Image
          src="/images/LinkedIn (1).svg"
          alt="Logo"
          width={33}
          height={38} 
        />
           <Image
          src="/images/GitHub.svg"
          alt="Logo"
          width={33}
          height={38} 
        />
           <Image
          src="/images/Instagram.svg"
          alt="Logo"
          width={33}
          height={38} 
        />
        </div>
        <div className="w-[75%]  flex items-center justify-center ">
          <ul className="flex justify-center w-[100%] text-2xl text-[#F47519]">
            <li>Home</li>
            <li className="mx-32">
              <Link href="/aboutme">
                About me
              </Link>
            </li>
            <li>
              <Link href="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[10%]  flex items-center justify-center">
          <button className="rounded-full bg-[#F47519] text-[#283127] font-bold px-3 py-1">Contact</button>
          </div>
      </nav>
      <NameAnimation />
      <FloatingText />
    </main>
  )
}
