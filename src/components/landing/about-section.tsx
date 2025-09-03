import Image from "next/image";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                About Evenix Automotive
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over 15 years of experience in the automotive repair industry, Evenix Automotive Pvt. Ltd. is your trusted partner for all vehicle maintenance and repair needs. Our team of certified mechanics is committed to providing high-quality, reliable service.
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in transparency, professionalism, and customer satisfaction. Using the latest diagnostic equipment and top-grade parts, we ensure your vehicle is treated with the professional care it deserves, getting you back on the road safely and swiftly.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://picsum.photos/800/600"
                alt="Workshop"
                width={800}
                height={600}
                className="aspect-video w-full object-cover"
                data-ai-hint="workshop garage"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
