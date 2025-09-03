import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-white">
                About Evenix
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over 15 years of experience in the automobile repair industry, Evenix Automobile Pvt. Ltd. is your trusted partner for all vehicle maintenance and repair needs. Our team of certified mechanics is committed to providing high-quality, reliable service.
              </p>
            </div>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in transparency, professionalism, and customer satisfaction. Using the latest diagnostic equipment and top-grade parts, we ensure your vehicle is treated with the professional care it deserves, getting you back on the road safely and swiftly.
            </p>
          </div>
          <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-lg">
             <Image
                src="/about-image.jpg"
                alt="About Evenix Automotive"
                fill
                className="object-cover"
                data-ai-hint="mechanic working"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
