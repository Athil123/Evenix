import { Facebook, Instagram, Twitter } from "lucide-react";

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <path d="M9 17h6" />
      <path d="M2 17h2" />
      <path d="M20 17h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-secondary py-8 text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start space-y-2">
          <a href="#" className="flex items-center space-x-2">
            <CarIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline">Evenix Auto Solutions</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Reliable Repairs • Trusted Service • Professional Care
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-1">
              <li><a href="#services" className="hover:text-primary">Mechanical</a></li>
              <li><a href="#services" className="hover:text-primary">Electrical</a></li>
              <li><a href="#services" className="hover:text-primary">Tire Services</a></li>
              <li><a href="#services" className="hover:text-primary">Oil Change</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2 md:items-end">
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-primary" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-primary" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary" /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
        <p>© 2025 Evenix Automotive Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
