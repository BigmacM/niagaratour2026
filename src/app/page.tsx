import {
  Car,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  MessageCircle,
  Heart,
  Compass,
  Waves,
  Building2,
  Flower2,
  Wine,
  Mountain,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

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

const TOURS = [
  {
    id: "niagara-flagship",
    name: "Niagara Flagship",
    duration: "9 hours",
    price: "$400",
    description:
      "The ultimate Niagara day. Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at Horseshoe Falls.",
    icon: Waves,
    gradient: "from-blue-500 to-cyan-400",
    badge: "Most Popular",
    badgeColor: "bg-niagara-blue",
    image: "Horseshoe Falls panoramic with mist, rainbow, and blue skies",
  },
  {
    id: "toronto-highlights",
    name: "Toronto Highlights",
    duration: "5 hours",
    price: "$400",
    description:
      "CN Tower, Distillery District, St. Lawrence Market, Kensington Market, and the Harbourfront.",
    icon: Building2,
    gradient: "from-slate-600 to-gray-400",
    badge: "City Explorer",
    badgeColor: "bg-gray-600",
    image: "Toronto skyline with CN Tower from the Toronto Islands",
  },
  {
    id: "couples-spa",
    name: "Couples Spa & Falls",
    duration: "10 hours",
    price: "$550",
    description:
      "Romantic spa retreat, vineyard lunch with wine pairings, champagne at the Falls. Roses available.",
    icon: Heart,
    gradient: "from-rose-500 to-pink-400",
    badge: "Romantic",
    badgeColor: "bg-rose-500",
    image: "Romantic couples spa setting with candles, flowers, and champagne",
  },
  {
    id: "custom-private",
    name: "Custom Private Tour",
    duration: "Flexible",
    price: "$400+",
    description:
      "Design your own itinerary. Winery crawl, photography tour, multi-day adventure — you name it.",
    icon: Compass,
    gradient: "from-amber-500 to-orange-400",
    badge: "Your Rules",
    badgeColor: "bg-amber-500",
    image: "Luxury SUV on a scenic Niagara Escarpment road at golden hour",
  },
];

const ITINERARY = [
  {
    time: "8:00 AM",
    title: "GTA Pickup",
    description:
      "Your driver arrives at your door in the Mazda CX-90. Settle in with bottled water and a curated playlist for the scenic drive.",
    icon: Car,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    time: "10:00 AM",
    title: "Floral Clock",
    description:
      "First stop: the iconic Floral Clock with over 16,000 seasonal plants. A perfect photo opportunity.",
    icon: Flower2,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    time: "10:30 AM",
    title: "Whirlpool Rapids",
    description:
      "Marvel at Class 6 rapids churning through the Niagara Gorge from the scenic overlook.",
    icon: Waves,
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    time: "11:30 AM",
    title: "NOTL Wineries",
    description:
      "Visit a world-class estate winery. Sample award-winning Icewines and Pinot Noirs with vineyard views.",
    icon: Wine,
    gradient: "from-purple-400 to-violet-500",
  },
  {
    time: "1:00 PM",
    title: "3 Hours at the Falls",
    description:
      "The main event. Explore Horseshoe Falls, Table Rock, and the gorge trail at your own pace.",
    icon: Mountain,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    time: "4:00 PM",
    title: "Return Journey",
    description:
      "Relax on the scenic lakeshore drive back. Your driver drops you at your door by sunset.",
    icon: Camera,
    gradient: "from-orange-400 to-rose-500",
  },
];

const CITIES = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Oakville",
  "Milton",
  "Burlington",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Scarborough",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-niagara-blue/5 via-white to-cyan-50" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30 z-10" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            <span className="max-w-[200px] text-center">
              Panoramic view of Niagara Falls with rainbow and mist
            </span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
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
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-niagara-blue to-niagara-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-niagara-blue/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
                <Link
                  href="/tours/niagara-flagship"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-niagara-blue hover:text-niagara-blue transition-colors"
                >
                  View Tours
                  <ChevronRight className="w-5 h-5" />
                </Link>
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
                  Full-Day Tours
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

      {/* Tour Packages */}
      <section id="tours" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four unique experiences. Private Mazda CX-90 and expert driver
                always included. Click any tour for full details.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TOURS.map((tour, i) => {
              const Icon = tour.icon;
              return (
                <AnimatedSection key={tour.id} delay={i * 0.1}>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="group block bg-white rounded-2xl border-2 border-gray-100 hover:border-niagara-blue/30 overflow-hidden hover:shadow-xl transition-all h-full"
                  >
                    {/* Image */}
                    <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm px-4 text-center relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tour.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                      />
                      <span className="relative z-10">{tour.image}</span>
                      <div
                        className={`absolute top-4 left-4 ${tour.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {tour.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tour.gradient} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-niagara-blue transition-colors">
                              {tour.name}
                            </h3>
                            <span className="text-xl font-bold text-niagara-blue whitespace-nowrap">
                              {tour.price}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            {tour.description}
                          </p>
                          <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {tour.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" /> Up to 6
                            </span>
                            <span className="flex items-center gap-1 ml-auto text-niagara-blue font-semibold">
                              View Details
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
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

          <div className="max-w-3xl mx-auto space-y-4">
            {ITINERARY.map((stop, i) => {
              const Icon = stop.icon;
              return (
                <AnimatedSection key={stop.title} delay={i * 0.08}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stop.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {i < ITINERARY.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-niagara-blue/30 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 mb-2">
                      <span className="text-sm font-bold text-niagara-blue">
                        {stop.time}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">
                        {stop.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                href="/tours/niagara-flagship"
                className="inline-flex items-center gap-2 text-niagara-blue font-semibold hover:underline"
              >
                See the full Niagara Flagship experience
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
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
                Select your city to learn more.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {CITIES.map((city, i) => (
              <AnimatedSection key={city} delay={i * 0.05}>
                <Link
                  href={`/tours-from/${city.toLowerCase().replace(/ /g, "-")}`}
                  className="group flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-niagara-blue text-gray-700 hover:text-niagara-blue py-4 px-3 rounded-xl font-medium text-sm transition-all hover:shadow-md text-center"
                >
                  <MapPin className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  {city}
                </Link>
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
              Ready for an Unforgettable Day?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skip the crowded tour buses. Book your private luxury tour today
              and experience Niagara the way it was meant to be seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/16479094565"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-niagara-blue px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Book Now via WhatsApp
              </a>
              <Link
                href="/tours/custom-private"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Design a Custom Tour
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">
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
