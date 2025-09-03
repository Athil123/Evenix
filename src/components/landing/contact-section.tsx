import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or need to book a service? We&apos;re here to help.
            Contact us through any of the methods below.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <Card className="bg-secondary">
            <CardContent className="p-6">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Our Address</h3>
                  <p className="text-muted-foreground">123 Auto Drive, Mechanicville, 45678</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Phone Number</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Email Address</h3>
                  <p className="text-muted-foreground">service@evenixauto.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
