import Image from "next/image";
import { Home1 } from "@/components/Home1";
import { Website } from "@/components/Website";
import { AnimatedTestimonialsDemo } from "@/components/AboutUs";
import { SparklesPreview } from "@/components/SparklesPreview";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Home1 />
      <Website />
      <AnimatedTestimonialsDemo />
      

      
      </main>
  );
}
