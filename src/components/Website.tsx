"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function Website() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
              <span className="text-4xl md:text-[6rem] font-bold  leading-none">
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
        />
      </ContainerScroll>
    </div>
  );
}
