import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Sarah L.",
        avatar: "https://i.pravatar.cc/150?img=1",
        title: "Exceptional Service",
        description: "Evenix provides top-notch service every time. They are transparent with their pricing and the quality of their work is unmatched. I wouldn't trust my car with anyone else.",
    },
    {
        name: "Mike D.",
        avatar: "https://i.pravatar.cc/150?img=2",
        title: "Quick and Reliable",
        description: "I had an emergency repair and the team at Evenix handled it swiftly and professionally. They got me back on the road in no time. Highly recommended!",
    },
    {
        name: "Jessica P.",
        avatar: "https://i.pravatar.cc/150?img=3",
        title: "Honest and Professional",
        description: "Finding a trustworthy mechanic is hard, but Evenix is the real deal. They are honest, professional, and their work is always excellent. I'm a customer for life.",
    },
    {
        name: "David R.",
        avatar: "https://i.pravatar.cc/150?img=4",
        title: "Great Customer Experience",
        description: "From the moment I walked in, I was impressed. The staff is friendly, knowledgeable, and they go above and beyond to ensure a great customer experience. A+",
    },
];


export function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                            What Our Customers Say
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We take pride in our work and it shows. Here's what some of our satisfied customers have to say.
                        </p>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-4xl pt-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                    <div className="p-1">
                                    <Card className="bg-background h-full">
                                        <CardHeader>
                                            <div className="flex items-center gap-4">
                                                <Avatar>
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{`"${testimonial.description}"`}</p>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-12"/>
                        <CarouselNext className="mr-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}