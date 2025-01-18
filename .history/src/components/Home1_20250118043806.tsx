import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { CoverDemo } from "./CoverDemo";
import { Website } from "./Website";

export function Home1() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight 
          <CoverDemo />
        </h1>
        
        
      </div>
      "use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function Website() {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-4xl md:text-[6rem] font-bold leading-none">
              Scroll Animations
            </span>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
    </div>
  );
}
