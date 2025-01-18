"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Feature from "@/components/Feature";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) return null; // Prevents mismatch on hydration

return (
  <div className="flex flex-col items-center justify-center h-[40rem]">
    <TypewriterEffectSmooth words={words} />
    <Feature />
  </div>
);

}
