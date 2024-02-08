import type { MetaFunction } from "@remix-run/node";
import CaseStudy from "~/components/case-study";
import Chorus from "../images/chorus.jpg";
import Phoenix from "../images/phoenixbrandstrategy.png";
import OnlyLdn from "../images/onlyldn-screenrecording.mov";
import LetsGrow from "../images/lets-grow.jpg";
import GoldenShoes from "../images/Goldenshoes.png";
import ESEA from "../images/esea-screenrecording.mov";

export const meta: MetaFunction = () => {
  return [
    { title: "Saki Portfolio" },
    { name: "description", content: "My Work" },
  ];
};

export const Portfolio = () => {
  return (
    <>
      <h1 className="text-5xl md:text-9xl font-thin antialiased mt-10 md:m-10 pb-10 pt-10">
        My Work
      </h1>
      <div className="flex justify-end m-3 md:m-10  pt-10 skills-container">
        <button className="custom-button">
          <span>Client</span>
        </button>
        <button className="custom-button">
          <span>Self</span>
        </button>
        <button className="custom-button">
          <span>React</span>
        </button>
        <button className="custom-button">
          <span>Gatsby</span>
        </button>
        <button className="custom-button">
          <span>Typescript</span>
        </button>
        <button className="custom-button">
          <span>Javascript</span>
        </button>
        <button className="custom-button">
          <span>NodeJS</span>
        </button>
        <button className="custom-button">
          <span>GraphQL</span>
        </button>
        <button className="custom-button">
          <span>Bootstrap</span>
        </button>
        <button className="custom-button">
          <span>Styled Components</span>
        </button>
        <button className="custom-button">
          <span>tachyons</span>
        </button>
        <button className="custom-button">
          <span>GSAP</span>
        </button>
        <button className="custom-button">
          <span>CMS</span>
        </button>
        <button className="custom-button">
          <span>NextJS</span>
        </button>
        <button className="custom-button">
          <span>PostgreSQL</span>
        </button>
        <button className="custom-button">
          <span>Cypress</span>
        </button>
      </div>

      <CaseStudy
        number={"001"}
        direction="left"
        about={
          "Phoenix is a brand strategy, research and insights consultancy, who work with Noom, Lenovo and Whatsapp. They needed a website that would showcase their work and their team."
        }
        designer={"SHION Studios"}
        webpage={Phoenix}
        website={"https://phoenixbrandstrategy.com/"}
        showDetail={false}
      />
      <CaseStudy
        number={"003"}
        direction="right"
        about={
          "Only Ldn is a multi award winning London based editor in TV, documentary, music videos, commercials, fashion films and branded content."
        }
        video={OnlyLdn}
        website={"https://gentle-bonbon-e8ae48.netlify.app/"}
        showDetail={false}
      />
      <CaseStudy
        number={"002"}
        direction="right"
        webpage={Chorus}
        about={
          "CHORUS is a Music Label dedicated to connecting Asian music and culture with the world. Amongst their clients are Rina Sawayama, Fuji Kaze, Millennium Parade and the Southbank Center."
        }
        designer={"WAN Studios"}
        website={"https://chorus.asia/"}
        showDetail={false}
      />

      <CaseStudy
        number={"004"}
        direction="left"
        about={
          "Lets Grow is an online educational resources platform for children aged 3-5yrs. They needed an online space to place their resources and to be able to sell their products."
        }
        webpage={LetsGrow}
        website={"https://letsgrow.org.uk/"}
        showDetail={false}
      />
      <CaseStudy
        number={"005"}
        direction="right"
        about={"Ecommerce platform for trainers."}
        designer={"Self Designed"}
        webpage={GoldenShoes}
        website={"https://github.com/haginom/ecommerce"}
        showDetail={false}
      />
      <CaseStudy
        number={"006"}
        direction="left"
        about={
          "ESEA Music is a non-profit community group led by and for UK-based East & Southeast Asian music industry professionals and artists with over 350 members. "
        }
        video={ESEA}
        showDetail={false}
      />
      <aside className="justify-around">
        <div className="about-blurb font-thin">
          <h3 id="about" className="mb-4 uppercase">
            about
          </h3>
          <p className="mb-2">
            I'm a self taught full stack developer, using online courses such as
            David Malan's CS50 and a free London based coding bootcamp,
            Founder's & Coders to teach myself how to code. I am adept at using
            React based frameworks such as Gatsby and Remix.
          </p>
          <p className="mb-2">
            After my bootcamp I worked at Ori in London learning Docker,
            Kubernetes and Golang. Since then, I've taken a break to have a
            daughter and I've been working freelance since 2022.
          </p>
          <p className="mb-2">
            Prior to coding, I worked in various administrative & research roles
            in East Asia and the House of Commons.
          </p>
          <p>I speak English, Japanese, Chinese & Dutch.</p>
        </div>
        <div className="contact-blurb font-thin ">
          <h3 id="contact" className="mb-4  uppercase">
            contact
          </h3>
          <p>saki@haginom.work</p>
          <p className="mb-2 italic">based in Amsterdam</p>
          <p className="mb-2">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/haginom/">@haginom</a>
          </p>
          <p className="mb-2">
            Github: <a href="https://github.com/haginom">@haginom</a>{" "}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Portfolio;
