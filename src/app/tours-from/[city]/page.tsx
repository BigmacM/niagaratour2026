import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Users,
  Car,
  Star,
  MessageCircle,
  ChevronRight,
  Flower2,
  Waves,
  Wine,
  Mountain,
  Camera,
  Heart,
  Compass,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CityTourSchema } from "@/components/TourSchema";
import { InlineBookingCTA } from "@/components/InlineBookingCTA";

const CITY_DATA: Record<
  string,
  { name: string; driveTime: string; highlights: string }
> = {
  toronto: {
    name: "Toronto",
    driveTime: "1.5 hours",
    highlights:
      "Enjoy the scenic QEW drive along Lake Ontario, passing through wine country before arriving at the Falls.",
  },
  mississauga: {
    name: "Mississauga",
    driveTime: "1.5 hours",
    highlights:
      "A smooth ride from Mississauga along the QEW, with stunning lakeside views the entire way.",
  },
  brampton: {
    name: "Brampton",
    driveTime: "1.5 hours",
    highlights:
      "From Brampton, we take the scenic route through Oakville and Burlington before hitting wine country.",
  },
  oakville: {
    name: "Oakville",
    driveTime: "1 hour 15 minutes",
    highlights:
      "One of the closest GTA cities to Niagara. You'll be at the Falls before you know it.",
  },
  milton: {
    name: "Milton",
    driveTime: "1 hour 15 minutes",
    highlights:
      "From Milton, enjoy the countryside views along the Niagara Escarpment on your way to the Falls.",
  },
  burlington: {
    name: "Burlington",
    driveTime: "1 hour",
    highlights:
      "Burlington is our closest pickup city. You'll arrive at Niagara refreshed and ready to explore.",
  },
  vaughan: {
    name: "Vaughan",
    driveTime: "1 hour 45 minutes",
    highlights:
      "From Vaughan, we head south through the heart of the GTA and along the scenic QEW corridor.",
  },
  markham: {
    name: "Markham",
    driveTime: "2 hours",
    highlights:
      "A comfortable ride from Markham with plenty of time to relax in our luxury SUV before arriving.",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    driveTime: "2 hours",
    highlights:
      "From Richmond Hill, sit back and enjoy the spacious Mazda CX-90 on the drive to Niagara.",
  },
  scarborough: {
    name: "Scarborough",
    driveTime: "1 hour 45 minutes",
    highlights:
      "We'll pick you up in Scarborough and head west along the lakeshore toward Niagara Falls.",
  },
};

const ITINERARY_STEPS = [
  { icon: Car, gradient: "from-sky-400 to-blue-500", label: "GTA Pickup" },
  { icon: Flower2, gradient: "from-green-400 to-emerald-500", label: "Floral Clock" },
  { icon: Waves, gradient: "from-cyan-400 to-teal-500", label: "Whirlpool Rapids" },
  { icon: Wine, gradient: "from-purple-400 to-violet-500", label: "NOTL Winery Visit" },
  { icon: Mountain, gradient: "from-blue-500 to-indigo-600", label: "3 Hours at the Falls" },
  { icon: Camera, gradient: "from-orange-400 to-rose-500", label: "Return Journey" },
];

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const data = CITY_DATA[params.city];
  if (!data) return {};

  return {
    title: `Private Niagara Falls Tour from ${data.name}`,
    description: `Book a private luxury Mazda CX-90 tour from ${data.name} to Niagara Falls. Door-to-door pickup, ${data.driveTime} scenic drive, groups of 1-6. From $400 flat rate.`,
    openGraph: {
      title: `Private Niagara Falls Tour from ${data.name} | GoTourNiagara`,
      description: `Exclusive door-to-door SUV tour from ${data.name} to Niagara Falls. $400 flat rate for the vehicle.`,
      url: `https://gotourniagara.com/tours-from/${params.city}`,
    },
    alternates: {
      canonical: `https://gotourniagara.com/tours-from/${params.city}`,
    },
  };
}

export default function CityTourPage({
  params,
}: {
  params: { city: string };
}) {
  const data = CITY_DATA[params.city];
  if (!data) notFound();

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book a private Niagara Falls tour from ${data.name}. Can you tell me more?`
  );

  return (
    <>
      <CityTourSchema city={data.name} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-niagara-blue via-blue-600 to-cyan-500" />
        <div className="absolute inset-0 bg-[url('/images/hero/niagara-hero.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Door-to-door from {data.name}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Premium Private Niagara Falls Tour from{" "}
                <span className="text-sunset-gold">{data.name}</span>
              </h1>

              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Skip the crowded buses. We provide exclusive door-to-door pickup
                from any address in {data.name}. Enjoy the {data.driveTime}{" "}
                scenic drive to Niagara in our flagship Mazda CX-90.
              </p>

              <p className="text-white/75 mb-8">{data.highlights}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  {data.driveTime} to Niagara
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Car className="w-4 h-4" />
                  Mazda CX-90
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-sunset-gold text-sunset-gold"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-white">$400</span>
                <span className="text-white/70 text-lg">flat rate / vehicle</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inline CTA */}
      <InlineBookingCTA />

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What&apos;s Included in Your {data.name} Tour
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Door-to-Door Pickup",
                desc: `We come to your address in ${data.name}. No meeting points, no transit.`,
              },
              {
                icon: Car,
                title: "Luxury Mazda CX-90",
                desc: "Premium leather, panoramic sunroof, and room for up to 6.",
              },
              {
                icon: Clock,
                title: "9-Hour Tour",
                desc: "Full day: Floral Clock, Wineries, Whirlpool, and the Falls.",
              },
              {
                icon: Users,
                title: "$400 Flat Rate",
                desc: "One price for the vehicle. Split it among your group.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-niagara-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-niagara-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              Your Niagara Day from {data.name}
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              `Pickup from your ${data.name} address`,
              `${data.driveTime} scenic drive in the Mazda CX-90`,
              "Floral Clock photo stop",
              "Whirlpool Rapids overlook",
              "Niagara-on-the-Lake winery visit",
              "3 hours exploring Niagara Falls",
              `Scenic return drive to ${data.name}`,
            ].map((item, i) => {
              const stepData = ITINERARY_STEPS[Math.min(i, ITINERARY_STEPS.length - 1)];
              const Icon = stepData.icon;
              return (
                <AnimatedSection key={item} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stepData.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {i < 6 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-niagara-blue/20 to-transparent mt-1" />
                      )}
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm flex-1 mb-1 border border-gray-50 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-niagara-blue/10 rounded-full flex items-center justify-center text-xs font-bold text-niagara-blue shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 font-medium">{item}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="text-center mt-10">
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

      {/* Available Tours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Tours Available from {data.name}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                href: "/tours/niagara-flagship",
                name: "Niagara Flagship",
                price: "$400",
                duration: "9 hrs",
                icon: Waves,
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                href: "/tours/toronto-highlights",
                name: "Toronto Highlights",
                price: "$400",
                duration: "5 hrs",
                icon: Camera,
                gradient: "from-slate-500 to-gray-400",
              },
              {
                href: "/tours/couples-spa",
                name: "Couples Spa",
                price: "$550",
                duration: "10 hrs",
                icon: Heart,
                gradient: "from-rose-500 to-pink-400",
              },
              {
                href: "/tours/custom-private",
                name: "Custom Tour",
                price: "$400+",
                duration: "Flexible",
                icon: Compass,
                gradient: "from-amber-500 to-orange-400",
              },
            ].map((tour, i) => {
              const Icon = tour.icon;
              return (
                <AnimatedSection key={tour.href} delay={i * 0.1}>
                  <Link
                    href={tour.href}
                    className="group block bg-white rounded-2xl p-5 border border-gray-100 hover:border-niagara-blue/30 hover:shadow-lg transition-all text-center h-full"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tour.gradient} flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-niagara-blue transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {tour.duration} &middot; {tour.price}
                    </p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Trusted by {data.name} Locals
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-sunset-gold text-sunset-gold"
                  />
                ))}
              </div>
              <p className="text-gray-600">5.0 average from 47+ verified reviews</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;Picked us up right at our door in {data.name}. The Mazda CX-90 is incredibly comfortable for the drive to Niagara. Our driver was knowledgeable and friendly. Highly recommend!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Happy Guest</p>
                    <p className="text-xs text-gray-500">{data.name} &middot; Niagara Flagship Tour</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-sunset-gold text-sunset-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;Best day trip ever from {data.name}! We saw the wineries, walked the Falls, and were home before dinner. The door-to-door service made it so easy. Will book again!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Returning Customer</p>
                    <p className="text-xs text-gray-500">{data.name} &middot; Custom Private Tour</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-sunset-gold text-sunset-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-niagara-blue via-blue-600 to-cyan-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Book Your {data.name} Pickup Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              $400 flat rate. Door-to-door from {data.name}. Up to 6 guests.
              100% private luxury experience.
            </p>
            <a
              href={`https://wa.me/16479094565?text=${whatsappMessage}`}
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

      {/* Other Cities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Also Pickup From
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(CITY_DATA)
              .filter(([slug]) => slug !== params.city)
              .map(([slug, d]) => (
                <Link
                  key={slug}
                  href={`/tours-from/${slug}`}
                  className="inline-flex items-center gap-1 border-2 border-gray-200 hover:border-niagara-blue text-gray-600 hover:text-niagara-blue px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  {d.name}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
