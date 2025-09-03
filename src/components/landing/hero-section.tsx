import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Car repair shop"
        fill
        priority
        className="object-cover -z-10 brightness-50"
        data-ai-hint="car repair garage"
      />
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
           <div className="w-full max-w-md">
             <Image src="/logo.png" alt="Evenix Logo" width={800} height={200} className="object-contain drop-shadow-2xl" />
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
