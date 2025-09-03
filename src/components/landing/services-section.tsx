import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, AirVent, Flame, ScanLine, Layers, CircleDot, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Automotive & Mechanical",
    description: "Expert repairs for engines, transmissions, brakes, and suspensions.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Advanced diagnostics and repairs for all automotive electrical systems.",
  },
  {
    icon: AirVent,
    title: "Air Conditioning",
    description: "Complete A/C maintenance, diagnostics, and recharge services.",
  },
  {
    icon: Flame,
    title: "Welding & Fabrication",
    description: "Custom welding and fabrication for chassis and exhaust systems.",
  },
  {
    icon: ScanLine,
    title: "Computer Diagnostics",
    description: "State-of-the-art tools to diagnose check engine lights and more.",
  },
  {
    icon: Layers,
    title: "Radiator Services",
    description: "Full-service radiator repair, flush, and replacement for optimal cooling.",
  },
  {
    icon: CircleDot,
    title: "Tire Services & Repair",
    description: "Tire mounting, balancing, rotation, and puncture repair services.",
  },
  {
    icon: Droplets,
    title: "Oil Change",
    description: "Quick and professional oil and filter change to keep your engine healthy.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of automotive services to keep your vehicle in top condition.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 bg-secondary hover:bg-card transform transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-primary/20">
              <CardHeader className="p-0">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardTitle className="text-xl font-semibold mb-2 font-poppins">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
