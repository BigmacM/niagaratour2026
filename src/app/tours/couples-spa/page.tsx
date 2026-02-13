import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Users,
  Heart,
  Star,
  Wine,
  Car,
  MessageCircle,
  Flower2,
  Sparkles,
  UtensilsCrossed,
  ChevronRight,
  Waves,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

export const metadata: Metadata = {
  title: "Couples Spa & Falls Tour — Romantic Private SUV Experience",
  description:
    "The ultimate romantic day trip. Luxury couples spa, vineyard lunch, champagne at Niagara Falls. Private Mazda CX-90 with champagne & flowers add-ons. From $550.",
};

const ITINERARY = [
  {
    time: "9:00 AM",
    title: "Romantic Pickup",
    description:
      "Your driver arrives with optional fresh roses and champagne chilling in the Mazda CX-90. Begin your romantic escape in style.",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    time: "10:30 AM",
    title: "Couples Spa Experience",
    description:
      "Arrive at your chosen luxury spa for a 90-minute couples treatment. Hot stone massage, aromatherapy, or deep tissue — the choice is yours.",
    icon: Sparkles,
    gradient: "from-purple-400 to-violet-500",
  },
  {
    time: "12:30 PM",
    title: "Vineyard Lunch",
    description:
      "A curated wine-paired lunch at one of Niagara's finest winery restaurants. Locally sourced ingredients with panoramic vineyard views.",
    icon: Wine,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    time: "2:30 PM",
    title: "Niagara Falls",
    description:
      "Arrive at the Falls for a magical afternoon. Watch the mist catch the sunlight as you walk the promenade hand-in-hand.",
    icon: Waves,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    time: "4:00 PM",
    title: "Sunset Dinner (Optional)",
    description:
      "Cap the day with dinner at a romantic Niagara restaurant. Your driver handles everything — just enjoy the moment.",
    icon: UtensilsCrossed,
    gradient: "from-orange-400 to-red-500",
  },
  {
    time: "6:00 PM",
    title: "Golden Hour Return",
    description:
      "Relax on the scenic drive home as the sun sets over the Niagara Escarpment. Door-to-door, back to your address.",
    icon: Car,
    gradient: "from-rose-400 to-amber-400",
  },
];

const SPAS = [
  {
    name: "100 Fountain Spa",
    location: "Pillar and Post, NOTL",
    description:
      "A tranquil oasis in the heart of Niagara-on-the-Lake. Award-winning couples treatments with hot spring-inspired pools, relaxation lounges, and eucalyptus steam rooms.",
    highlight: "Famous for their Couples Harmony Massage",
    image: "Serene spa treatment room with candles and hot stone setup",
  },
  {
    name: "Spa on the Twenty",
    location: "Inn on the Twenty, Jordan",
    description:
      "Nestled in the Twenty Valley wine region. Features organic products, vineyard views from treatment rooms, and a private couples suite with soaking tub.",
    highlight: "Known for their Vinotherapy wine-infused treatments",
    image: "Spa treatment room overlooking Jordan vineyards",
  },
  {
    name: "Christienne Fallsview Spa",
    location: "Sheraton Fallsview, Niagara Falls",
    description:
      "A luxurious spa overlooking the Falls. Enjoy couples massages with the sound of thundering water as your soundtrack.",
    highlight: "Unmatched views of both the American and Horseshoe Falls",
    image: "Spa lounge with panoramic Niagara Falls view through floor-to-ceiling windows",
  },
];

const RESTAURANTS = [
  {
    name: "AG at the Sterling Inn",
    cuisine: "Farm-to-Table Canadian",
    location: "Niagara Falls",
    price: "$$$$",
    description:
      "An intimate, candlelit dining room with a hyper-local menu that changes with the seasons. Their tasting menu with wine pairings is legendary among couples.",
    image: "Elegant candlelit dining table with wine glasses at AG Restaurant",
  },
  {
    name: "Treadwell Cuisine",
    cuisine: "Modern Canadian",
    location: "Niagara-on-the-Lake",
    price: "$$$",
    description:
      "Farm-to-table pioneer in Niagara wine country. A romantic courtyard setting with an award-winning wine list featuring exclusively Niagara wines.",
    image: "Courtyard dining at Treadwell with string lights and vineyard atmosphere",
  },
  {
    name: "The Cannery Restaurant",
    cuisine: "Contemporary",
    location: "NOTL",
    price: "$$$",
    description:
      "Set in a converted canning factory on the Niagara River. Floor-to-ceiling windows, sunset views, and a menu built around local ingredients.",
    image: "Waterfront dining at The Cannery with Niagara River sunset views",
  },
  {
    name: "Weinkeller",
    cuisine: "European Bistro",
    location: "Niagara Falls",
    price: "$$$",
    description:
      "An underground wine bar and bistro with an old-world atmosphere. Over 500 wines by the glass. Perfect for a cozy, intimate dinner.",
    image: "Stone cellar dining room at Weinkeller with candlelight and wine wall",
  },
];

export default function CouplesSpaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600" />
        <div className="absolute inset-0 bg-[url('/images/tours/couples-spa.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-white" />
                Romantic Experience
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Couples Spa & Falls
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                A curated romantic escape: luxury spa treatment, vineyard lunch
                with wine pairings, and an afternoon at the majestic Falls.
                Champagne and roses optional.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  10 Hours
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  2-4 Guests
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Flower2 className="w-4 h-4" />
                  Roses Available
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Car className="w-4 h-4" />
                  Mazda CX-90
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$550</span>
                <span className="text-white/70 text-lg">
                  flat rate / vehicle
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <InlineBookingCTA tourId="couples-spa" />

      {/* Itinerary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Your Romantic Day
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every detail curated for couples. From champagne at pickup to
                sunset on the way home.
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
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stop.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {i < ITINERARY.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-rose-200 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-sm font-bold text-rose-500">
                        {stop.time}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">
                        {stop.title}
                      </h3>
                      <p className="text-gray-600 mt-1 leading-relaxed">
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

      {/* Romantic Add-ons */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Make It Extra Special
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Add romantic touches to surprise your partner. Available at
                booking.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Champagne & Chocolate",
                price: "$85",
                unit: "per couple",
                desc: "Moët & Chandon with artisan chocolate truffles waiting in the SUV.",
                icon: Wine,
                gradient: "from-amber-400 to-yellow-500",
              },
              {
                name: "Fresh Rose Bouquet",
                price: "$65",
                unit: "per arrangement",
                desc: "Two dozen premium long-stem roses arranged in the vehicle.",
                icon: Flower2,
                gradient: "from-rose-400 to-red-500",
              },
              {
                name: "Hot Stone Upgrade",
                price: "$45",
                unit: "per person",
                desc: "Upgrade your spa treatment to a luxurious hot stone massage.",
                icon: Sparkles,
                gradient: "from-purple-400 to-violet-500",
              },
              {
                name: "Sunset Wine Cruise",
                price: "$95",
                unit: "per person",
                desc: "Evening cruise along the Niagara River with local wines.",
                icon: Waves,
                gradient: "from-blue-400 to-cyan-500",
              },
            ].map((addon, i) => {
              const Icon = addon.icon;
              return (
                <AnimatedSection key={addon.name} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-rose-100 p-6 hover:shadow-lg hover:shadow-rose-100 transition-all h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{addon.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex-1">{addon.desc}</p>
                    <div>
                      <span className="text-lg font-bold text-rose-500">{addon.price}</span>
                      <span className="text-xs text-gray-400 ml-1">{addon.unit}</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Spas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;ve partnered with Niagara&apos;s most luxurious spas.
                Choose your favourite or let us recommend one.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {SPAS.map((spa, i) => (
              <AnimatedSection key={spa.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-72 h-48 sm:h-auto bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center text-gray-400 text-sm px-4 text-center shrink-0">
                      {spa.image}
                    </div>
                    <div className="flex-1 p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {spa.name}
                          </h3>
                          <p className="text-sm text-rose-500 font-medium">
                            {spa.location}
                          </p>
                        </div>
                        <div className="flex gap-0.5 shrink-0">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-sunset-gold text-sunset-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {spa.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full text-sm font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        {spa.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Romantic Dinner Reservations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End the day at one of Niagara&apos;s most romantic restaurants. We
                handle the reservation — just show up and enjoy.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {RESTAURANTS.map((restaurant, i) => (
              <AnimatedSection key={restaurant.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-gray-400 text-sm px-4 text-center">
                    {restaurant.image}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {restaurant.name}
                      </h3>
                      <span className="text-sm font-semibold text-amber-600 shrink-0">
                        {restaurant.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{restaurant.cuisine}</span>
                      <span className="text-gray-300">|</span>
                      <span>{restaurant.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {restaurant.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plan Your Romantic Escape
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              $550 flat rate. Spa, wine, Falls. Add champagne & roses for
              the ultimate surprise.
            </p>
            <a
              href="https://wa.me/16479094565?text=Hi!%20I'd%20like%20to%20book%20the%20Couples%20Spa%20%26%20Falls%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
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
              { href: "/tours/toronto-highlights", label: "Toronto Highlights" },
              { href: "/tours/custom-private", label: "Custom Private Tour" },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-rose-400 text-gray-600 hover:text-rose-500 px-6 py-3 rounded-full font-medium transition-colors">
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
