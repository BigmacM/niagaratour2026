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
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CityTourSchema } from "@/components/TourSchema";

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
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-niagara-blue/5 via-white to-sunset-gold/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-niagara-blue" />
                <span className="text-sm font-semibold text-niagara-blue uppercase tracking-wide">
                  Door-to-door from {data.name}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Premium Private Niagara Falls Tour from{" "}
                <span className="text-niagara-blue">{data.name}</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Skip the crowded buses. We provide exclusive door-to-door pickup
                from any address in {data.name}. Enjoy the {data.driveTime}{" "}
                scenic drive to Niagara in our flagship Mazda CX-90.
              </p>

              <p className="text-gray-600 mb-8">{data.highlights}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`https://wa.me/16479094565?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-niagara-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-niagara-dark transition-colors shadow-lg shadow-niagara-blue/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book your {data.name} pickup via WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {data.driveTime} to Niagara
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Mazda CX-90
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  1-6 Guests
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-sunset-gold text-sunset-gold"
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
                desc: `We come to your address in ${data.name}. No meeting points.`,
              },
              {
                icon: Car,
                title: "Luxury Mazda CX-90",
                desc: "Premium leather, panoramic roof, and plenty of space.",
              },
              {
                icon: Clock,
                title: "9-Hour Tour",
                desc: "Full day including Floral Clock, Wineries, and the Falls.",
              },
              {
                icon: Users,
                title: "$400 Flat Rate",
                desc: "One price for the vehicle. Split it among up to 6 guests.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
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

      {/* Itinerary Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Niagara Day from {data.name}
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {[
              `Pickup from your ${data.name} address`,
              `${data.driveTime} scenic drive in the Mazda CX-90`,
              "Floral Clock photo stop",
              "Whirlpool Rapids overlook",
              "Niagara-on-the-Lake winery visit",
              "3 hours exploring Niagara Falls",
              `Return drive to ${data.name}`,
            ].map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.06}>
                <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 bg-niagara-blue rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-niagara-blue">
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
                  className="inline-flex items-center gap-1 border border-gray-200 hover:border-niagara-blue text-gray-600 hover:text-niagara-blue px-4 py-2 rounded-full text-sm font-medium transition-colors"
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
