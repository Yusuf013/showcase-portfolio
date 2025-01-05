import FloatingText from '../components/FloatingText';

export default function AboutMe() {
  return (
    <div>
      <FloatingText />
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-around h-[725px] w-[70%]">
          <div>
            <div>
              <h1 className="text-[#F47519] text-[26px]">About me</h1>
            </div>
            <div>
              <p>
                Hi there! I’m Yusuf Tasci, a 3rd semester ICT & Media Design
                student at Fontys Hogeschool Tilburg, aspiring to become a
                skilled Front-End Developer. I’m passionate about creating
                intuitive, responsive, and visually engaging web experiences.
                Currently, I’m seeking an internship to further develop my
                skills—feel free to reach out!
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-[#F47519] text-[26px]">My Experience</h1>
            </div>
            <div>
              <p>
                This semester, I worked on two major projects for 2manydots,
                gaining hands-on experience with Next.js, Tailwind CSS, and the
                Storyblok headless CMS. Check out the Projects section for more
                details.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-[#F47519] text-[26px]">Fields of Interest</h1>
            </div>
            <div>
              <p>
                I’m drawn to Health, Automotive, and Sports, but I’m always open
                to exploring new ideas and technologies that challenge me to
                think creatively.
              </p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-[#F47519] text-[26px]">What I’m Improving</h1>
            <p className="text-left">I’m focusing on:</p>
            <ul className="list-disc pl-5 text-left">
              <li>
                Building responsive websites for seamless user experiences.
              </li>
              <li>Creating 3D websites with tools like Three.js.</li>
              <li>Enhancing my UX/UI design and problem-solving skills.</li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="text-[#F47519] text-[26px]">Beyond the Code</h1>
            </div>
            <div>
              <p>
                Outside of coding, I enjoy gaming, reading history, playing
                football, and hitting the gym. Staying curious and learning new
                things keeps me motivated to grow both personally and
                professionally.<br></br>
                <br></br>Let’s connect! I’m based in Tilburg, The Netherlands,
                and always open to collaborations or conversations about
                exciting projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
