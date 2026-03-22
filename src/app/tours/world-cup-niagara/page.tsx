import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Users,
  MapPin,
  Car,
  MessageCircle,
  Trophy,
  Calendar,
  Star,
  ChevronRight,
  Waves,
  Wine,
  Flower2,
  Mountain,
  Camera,
  Ticket,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

export const metadata: Metadata = {
  title:
    "FIFA World Cup 2026 Niagara Falls Tour — Private Day Trip from Toronto",
  description:
    "Visiting Toronto for the FIFA World Cup 2026? Book a private luxury SUV day trip to Niagara Falls between match days. Hotel pickup, 9-hour tour, groups of 1-6. From $400.",
  keywords: [
    "FIFA World Cup 2026 Niagara Falls tour",
    "World Cup Toronto day trip",
    "Niagara Falls tour World Cup",
    "Toronto World Cup 2026 things to do",
    "private Niagara tour World Cup",
  ],
  openGraph: {
    title: "FIFA World Cup 2026 Niagara Falls Tour | GoTourNiagara",
    description:
      "Private luxury SUV day trip to Niagara Falls for World Cup visitors. Hotel pickup in Toronto. From $400.",
    url: "https://gotourniagara.com/tours/world-cup-niagara",
  },
  alternates: {
    canonical: "https://gotourniagara.com/tours/world-cup-niagara",
  },
};

const MATCHES = [
  {
    date: "Fri, June 12",
    match: "Canada vs. UEFA Playoff Winner",
    time: "3:00 PM ET",
    highlight: true,
  },
  {
    date: "Wed, June 17",
    match: "Ghana vs. Panama",
    time: "7:00 PM ET",
    highlight: false,
  },
  {
    date: "Sat, June 20",
    match: "Germany vs. Ivory Coast",
    time: "4:00 PM ET",
    highlight: false,
  },
  {
    date: "Tue, June 23",
    match: "Panama vs. Croatia",
    time: "7:00 PM ET",
    highlight: false,
  },
  {
    date: "Fri, June 26",
    match: "Senegal vs. FIFA Playoff Winner",
    time: "3:00 PM ET",
    highlight: false,
  },
  {
    date: "Thu, July 2",
    match: "Round of 32 Knockout Match",
    time: "7:00 PM ET",
    highlight: false,
  },
];

const ITINERARY = [
  {
    time: "7:00 AM",
    title: "Hotel Pickup in Toronto",
    description:
      "Your driver arrives at your Toronto hotel in the Mazda CX-90. Early start to maximize your day before the evening match.",
    icon: Car,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    time: "9:00 AM",
    title: "Floral Clock & Whirlpool Rapids",
    description:
      "Photo stop at the iconic Floral Clock, then marvel at the Class 6 rapids churning through the Niagara Gorge.",
    icon: Flower2,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    time: "10:00 AM",
    title: "Niagara-on-the-Lake Wineries",
    description:
      "Visit a world-class estate winery. Sample award-winning Icewines and Ontario wines with vineyard views.",
    icon: Wine,
    gradient: "from-purple-400 to-violet-500",
  },
  {
    time: "11:30 AM",
    title: "NOTL Heritage District",
    description:
      "Stroll the charming main street. Browse shops, grab artisan ice cream in Canada's prettiest town.",
    icon: Camera,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    time: "12:30 PM",
    title: "2.5 Hours at Niagara Falls",
    description:
      "The main event. Explore Horseshoe Falls from Table Rock, walk the gorge trail, and feel the mist on your face.",
    icon: Mountain,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    time: "3:00 PM",
    title: "Return to Toronto",
    description:
      "Back to your hotel with time to freshen up before the match. Or we can drop you at BMO Field directly.",
    icon: Car,
    gradient: "from-orange-400 to-rose-500",
  },
];

export default function WorldCupNiagaraPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-900" />
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1606516397986-1eeb79e8c052?w=1920&q=80"
            alt="Aerial view of Niagara Falls"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Trophy className="w-4 h-4 text-sunset-gold" />
                FIFA World Cup 2026 Special
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                World Cup + Niagara Falls
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                In Toronto for the FIFA World Cup? Don&apos;t miss Niagara
                Falls. Private luxury SUV day trip designed to fit around your
                match schedule. Hotel pickup included.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  8-9 Hours
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4" />
                  Hotel Pickup
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

      <InlineBookingCTA tourId="niagara" />

      {/* Why Niagara During World Cup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Visit Niagara During the World Cup?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                300,000+ visitors are expected in Toronto. Make the most of your
                trip with a world-class day tour just 90 minutes away.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Perfect Between Matches",
                desc: "With matches every few days, you have free days to explore. Our tour fits perfectly between game days.",
                icon: Calendar,
              },
              {
                title: "Hotel Pickup & Drop-off",
                desc: "No navigating transit or renting a car. We pick you up at your Toronto hotel and bring you back.",
                icon: MapPin,
              },
              {
                title: "Only 90 Minutes Away",
                desc: "Niagara Falls is closer than you think. Comfortable luxury SUV ride with scenic lake views.",
                icon: Car,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center h-full">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-emerald-700" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Match Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Toronto Match Schedule
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                6 matches at BMO Field (Toronto Stadium). Plan your Niagara tour
                around your match days.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-3">
            {MATCHES.map((match, i) => (
              <AnimatedSection key={match.date} delay={i * 0.06}>
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    match.highlight
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="shrink-0">
                    <Ticket
                      className={`w-5 h-5 ${
                        match.highlight
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold text-sm ${
                        match.highlight
                          ? "text-emerald-800"
                          : "text-gray-900"
                      }`}
                    >
                      {match.match}
                    </p>
                    <p className="text-xs text-gray-500">
                      {match.date} &middot; {match.time}
                    </p>
                  </div>
                  {match.highlight && (
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                      Canada&apos;s Opener
                    </span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-gray-500 mt-6 max-w-xl mx-auto">
              Most matches start at 3 PM or 7 PM. An early-morning Niagara tour
              gets you back in time for afternoon matches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your Match Day Itinerary
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Early start, early finish. See Niagara Falls and make it back
                for kickoff.
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
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-emerald-300 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 mb-2 border border-gray-100">
                      <span className="text-sm font-bold text-emerald-600">
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
        </div>
      </section>

      {/* Niagara Falls Image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1493456548192-bb71fe1135b5?w=1600&q=80"
              alt="Boat tour approaching Niagara Falls"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-xl font-bold">
                Just 90 minutes from downtown Toronto
              </p>
              <p className="text-white/80 text-sm mt-1">
                One of the Seven Natural Wonders of the World
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                World Cup Visitor Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Same flat rates, no World Cup surge pricing. Book early —
                availability is limited during the tournament.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border-2 border-emerald-200 p-8 text-center h-full">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Niagara Day Tour
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  8-9 hours &middot; Full itinerary
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-1">$400</p>
                <p className="text-sm text-gray-500 mb-6">
                  flat rate for up to 6 guests
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Hotel pickup & drop-off in Toronto
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Luxury Mazda CX-90 with expert driver
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Floral Clock, Wineries, Whirlpool, Falls
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Back in time for evening matches
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center h-full">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Custom Multi-Day
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Flexible &middot; Match + Sightseeing
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-1">Custom</p>
                <p className="text-sm text-gray-500 mb-6">
                  tell us your match schedule
                </p>
                <ul className="text-sm text-gray-600 text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    Multi-day Toronto + Niagara itinerary
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    Planned around your match tickets
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    Wine country, Toronto highlights included
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    Airport transfers available
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Book Your World Cup Day Trip
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Limited availability during the FIFA World Cup. Book early to
              secure your preferred dates. $400 flat rate — no surge pricing.
            </p>
            <a
              href="https://wa.me/16479094565?text=Hi!%20I'm%20visiting%20Toronto%20for%20the%20FIFA%20World%20Cup%20and%20would%20like%20to%20book%20a%20Niagara%20Falls%20day%20tour.%20My%20match%20dates%20are..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-800 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </a>
            <p className="text-white/50 text-sm mt-4">
              Tell us your match dates and we&apos;ll plan the perfect tour day.
            </p>
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
              { href: "/tours/niagara-flagship", label: "Niagara Flagship" },
              {
                href: "/tours/toronto-highlights",
                label: "Toronto Highlights",
              },
              { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
              { href: "/tours/custom-private", label: "Custom Private Tour" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-emerald-400 text-gray-600 hover:text-emerald-600 px-6 py-3 rounded-full font-medium transition-colors"
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
