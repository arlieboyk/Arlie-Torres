"use client";
import { useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import Card from "@/components/Card";
import Work from "@/components/Work";
import Loading from "@/components/Loading";
import Hero from "@/components/mainpage/Hero";
import Projects from "@/components/mainpage/Projects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    document.body.classList.add("disable-scroll");
    // socialSideBar?.classList.toggle("scale-0");
    // header?.classList.add("scale-0");

    setTimeout(() => {
      document.body.classList.remove("disable-scroll");
      // socialSideBar?.classList.toggle("scale-0");

      // header?.classList.remove("scale-0");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loading />}

      <Hero loading={loading} />

      {/* latest work */}
      <Projects />

      <Card />
    </>
  );
}
