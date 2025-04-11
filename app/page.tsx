"use client";

import { useRef } from "react";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  const getAppRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero scrollToRef={getAppRef} />
      <Camp />
      <Guide />
      <Features />
      <div ref={getAppRef}>
        <GetApp />
      </div>
    </>
  );
}
