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
  //   if (typeof window === "object") {
  //     const target = document.querySelectorAll(".icons");

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((el) => {
  //           el.target.classList.toggle("show-icons-animation", el.isIntersecting);
  //         });
  //       },
  //       {
  //         threshold: 1,
  //       }
  //     );

  //     target.forEach((target) => {
  //       observer.observe(target);
  //     });
  //   } else {
  //     // code is running in a non-browser environment
  //   }

  return (
    <div className="w-11/12 md:max-w-sm   m-auto  overflow-hidden  p-5 rounded-lg  text-slightDark bg-white dark:bg-gray-900">
      <Image
        className="rounded-md"
        src={photo}
        alt="Sunset in the mountains"
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <p className="font-bold text-slightDark text-xl">About Me</p>
        <span className="text-red-500"> Front-end developer.</span>

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
          <SiJavascript className="w-8 h-8  transition-all   text-bgDark hover:text-yellow-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SiReact
            id="icons"
            className="transition-all  w-8 h-8 text-bgDark hover:text-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SiTypescript
            id="icons"
            className="transition-all  w-8 h-8 text-bgDark hover:text-blue-600"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SiTailwindcss
            id="icons"
            className="transition-all  w-8 h-8 text-bgDark hover:text-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SiHtml5
            id="icons"
            className="transition-all  w-8 h-8 text-bgDark hover:text-orange-500"
          />
        </motion.div>
      </div>
    </div>
  );
}
