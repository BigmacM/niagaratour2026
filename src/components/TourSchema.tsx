const CITIES = [
  "Toronto", "Mississauga", "Brampton", "Oakville", "Milton",
  "Burlington", "Vaughan", "Markham", "Richmond Hill", "Scarborough",
];

export function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Private Luxury Niagara Falls Tour",
    description:
      "Premium private SUV tour from the Greater Toronto Area to Niagara Falls. Door-to-door pickup in a Mazda CX-90 for groups of 1-6.",
    touristType: "Families, Couples, Small Groups",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://gotourniagara.com/#business",
      name: "GoTourNiagara",
      description:
        "Private luxury SUV tours from the GTA to Niagara Falls and Toronto highlights.",
      url: "https://gotourniagara.com",
      telephone: "+16479094565",
      priceRange: "$$",
      image: "https://gotourniagara.com/og-image.jpg",
      areaServed: CITIES.map((city) => ({
        "@type": "City",
        name: `${city}, Ontario, Canada`,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tour Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Niagara Flagship Tour",
              description:
                "9-hour luxury SUV tour to Niagara Falls including Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at the Falls.",
            },
            price: "400",
            priceCurrency: "CAD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "TouristTrip",
              name: "Toronto Highlights Tour",
              description:
                "5-hour luxury SUV tour of Toronto's top attractions and landmarks.",
            },
            price: "400",
            priceCurrency: "CAD",
          },
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CityTourSchema({ city }: { city: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `Premium Private Niagara Falls Tour from ${city}`,
    description: `Exclusive door-to-door luxury SUV tour from ${city} to Niagara Falls. Private Mazda CX-90 for groups of 1-6 guests.`,
    touristType: "Families, Couples, Small Groups",
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: `Pickup from ${city}` },
        { "@type": "ListItem", position: 2, name: "Floral Clock" },
        { "@type": "ListItem", position: 3, name: "Whirlpool Rapids" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Niagara-on-the-Lake Wineries",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "3 Hours at Niagara Falls",
        },
      ],
    },
    offers: {
      "@type": "Offer",
      price: "400",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "GoTourNiagara",
      url: "https://gotourniagara.com",
      telephone: "+16479094565",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
