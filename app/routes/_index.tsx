import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getPosts } from "~/.server/posts";
import {
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillInstagram,
  AiFillDiscord,
} from "react-icons/ai";
import { FaReact, FaRust } from "react-icons/fa";
import { SiRemix, SiElixir } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

export const loader = async () => {
  const posts = await getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};

export default function Index() {
  return (
    <div className="w-[60%] flex flex-col gap-4 p-4 text-gray-400 font-courier">
      <div className="flex flex-col gap-1">
        <div className="w-full flex items-center gap-4">
          <p className="text-xl text-gray-200">Annukul Thakran</p>
          <p className="text-sm text-bold text-slate-600">
            Software Engineer | Early stage startup | Innovating in SaaS product
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-70% flex items-center gap-4 text-gray-400">
            <Link to={""}>
              <p className="hover:text-gray-50 hover:underline decoration-indigo-700 decoration-4 underline-offset-4 text-base">
                Home
              </p>
            </Link>
            <Link to={""}>
              <p className="hover:text-gray-50 hover:underline decoration-indigo-700 decoration-4 underline-offset-4 text-base">
                Blog
              </p>
            </Link>
            <Link to={""}>
              <p className="hover:text-gray-50 hover:underline decoration-indigo-700 decoration-4 underline-offset-4 text-base">
                My travels
              </p>
            </Link>
          </div>
          <div className="w-30% flex items-center gap-4">
            <Link
              to="https://x.com/thakrananukul"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare size={25} />
            </Link>
            <Link
              to="https://github.com/Annukul"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={25} />
            </Link>
            <Link
              to="mailto:tharan9.anukul@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail size={25} />
            </Link>
            <Link
              to="https://www.instagram.com/trails_of_annukul/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={25} />
            </Link>
            <Link
              to="https://discordapp.com/users/693316392396521495"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillDiscord size={25} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-500" />
      <div className="text-gray-300 w-full flex flex-col gap-4 py-3 tracking-wide">
        <p className="text-3xl text-gray-200">Hey, I&apos;m Annukul</p>
        <p className="text-base font-medium">
          Hello! My name is{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            Annukul
          </span>{" "}
          and I enjoy creating things that create an impact on life of people.
          My interest in programming started back in initial days of my college
          when I decided to start my{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            own blog on wordpress
          </span>
          . And later I got to know about web development and how you can
          develop your own website using{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            HTML, CSS, and JS
          </span>
          .
        </p>
        <p>
          I started my web development learning{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            journey
          </span>{" "}
          on{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            FreeCodeCamp
          </span>
          . And gradually I started loving what I was doing and then created
          several projects on my own.
        </p>
        <p>
          Fast-forwarding to today, I have worked with{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            multiple clients
          </span>{" "}
          in building their wep app from{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            scratch
          </span>{" "}
          and also{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            re-writing old web apps
          </span>
          . I have also worked on several native consumer facing mobile
          applications using{" "}
          <span className="font-medium text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            React Native
          </span>
          .
        </p>
        <p>
          Currently I am working in{" "}
          <span className="font-semibold text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            Produze
          </span>{" "}
          as a{" "}
          <span className="font-semibold text-gray-200 underline decoration-indigo-700 decoration-2 underline-offset-2">
            Full-stack Developer
          </span>{" "}
          where I am built the consumer facing metrics dashboard, from scratch,
          which involves handling tons of metrics data.
        </p>
      </div>
      <hr className="w-full h-0.5 bg-gray-500" />
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-start">
          <p className="text-lg text-gray-200">Technologies I work with</p>
        </div>
        <div className="w-full flex justify-evenly">
          <span className="w-fit flex flex-col items-center">
            <FaReact size={50} />
            <p className="text-sm">ReactJS</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <SiRemix size={50} />
            <p className="text-sm">Remix</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <RiNextjsFill size={50} />
            <p className="text-sm">NextJS</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <IoLogoJavascript size={50} />
            <p className="text-sm">JavaScript</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <RiTailwindCssFill size={50} />
            <p className="text-sm">Tailwind CSS</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <SiElixir size={50} />
            <p className="text-sm">Elixir</p>
          </span>
          <span className="w-fit flex flex-col items-center">
            <FaRust size={50} />
            <p className="text-sm">Rust</p>
          </span>
        </div>
      </div>
    </div>
  );
}
