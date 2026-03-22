import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Users,
  MapPin,
  Car,
  MessageCircle,
  Building2,
  Camera,
  UtensilsCrossed,
  Landmark,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

export const metadata: Metadata = {
  title: "Toronto Highlights Tour — 5-Hour Private City Experience",
  description:
    "Private luxury SUV tour of Toronto's iconic landmarks. CN Tower, Distillery District, St. Lawrence Market, Kensington Market, and more. $400 flat rate.",
};

const STOPS = [
  {
    title: "CN Tower",
    description:
      "Start your day at Canada's most iconic landmark. Ride the glass elevator to the observation deck for breathtaking 360° views of the city and Lake Ontario. Dare to walk on the Glass Floor 342 metres above the ground.",
    icon: Landmark,
    imageUrl: "https://images.unsplash.com/photo-1517090504332-8f35b58e9342?w=600&q=80",
    imageAlt: "CN Tower against the Toronto skyline",
    gradient: "from-slate-500 to-gray-600",
  },
  {
    title: "Distillery District",
    description:
      "Wander the cobblestone lanes of this beautifully restored Victorian industrial district. Browse contemporary art galleries, artisan shops, and grab a craft coffee at one of the heritage buildings.",
    icon: Camera,
    imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=600&q=80",
    imageAlt: "Cobblestone streets of the Distillery District",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "St. Lawrence Market",
    description:
      "Named the world's best food market by National Geographic. Sample peameal bacon sandwiches, browse artisan cheeses, and discover over 120 specialty vendors under one roof.",
    icon: UtensilsCrossed,
    imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&q=80",
    imageAlt: "Fresh produce and vendors at a food market",
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "Kensington Market",
    description:
      "A bohemian neighbourhood bursting with colour. Vintage clothing stores, international food stalls, and vibrant street art make this one of Toronto's most unique experiences.",
    icon: ShoppingBag,
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
    imageAlt: "Colourful street with vibrant shops and art",
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    title: "Harbourfront & Toronto Islands View",
    description:
      "End with a stroll along the Harbourfront waterfront. Watch the ferries cross to the Toronto Islands with the skyline behind you — the perfect grand finale photo.",
    icon: Building2,
    imageUrl: "https://images.unsplash.com/photo-1744639375478-11bcbf343426?w=600&q=80",
    imageAlt: "Toronto skyline from the waterfront",
    gradient: "from-blue-400 to-indigo-500",
  },
];

export default function TorontoHighlightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800" />
        <div className="absolute inset-0 bg-[url('/images/tours/toronto-highlights.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                City Explorer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Toronto Highlights Tour
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                See the best of Toronto in a single afternoon. From the top of
                the CN Tower to the cobblestones of the Distillery, all from
                the comfort of your private SUV.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  5 Hours
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4" />
                  5 Stops
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Car className="w-4 h-4" />
                  Mazda CX-90
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$400</span>
                <span className="text-white/70 text-lg">
                  flat rate / vehicle
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <InlineBookingCTA tourId="toronto" />

      {/* Stops */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Five Iconic Stops
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each destination tells a different story about Toronto. Your
                driver knows the best photo spots, hidden cafes, and local
                secrets at each one.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {STOPS.map((stop, i) => {
              const Icon = stop.icon;
              return (
                <AnimatedSection key={stop.title} delay={i * 0.08}>
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-72 h-48 sm:h-auto relative overflow-hidden shrink-0">
                        <Image
                          src={stop.imageUrl}
                          alt={stop.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 288px"
                        />
                      </div>
                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stop.gradient} flex items-center justify-center shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                            Stop {i + 1} of {STOPS.length}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {stop.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {stop.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Perfect For
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "First-Time Visitors", desc: "See all the highlights in one efficient, comfortable tour." },
              { title: "Families with Kids", desc: "No transit stress, no parking hassle. Kids love the CN Tower." },
              { title: "Business Travellers", desc: "Maximize a short layover or free afternoon with a curated experience." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center h-full">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Add an Attraction
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Extend your Toronto day with one of these iconic experiences. We
                handle the logistics — just enjoy.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "CN Tower",
                price: "$45/person",
                imageUrl: "https://images.unsplash.com/photo-1517090504332-8f35b58e9342?w=400&q=80",
                imageAlt: "CN Tower observation deck",
                desc: "Skip-the-line access to the observation deck, Glass Floor, and outdoor SkyTerrace.",
              },
              {
                name: "Ripley's Aquarium",
                price: "$40/person",
                imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
                imageAlt: "Underwater tunnel at an aquarium",
                desc: "Walk through the stunning underwater tunnel and explore 20,000+ marine animals.",
              },
              {
                name: "Canada's Wonderland",
                price: "$55/person",
                imageUrl: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=400&q=80",
                imageAlt: "Roller coaster at an amusement park",
                desc: "Canada's premier amusement park with 200+ attractions, thrill rides, and a waterpark.",
              },
              {
                name: "Toronto Zoo",
                price: "$30/person",
                imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&q=80",
                imageAlt: "Animals at a zoo exhibit",
                desc: "Canada's largest zoo with 5,000+ animals across 10 km of trails. Great for families.",
              },
            ].map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-36 relative overflow-hidden">
                    <Image
                      src={addon.imageUrl}
                      alt={addon.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 flex-1">
                      {addon.desc}
                    </p>
                    <span className="text-sm font-bold text-niagara-blue">
                      {addon.price}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Discover Toronto Your Way
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              $400 flat rate. Private SUV. Your pace. The city awaits.
            </p>
            <a
              href="https://wa.me/16479094565?text=Hi!%20I'd%20like%20to%20book%20the%20Toronto%20Highlights%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Other Tours</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/tours/niagara-flagship", label: "Niagara Flagship" },
              { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
              { href: "/tours/custom-private", label: "Custom Private Tour" },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-niagara-blue text-gray-600 hover:text-niagara-blue px-6 py-3 rounded-full font-medium transition-colors">
                {t.label} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
