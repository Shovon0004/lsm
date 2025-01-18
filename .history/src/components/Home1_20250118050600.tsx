import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { CoverDemo } from "./CoverDemo";
import { StartButtont } from "./StartButton";


export function Home1() {
  return (
    <>
    <div className="h-[40rem]  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className=" left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="  max-w-7xl  mx-auto relative z-  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight 
          <CoverDemo />
        </h1>
        </div>
        
        
      </div>
      <StartButtont />
      
        
    </>
  );
}
