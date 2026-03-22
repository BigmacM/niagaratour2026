import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Users,
  Car,
  MessageCircle,
  Compass,
  Palette,
  Route,
  ChevronRight,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

export const metadata: Metadata = {
  title: "Custom Private Tour — Design Your Own Luxury SUV Experience",
  description:
    "Create your own private tour itinerary. Tell us what you want to see — Niagara, Toronto, wine country, or anywhere in Ontario. Private Mazda CX-90. From $400.",
};

const IDEAS = [
  {
    title: "Winery Crawl",
    desc: "Hit 3-4 premium wineries across NOTL and the Twenty Valley. Ice wine, Pinot Noir, and vineyard lunches.",
    icon: "🍷",
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=80",
    imageAlt: "Wine tasting at a vineyard winery",
  },
  {
    title: "Photography Tour",
    desc: "Chase the best light at the Falls, gorge trails, and historic NOTL. Your driver knows every angle.",
    icon: "📸",
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80",
    imageAlt: "Photographer capturing a scenic landscape",
  },
  {
    title: "Family Fun Day",
    desc: "Butterfly Conservatory, Clifton Hill, Bird Kingdom, and Falls up close. Activities for all ages.",
    icon: "🎢",
    imageUrl: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=400&q=80",
    imageAlt: "Family enjoying attractions",
  },
  {
    title: "Foodie Trail",
    desc: "Farm-to-table restaurants, artisan cheese makers, ice cream stops, and a cooking class in wine country.",
    icon: "🍽️",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    imageAlt: "Gourmet farm-to-table dining spread",
  },
  {
    title: "Seasonal Special",
    desc: "Cherry blossom season, fall colours along the escarpment, winter Festival of Lights, or summer sunset cruises.",
    icon: "🍁",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    imageAlt: "Beautiful fall foliage along a scenic road",
  },
  {
    title: "Multi-Day Adventure",
    desc: "Combine Niagara, Toronto, and wine country into a 2-3 day luxury road trip with hotel recommendations.",
    icon: "🗺️",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
    imageAlt: "Scenic highway road trip at golden hour",
  },
];

const PROCESS = [
  {
    step: 1,
    title: "Tell Us Your Vision",
    description:
      "Message us with your interests, group size, dates, and any must-see spots. Anniversary dinner? Bucket-list waterfall hike? Just a chill wine day? We've heard it all.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "We Build Your Route",
    description:
      "Our team designs a custom itinerary with timing, restaurant picks, and insider tips. We'll share it for your approval before the day.",
    icon: Route,
  },
  {
    step: 3,
    title: "Enjoy the Day",
    description:
      "Your driver arrives on time. The route is set. All you do is sit back, explore, and make memories. Flexibility built in — change plans on the fly.",
    icon: Zap,
  },
];

export default function CustomTourPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500" />
        <div className="absolute inset-0 bg-[url('/images/tours/custom-tour.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                Your Tour, Your Rules
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Custom Private Tour
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Don&apos;t see exactly what you want? Design your own
                itinerary. Niagara, Toronto, wine country, or anywhere in
                Ontario. We&apos;ll make it happen.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  Flexible Hours
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Palette className="w-4 h-4" />
                  Fully Customizable
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Car className="w-4 h-4" />
                  Mazda CX-90
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$400</span>
                <span className="text-white/70 text-lg">starting rate</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <InlineBookingCTA tourId="custom" />

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple steps from idea to unforgettable day.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PROCESS.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-amber-600 mb-2">
                      Step {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Ideas */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Need Inspiration?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here are some of our most popular custom requests. Mix, match,
                or create something entirely new.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {IDEAS.map((idea, i) => (
              <AnimatedSection key={idea.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-36 relative overflow-hidden">
                    <Image
                      src={idea.imageUrl}
                      alt={idea.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{idea.icon}</span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {idea.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {idea.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Simple Pricing
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                duration: "Up to 5 hours",
                price: "$400",
                examples: "City tour, short wine crawl, half-day Falls visit",
              },
              {
                duration: "6-9 hours",
                price: "$500",
                examples: "Full Niagara day, multi-stop wine tour, combined city + Falls",
              },
              {
                duration: "10+ hours",
                price: "Custom",
                examples: "Multi-city, overnight trips, special events. Message us for a quote.",
              },
            ].map((tier, i) => (
              <AnimatedSection key={tier.duration} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-amber-300 p-6 text-center transition-colors h-full flex flex-col">
                  <p className="text-sm font-semibold text-amber-600 mb-2">
                    {tier.duration}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-3">
                    {tier.price}
                  </p>
                  <p className="text-sm text-gray-500 flex-1">{tier.examples}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-gray-400 mt-6 max-w-xl mx-auto">
              All prices are flat rates for the vehicle and driver. Entrance
              fees, meals, and activity costs are separate and paid directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Your Perfect Day
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Message us your ideas and we&apos;ll create a custom itinerary within 24
              hours. No commitment, no pressure.
            </p>
            <a
              href="https://wa.me/16479094565?text=Hi!%20I'd%20like%20to%20plan%20a%20custom%20private%20tour.%20Here's%20what%20I'm%20thinking..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Share Your Ideas
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Our Set Tours</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/tours/niagara-flagship", label: "Niagara Flagship" },
              { href: "/tours/toronto-highlights", label: "Toronto Highlights" },
              { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
            ].map((t) => (
              <Link key={t.href} href={t.href} className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-amber-400 text-gray-600 hover:text-amber-600 px-6 py-3 rounded-full font-medium transition-colors">
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
