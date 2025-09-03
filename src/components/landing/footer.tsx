import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-secondary py-8 text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start space-y-0">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" alt="Evenix Logo" width={180} height={48} className="object-contain" />
          </a>
          <p className="text-sm text-muted-foreground pl-1">
            Drive for the future.
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
              <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
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
        <p>© 2025 Evenix Automobile Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
