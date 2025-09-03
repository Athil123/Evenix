import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080?q=2"
        alt="Modern car"
        fill
        priority
        className="object-cover -z-10 brightness-50"
        data-ai-hint="modern car"
      />
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
           <div className="w-full max-w-4xl">
             <h1 className="text-5xl md:text-7xl font-automotive font-bold tracking-wider uppercase text-shadow-lg drop-shadow-2xl">Evenix Automotive Pvt Ltd</h1>
           </div>
          <p className="max-w-[700px] text-lg md:text-xl text-gray-200 drop-shadow-lg">
            Reliable Repairs • Trusted Service • Professional Care
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
