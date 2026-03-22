const CITIES = [
  "Toronto", "Mississauga", "Brampton", "Oakville", "Milton",
  "Burlington", "Vaughan", "Markham", "Richmond Hill", "Scarborough",
];

const REVIEWS = [
  {
    author: "Sarah M.",
    date: "2025-11-15",
    body: "Absolutely incredible day! Our driver knew every hidden gem. The winery stop was a highlight. Worth every penny for a private experience.",
    rating: 5,
  },
  {
    author: "James K.",
    date: "2025-10-22",
    body: "We booked the Couples Spa tour for our anniversary. The champagne, the spa, the Falls at sunset — it was pure magic.",
    rating: 5,
  },
  {
    author: "David R.",
    date: "2025-09-08",
    body: "Family of 5 and we had the best day. Kids loved the Falls, I loved the winery. Door-to-door from Brampton made it so easy.",
    rating: 5,
  },
  {
    author: "Maria T.",
    date: "2025-12-01",
    body: "Third time booking with GoTourNiagara. Every time they exceed expectations. The Mazda CX-90 is incredibly comfortable.",
    rating: 5,
  },
  {
    author: "Chen W.",
    date: "2026-01-14",
    body: "Visiting from overseas and wanted to see Toronto AND Niagara. They created a custom 2-day itinerary that was perfect.",
    rating: 5,
  },
];

export function ServiceAreaSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Private Luxury Niagara Falls Tour",
      "description":
        "Premium private SUV tour from the Greater Toronto Area to Niagara Falls. Door-to-door pickup in a luxury Mazda CX-90 for groups of 1-6. Includes Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at the Falls.",
      "image": [
        "https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?w=1200&q=80",
        "https://images.unsplash.com/photo-1463695970743-ae65cca05743?w=1200&q=80",
      ],
      "brand": {
        "@type": "Brand",
        "name": "GoTourNiagara",
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "400",
        "highPrice": "550",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://gotourniagara.com/tours/niagara-flagship",
        "offerCount": "4",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "47",
        "reviewCount": "47",
      },
      "review": REVIEWS.map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.author },
        "datePublished": r.date,
        "reviewBody": r.body,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": String(r.rating),
          "bestRating": "5",
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "Private Luxury Niagara Falls Tour",
      "description":
        "Premium private SUV tour from the Greater Toronto Area to Niagara Falls. Door-to-door pickup in a Mazda CX-90 for groups of 1-6.",
      "touristType": ["Families", "Couples", "Small Groups", "FIFA World Cup 2026 Visitors"],
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://gotourniagara.com/#business",
        "name": "GoTourNiagara",
        "description":
          "Private luxury SUV tours from the GTA to Niagara Falls and Toronto highlights.",
        "url": "https://gotourniagara.com",
        "telephone": "+16479094565",
        "email": "info@gotourniagara.com",
        "priceRange": "$$",
        "image": "https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?w=1200&q=80",
        "areaServed": CITIES.map((city) => ({
          "@type": "City",
          "name": `${city}, Ontario, Canada`,
        })),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tour Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Niagara Flagship Tour",
                "description":
                  "9-hour luxury SUV tour to Niagara Falls including Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at the Falls.",
              },
              "price": "400",
              "priceCurrency": "CAD",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Toronto Highlights Tour",
                "description":
                  "5-hour luxury SUV tour of Toronto's top attractions and landmarks.",
              },
              "price": "400",
              "priceCurrency": "CAD",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Couples Spa & Falls Tour",
                "description":
                  "10-hour romantic tour with luxury spa, vineyard lunch, and Niagara Falls.",
              },
              "price": "550",
              "priceCurrency": "CAD",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "World Cup Niagara Falls Day Tour",
                "description":
                  "Private Niagara Falls tour for FIFA World Cup 2026 visitors. Hotel pickup in Toronto, designed to fit around match schedules.",
              },
              "price": "400",
              "priceCurrency": "CAD",
            },
          ],
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "GoTourNiagara Tour Packages",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Niagara Flagship Tour",
          "url": "https://gotourniagara.com/tours/niagara-flagship",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Toronto Highlights Tour",
          "url": "https://gotourniagara.com/tours/toronto-highlights",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Couples Spa & Falls Tour",
          "url": "https://gotourniagara.com/tours/couples-spa",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Custom Private Tour",
          "url": "https://gotourniagara.com/tours/custom-private",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "World Cup Niagara Falls Tour",
          "url": "https://gotourniagara.com/tours/world-cup-niagara",
        },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

export function CityTourSchema({ city }: { city: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Private Niagara Falls Tour from ${city}`,
    "description": `Exclusive door-to-door luxury SUV tour from ${city} to Niagara Falls. Private Mazda CX-90 for groups of 1-6 guests.`,
    "image": "https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?w=1200&q=80",
    "brand": {
      "@type": "Brand",
      "name": "GoTourNiagara",
    },
    "offers": {
      "@type": "Offer",
      "price": "400",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "url": `https://gotourniagara.com/tours-from/${city.toLowerCase().replace(/ /g, "-")}`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "47",
      "reviewCount": "47",
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "GoTourNiagara",
      "url": "https://gotourniagara.com",
      "telephone": "+16479094565",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
