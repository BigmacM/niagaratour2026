import {
  Car,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BookingFlow } from "@/components/BookingFlow";

const FEATURES = [
  {
    icon: MapPin,
    title: "Door-to-Door GTA Pickup",
    description:
      "We pick you up from any address in the Greater Toronto Area. No meeting points, no transit hassle.",
  },
  {
    icon: Car,
    title: "Luxury Mazda CX-90",
    description:
      "Travel in our flagship SUV with premium leather, panoramic roof, and ample space for up to 6 guests.",
  },
  {
    icon: Clock,
    title: "Customizable Itineraries",
    description:
      "Your tour, your pace. Want more time at the wineries? Prefer to skip the crowds? We adapt to you.",
  },
  {
    icon: Users,
    title: "Expert Local Drivers",
    description:
      "Our drivers are passionate locals who know every hidden gem, photo spot, and shortcut in the region.",
  },
];

const ITINERARY = [
  {
    time: "8:00 AM",
    title: "GTA Pickup",
    description:
      "Your driver arrives at your door in the Mazda CX-90. Settle in for a scenic 1.5-2 hour drive.",
    image: "Luxury Mazda CX-90 SUV parked at a residential driveway",
  },
  {
    time: "10:00 AM",
    title: "Floral Clock",
    description:
      "First stop: the iconic Floral Clock, one of the largest in the world. Perfect photo opportunity.",
    image: "The Floral Clock near Niagara Falls with colorful flower arrangements",
  },
  {
    time: "10:30 AM",
    title: "Whirlpool Rapids",
    description:
      "Marvel at the raw power of the Niagara Whirlpool and Class 6 rapids from the scenic overlook.",
    image: "Aerial view of the Niagara Whirlpool and churning rapids",
  },
  {
    time: "11:30 AM",
    title: "Niagara-on-the-Lake Wineries",
    description:
      "Visit a world-class winery in the charming town of Niagara-on-the-Lake. Sample award-winning ice wines.",
    image: "Vineyard rows in Niagara-on-the-Lake with historic buildings",
  },
  {
    time: "1:00 PM",
    title: "3 Hours at Niagara Falls",
    description:
      "The main event. Explore Horseshoe Falls, Table Rock, and the surrounding parkland at your own pace.",
    image: "Panoramic view of Horseshoe Falls with mist rising",
  },
  {
    time: "4:00 PM",
    title: "Return Journey",
    description:
      "Relax on the scenic drive back to the GTA. Your driver drops you off right at your door.",
    image: "Sunset view from the QEW highway with Toronto skyline in distance",
  },
];

const CITIES = [
  "Toronto", "Mississauga", "Brampton", "Oakville", "Milton",
  "Burlington", "Vaughan", "Markham", "Richmond Hill", "Scarborough",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-niagara-blue/5 via-white to-sunset-gold/10" />
        {/* Placeholder hero image background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            <span className="max-w-[200px] text-center">
              Panoramic view of Niagara Falls with rainbow and mist
            </span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-sunset-gold text-sunset-gold"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  5-Star Private Tours
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Niagara Falls,{" "}
                <span className="text-niagara-blue">Private & Personal.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Luxury SUV tours for families and small groups from{" "}
                <span className="font-bold text-niagara-blue">$400</span>.
                Door-to-door pickup in our Mazda CX-90 from anywhere in the
                GTA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/16479094565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-niagara-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-niagara-dark transition-colors shadow-lg shadow-niagara-blue/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
                <a
                  href="#tours"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-niagara-blue hover:text-niagara-blue transition-colors"
                >
                  View Tours
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  100% Private
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  9-Hour Tour
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose GoTourNiagara?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re not a bus tour. We&apos;re your personal driver,
                guide, and concierge for the day.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-niagara-blue/10 rounded-xl flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-niagara-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Tour Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Two premium experiences. One flat rate. Your private Mazda CX-90
                and expert driver included.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="border-2 border-niagara-blue rounded-2xl overflow-hidden">
                <div className="bg-niagara-blue text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm px-4 text-center">
                  Horseshoe Falls panoramic view with mist and rainbow
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Niagara Flagship
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The complete Niagara experience. Floral Clock, Whirlpool
                    Rapids, NOTL Wineries, and 3 hours at the Falls.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-niagara-blue">
                      $400
                    </span>
                    <span className="text-gray-500">flat rate / vehicle</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-niagara-blue" /> 9 hours
                      door-to-door
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-niagara-blue" /> Up to 6
                      guests
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-niagara-blue" /> 4+ stops
                      along the route
                    </li>
                  </ul>
                  <a
                    href="#booking"
                    className="block text-center bg-niagara-blue text-white py-3 rounded-full font-semibold hover:bg-niagara-dark transition-colors"
                  >
                    Build Your Experience
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border-2 border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-100 text-gray-600 text-center py-2 text-sm font-semibold">
                  City Explorer
                </div>
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm px-4 text-center">
                  Toronto skyline with CN Tower from Toronto Islands
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Toronto Highlights
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover Toronto&apos;s iconic landmarks. CN Tower,
                    Distillery District, St. Lawrence Market, and more.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-niagara-blue">
                      $400
                    </span>
                    <span className="text-gray-500">flat rate / vehicle</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-niagara-blue" /> 5 hours
                      door-to-door
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-niagara-blue" /> Up to 6
                      guests
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-niagara-blue" /> 5+ city
                      stops
                    </li>
                  </ul>
                  <a
                    href="#booking"
                    className="block text-center border-2 border-niagara-blue text-niagara-blue py-3 rounded-full font-semibold hover:bg-niagara-blue hover:text-white transition-colors"
                  >
                    Build Your Experience
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The Niagara Flagship Route
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A full-day adventure from your doorstep to the thundering Falls
                and back. Here&apos;s what a typical day looks like.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {ITINERARY.map((stop, i) => (
              <AnimatedSection key={stop.title} delay={i * 0.08}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-niagara-blue rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < ITINERARY.length - 1 && (
                      <div className="w-0.5 h-full bg-niagara-blue/20 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-niagara-blue">
                          {stop.time}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                          {stop.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          {stop.description}
                        </p>
                      </div>
                      <div className="sm:w-32 h-24 sm:h-auto bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs px-2 text-center shrink-0">
                        {stop.image}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Door-to-Door from Any GTA City
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We pick you up and drop you off at your door. No meeting points.
                Select your city below.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {CITIES.map((city, i) => (
              <AnimatedSection key={city} delay={i * 0.05}>
                <Link
                  href={`/tours-from/${city.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-niagara-blue text-gray-700 hover:text-niagara-blue py-4 px-3 rounded-xl font-medium text-sm transition-colors text-center"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  {city}
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Experience Builder */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Build Your Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Customize your perfect tour in 4 easy steps. Get an instant
                quote and book via WhatsApp.
              </p>
            </div>
          </AnimatedSection>

          <BookingFlow />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-niagara-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for an Unforgettable Day?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skip the crowded tour buses. Book your private luxury tour today
              and experience Niagara the way it was meant to be seen.
            </p>
            <a
              href="https://wa.me/16479094565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-niagara-blue px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Book Now via WhatsApp
            </a>
            <p className="text-white/60 text-sm mt-4">
              Or call us: +1 (647) 909-4565
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom padding for sticky mobile button */}
      <div className="h-16 md:hidden" />
    </>
  );
}
