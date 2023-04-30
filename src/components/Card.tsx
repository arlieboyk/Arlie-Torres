import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import photo from "../../public/ME.jpg";
import Image from "next/image";

export default function Card() {


  return (
    <section id="about-me" className="h-screen dark:bg-[#222222] p-6 bg-white">
      <div className="w-11/12 md:max-w-sm hover:scale-105 transition-all  m-auto  overflow-hidden  p-5 rounded-lg  text-slightDark bg-slate-50  dark:bg-[#333333]">
        <Image
          className="rounded-md"
          src={photo}
          alt="Sunset in the mountains"
          width={500}
          height={500}
        />
        <div className="px-6 py-4">
          <p className="font-bold dark:text-gray-200 text-xl">About Me</p>
          <span className="dark:text-blue-400 text-red-500"> Front-end developer.</span>

          <p className="text-slightDark font-serif dark:text-gray-200">
            I'm Arlie Torres, 22-year-old Filipino a Front-end developer.
          </p>
        </div>
        <div className="flex space-x-3 justify-evenly">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiJavascript className="w-8 h-8  transition-all  dark:text-gray-400 text-bgDark hover:text-yellow-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiReact
              id="icons"
              className="transition-all  w-8 h-8 dark:text-gray-400 text-bgDark hover:text-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiTypescript
              id="icons"
              className="transition-all  w-8 h-8 dark:text-gray-400 text-bgDark hover:text-blue-600"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiTailwindcss
              id="icons"
              className="transition-all  w-8 h-8 dark:text-gray-400 text-bgDark hover:text-blue-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SiHtml5
              id="icons"
              className="transition-all  w-8 h-8 dark:text-gray-400 text-bgDark hover:text-orange-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
