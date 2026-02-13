import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Users,
  MapPin,
  Star,
  Camera,
  Wine,
  Waves,
  Car,
  MessageCircle,
  Flower2,
  Mountain,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

export const metadata: Metadata = {
  title: "Niagara Flagship Tour — 9-Hour Private SUV Experience",
  description:
    "The ultimate private Niagara Falls tour. 9 hours in a luxury Mazda CX-90 with Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at the Falls. $400 flat rate from the GTA.",
};

const STOPS = [
  {
    time: "8:00 AM",
    title: "Your Doorstep Pickup",
    description:
      "Your driver arrives in the Mazda CX-90 at your GTA address. Complimentary bottled water, phone chargers, and a curated playlist for the scenic drive.",
    icon: Car,
    image: "Luxury Mazda CX-90 at sunrise outside a residential home",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    time: "10:00 AM",
    title: "Floral Clock",
    description:
      "One of the world's largest floral clocks with over 16,000 carpet bedding plants. A perfect first photo op with vibrant seasonal blooms as your backdrop.",
    icon: Flower2,
    image: "The iconic Floral Clock with vibrant seasonal flower arrangements",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    time: "10:30 AM",
    title: "Whirlpool Rapids Overlook",
    description:
      "Stand above the Niagara Gorge and watch Class 6 rapids churn below. Feel the raw power of nature from one of the most dramatic viewpoints in Ontario.",
    icon: Waves,
    image: "Dramatic aerial view of the Niagara Whirlpool and churning rapids",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    time: "11:15 AM",
    title: "Niagara-on-the-Lake Wineries",
    description:
      "Visit a world-class estate winery in the charming town of Niagara-on-the-Lake. Sample award-winning Icewines, Pinot Noirs, and Chardonnays with a guided tasting.",
    icon: Wine,
    image: "Elegant winery tasting room in Niagara-on-the-Lake with vineyard views",
    gradient: "from-purple-400 to-violet-500",
  },
  {
    time: "12:30 PM",
    title: "NOTL Heritage District",
    description:
      "Stroll the picturesque main street of Niagara-on-the-Lake. Browse boutique shops, grab artisan ice cream, and soak in the small-town charm of Canada's prettiest town.",
    icon: Camera,
    image: "Queen Street in Niagara-on-the-Lake with historic buildings and flowers",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    time: "1:30 PM",
    title: "3 Hours at Niagara Falls",
    description:
      "The main event. Explore Horseshoe Falls from Table Rock, walk the gorge trail, and feel the mist on your face. Your driver stays nearby — explore at your own pace.",
    icon: Mountain,
    image: "Panoramic view of Horseshoe Falls with mist rising and rainbow visible",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    time: "4:30 PM",
    title: "Scenic Return Journey",
    description:
      "Relax in the luxurious CX-90 as we drive you back through wine country and along the lakeshore. Door-to-door — right back to your address.",
    icon: Car,
    image: "Sunset highway drive with golden light through the windshield",
    gradient: "from-orange-400 to-rose-500",
  },
];

export default function NiagaraFlagshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-niagara-blue to-cyan-500" />
        <div className="absolute inset-0 bg-[url('/images/tours/niagara-flagship.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-sunset-gold text-sunset-gold" />
                Our Most Popular Tour
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Niagara Flagship Tour
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                A full-day odyssey from your doorstep to the thundering
                Horseshoe Falls. Seven stops, one unforgettable day, zero
                crowds.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  9 Hours
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4" />
                  7 Stops
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

      {/* Inline CTA */}
      <InlineBookingCTA tourId="niagara" />

      {/* The Route */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your Day, Stop by Stop
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every stop is handpicked for maximum wow factor. Here&apos;s
                exactly what your Niagara Flagship day looks like.
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
                      {/* Image placeholder */}
                      <div className="sm:w-72 h-48 sm:h-auto bg-gray-100 flex items-center justify-center text-gray-400 text-sm px-4 text-center relative overflow-hidden shrink-0">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stop.gradient} opacity-10`}
                        />
                        <span className="relative z-10">{stop.image}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stop.gradient} flex items-center justify-center shrink-0`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-niagara-blue">
                              {stop.time}
                            </span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                              Stop {i + 1} of {STOPS.length}
                            </span>
                          </div>
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

      {/* What's included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Everything Included
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Private Mazda CX-90",
                desc: "Premium leather, panoramic sunroof, and room for up to 6 guests.",
              },
              {
                title: "Door-to-Door Service",
                desc: "Pickup and drop-off at any GTA address. No meeting points.",
              },
              {
                title: "Expert Local Driver",
                desc: "Your guide knows every hidden gem, photo spot, and secret shortcut.",
              },
              {
                title: "Complimentary Amenities",
                desc: "Bottled water, phone chargers, and a curated road trip playlist.",
              },
              {
                title: "Flexible Schedule",
                desc: "Spend more time where you love it. The itinerary adapts to you.",
              },
              {
                title: "Photo Assistance",
                desc: "Your driver doubles as your photographer at every scenic stop.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 bg-niagara-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-2.5 h-2.5 bg-niagara-blue rounded-full" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Elevate Your Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Add these popular extras to make your Niagara day even more
                memorable.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Maid of the Mist",
                price: "$35/person",
                image: "Tourists on the Maid of the Mist boat surrounded by mist",
                desc: "Get drenched in the spray of Horseshoe Falls on this legendary boat ride.",
              },
              {
                name: "Skylon Tower Dinner",
                price: "$65/person",
                image: "View of Niagara Falls from Skylon Tower revolving restaurant",
                desc: "Dine 775 feet above the Falls in the famous revolving restaurant.",
              },
              {
                name: "Niagara Heli-Tour",
                price: "$160/person",
                image: "Helicopter flying over Niagara Falls with panoramic views",
                desc: "12-minute helicopter flight over the Falls, Gorge, and wine country.",
              },
              {
                name: "Wine Tasting",
                price: "$25/person",
                image: "Premium wine tasting flight at a Niagara-on-the-Lake winery",
                desc: "Guided tasting at a premier NOTL estate with award-winning vintages.",
              },
            ].map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-36 bg-gray-100 flex items-center justify-center text-gray-400 text-xs px-3 text-center">
                    {addon.image}
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
      <section className="py-20 bg-gradient-to-br from-niagara-blue via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Your Niagara Day?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              $400 flat rate. Door-to-door. Up to 6 guests. The most popular
              private tour in the GTA.
            </p>
            <a
              href="https://wa.me/16479094565?text=Hi!%20I'd%20like%20to%20book%20the%20Niagara%20Flagship%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-niagara-blue px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Tours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Explore Our Other Tours
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/tours/toronto-highlights", label: "Toronto Highlights" },
              { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
              { href: "/tours/custom-private", label: "Custom Private Tour" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-niagara-blue text-gray-600 hover:text-niagara-blue px-6 py-3 rounded-full font-medium transition-colors"
              >
                {t.label}
                <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
