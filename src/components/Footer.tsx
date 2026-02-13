import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const CITIES = [
  "Toronto", "Mississauga", "Brampton", "Oakville", "Milton",
  "Burlington", "Vaughan", "Markham", "Richmond Hill", "Scarborough",
];

const TOURS = [
  { href: "/tours/niagara-flagship", label: "Niagara Flagship Tour" },
  { href: "/tours/toronto-highlights", label: "Toronto Highlights Tour" },
  { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
  { href: "/tours/custom-private", label: "Custom Private Tour" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">GoTour</span>
              <span className="text-2xl font-light text-gray-400">
                Niagara
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium private SUV tours from the Greater Toronto Area to Niagara
              Falls. Luxury Mazda CX-90 for groups of 1-6 guests.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-niagara-blue" />
                <a href="tel:+16479094565" className="hover:text-white">
                  +1 (647) 909-4565
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-niagara-blue" />
                <a
                  href="mailto:info@gotourniagara.com"
                  className="hover:text-white"
                >
                  info@gotourniagara.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-niagara-blue" />
                <span>Greater Toronto Area, Ontario</span>
              </div>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Tours</h3>
            <div className="space-y-2 text-sm">
              {TOURS.map((tour) => (
                <Link
                  key={tour.href}
                  href={tour.href}
                  className="block hover:text-niagara-blue transition-colors"
                >
                  {tour.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Pickup Locations
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/tours-from/${city.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-niagara-blue transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-niagara-blue">
                Home
              </Link>
              <Link href="/#tours" className="block hover:text-niagara-blue">
                Tour Packages
              </Link>
              <Link
                href="/#itinerary"
                className="block hover:text-niagara-blue"
              >
                Itinerary
              </Link>
              <a
                href="https://wa.me/16479094565"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-niagara-blue"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} GoTourNiagara. All rights
            reserved. Private luxury SUV tours from the GTA.
          </p>
        </div>
      </div>
    </footer>
  );
}
