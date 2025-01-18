import Image from "next/image";
import { Home1 } from "@/components/Home1";
import { Website } from "@/components/Website";
import { TimelineDemo } from '@/components/TimelineDemo';
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Home1 />
      <Website />
      <Feature />
      <
      </main>
  );
}
