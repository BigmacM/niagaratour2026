"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Check,
  Heart,
  Compass,
  Waves,
  Building2,
} from "lucide-react";

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

const TOURS = [
  {
    id: "niagara",
    name: "Niagara Flagship",
    duration: "9 hours",
    price: 400,
    description:
      "Floral Clock, Whirlpool Rapids, NOTL Wineries, and 3 hours at the Falls.",
    icon: Waves,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "toronto",
    name: "Toronto Highlights",
    duration: "5 hours",
    price: 400,
    description:
      "CN Tower, Distillery District, St. Lawrence Market, and more.",
    icon: Building2,
    color: "from-slate-600 to-gray-400",
  },
  {
    id: "couples-spa",
    name: "Couples Spa & Falls",
    duration: "10 hours",
    price: 550,
    description:
      "Romantic spa retreat, vineyard lunch, champagne at the Falls.",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
  },
  {
    id: "custom",
    name: "Custom Private Tour",
    duration: "Flexible",
    price: 400,
    description:
      "Design your own itinerary. Tell us what you want and we'll make it happen.",
    icon: Compass,
    color: "from-amber-500 to-orange-400",
  },
];

const ADDONS: Record<string, Array<{ id: string; name: string; price: number; unit: string; description: string }>> = {
  niagara: [
    {
      id: "maid",
      name: "Maid of the Mist",
      price: 35,
      unit: "per person",
      description: "Get up close to the thundering Falls on this iconic boat tour.",
    },
    {
      id: "skylon",
      name: "Skylon Tower Dinner",
      price: 65,
      unit: "per person",
      description: "Revolving dining 775 feet above the Falls.",
    },
    {
      id: "heli",
      name: "Niagara Heli-Tour",
      price: 160,
      unit: "per person",
      description: "12-minute helicopter flight over the Falls and wine country.",
    },
    {
      id: "wine",
      name: "Premium Wine Tasting",
      price: 25,
      unit: "per person",
      description: "Guided tasting at a premium NOTL estate winery.",
    },
  ],
  toronto: [
    {
      id: "cn-tower",
      name: "CN Tower Admission",
      price: 45,
      unit: "per person",
      description: "Skip-the-line access to the observation deck and Glass Floor.",
    },
    {
      id: "ripleys",
      name: "Ripley's Aquarium",
      price: 40,
      unit: "per person",
      description: "Walk through the underwater tunnel and explore 20,000+ marine animals.",
    },
    {
      id: "wonderland",
      name: "Canada's Wonderland",
      price: 55,
      unit: "per person",
      description: "Full-day access to Canada's premier amusement park with 200+ attractions.",
    },
    {
      id: "zoo",
      name: "Toronto Zoo",
      price: 30,
      unit: "per person",
      description: "Explore 5,000+ animals across 10 km of trails at Canada's largest zoo.",
    },
  ],
  "couples-spa": [
    {
      id: "champagne",
      name: "Champagne & Chocolate Box",
      price: 85,
      unit: "per couple",
      description: "Moët & Chandon with artisan chocolate truffles on arrival.",
    },
    {
      id: "flowers",
      name: "Fresh Rose Bouquet",
      price: 65,
      unit: "per arrangement",
      description: "Two dozen premium long-stem roses waiting in the vehicle.",
    },
    {
      id: "spa-upgrade",
      name: "Hot Stone Massage Upgrade",
      price: 45,
      unit: "per person",
      description: "Upgrade your couples massage to a luxurious hot stone treatment.",
    },
    {
      id: "sunset-cruise",
      name: "Sunset Wine Cruise",
      price: 95,
      unit: "per person",
      description: "Evening cruise along the Niagara River with local wines.",
    },
  ],
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

interface BookingFlowProps {
  preselectedTour?: string;
  preselectedCity?: string;
}

export function BookingFlow({ preselectedTour, preselectedCity }: BookingFlowProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [city, setCity] = useState(preselectedCity || "");
  const [tour, setTour] = useState(preselectedTour || "");
  const [addons, setAddons] = useState<string[]>([]);
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    if (preselectedTour) setTour(preselectedTour);
    if (preselectedCity) setCity(preselectedCity);
    if (preselectedTour && preselectedCity) setStep(2);
    else if (preselectedCity) setStep(1);
    else if (preselectedTour) setStep(0);
  }, [preselectedTour, preselectedCity]);

  const selectedTour = TOURS.find((t) => t.id === tour);
  const maxGuests = tour === "couples-spa" ? 2 : 6;
  const currentAddons =
    tour === "couples-spa"
      ? ADDONS["couples-spa"]
      : tour === "toronto"
        ? ADDONS["toronto"]
        : ADDONS["niagara"];

  const total = useMemo(() => {
    const base = selectedTour?.price ?? 0;
    const addonTotal = addons.reduce((sum, id) => {
      const allAddons = [...ADDONS["niagara"], ...ADDONS["toronto"], ...ADDONS["couples-spa"]];
      const addon = allAddons.find((a) => a.id === id);
      if (!addon) return sum;
      const multiplier = addon.unit === "per couple" || addon.unit === "per arrangement" ? 1 : guests;
      return sum + addon.price * multiplier;
    }, 0);
    return base + addonTotal;
  }, [selectedTour, addons, guests]);

  const whatsappMessage = useMemo(() => {
    const tourName = selectedTour?.name ?? "";
    const allAddons = [...ADDONS["niagara"], ...ADDONS["toronto"], ...ADDONS["couples-spa"]];
    const addonNames = addons
      .map((id) => allAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    const msg = `Hi! I'd like to book a ${tourName} tour.\n\nPickup: ${city}\nGuests: ${guests}\n${addonNames ? `Add-ons: ${addonNames}\n` : ""}Estimated Total: $${total} CAD`;
    return encodeURIComponent(msg);
  }, [city, selectedTour, addons, guests, total]);

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  function toggleAddon(id: string) {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  const canProceed =
    (step === 0 && city) ||
    (step === 1 && tour) ||
    step === 2 ||
    step === 3;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {["City", "Tour", "Add-ons", "Summary"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <button
              onClick={() => {
                if (i < step) {
                  setDirection(-1);
                  setStep(i);
                }
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                i <= step
                  ? "bg-niagara-blue text-white shadow-md shadow-niagara-blue/20"
                  : "bg-gray-200 text-gray-500"
              } ${i < step ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
            >
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </button>
            <span
              className={`text-xs font-medium hidden sm:inline ${
                i <= step ? "text-niagara-blue" : "text-gray-400"
              }`}
            >
              {label}
            </span>
            {i < 3 && (
              <div
                className={`w-8 h-0.5 transition-colors ${
                  i < step ? "bg-niagara-blue" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden min-h-[400px] relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* STEP 0: City */}
            {step === 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Select Your City
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Where should we pick you up?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCity(c)}
                      className={`flex items-center gap-2 p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                        city === c
                          ? "border-niagara-blue bg-niagara-blue/5 text-niagara-blue shadow-md shadow-niagara-blue/10"
                          : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Tour */}
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Choose Your Tour
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Pickup from {city}. Select your experience.
                </p>
                <div className="space-y-3">
                  {TOURS.map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTour(t.id);
                          setAddons([]);
                          if (t.id === "couples-spa" && guests > 2) setGuests(2);
                        }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          tour === t.id
                            ? "border-niagara-blue bg-niagara-blue/5 shadow-md shadow-niagara-blue/10"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-bold text-gray-900">
                                {t.name}
                              </h4>
                              <span className="text-lg font-bold text-niagara-blue whitespace-nowrap">
                                ${t.price}{t.id === "custom" ? "+" : ""}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {t.description}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {t.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" /> {t.id === "couples-spa" ? "Up to 2" : "Up to 6"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Add-ons */}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Add-on Experiences
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {tour === "couples-spa"
                    ? "Make it extra special with romantic extras."
                    : "Enhance your tour with these popular extras."}{" "}
                  (Optional)
                </p>

                <div className="mb-6 bg-gray-50 rounded-xl p-4">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Number of guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-lg font-bold text-gray-600 hover:border-niagara-blue transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-bold text-gray-900 w-8 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests((g) => Math.min(maxGuests, g + 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-lg font-bold text-gray-600 hover:border-niagara-blue transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentAddons.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        addons.includes(addon.id)
                          ? "border-niagara-blue bg-niagara-blue/5 shadow-md shadow-niagara-blue/10"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                addons.includes(addon.id)
                                  ? "bg-niagara-blue border-niagara-blue"
                                  : "border-gray-300"
                              }`}
                            >
                              {addons.includes(addon.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <h4 className="font-semibold text-gray-900">
                              {addon.name}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-500 mt-1 ml-7">
                            {addon.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-niagara-blue">
                            +${addon.price}
                          </span>
                          <span className="text-xs text-gray-400 block">
                            {addon.unit}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Summary */}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Your Tour Summary
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Review your selections and book via WhatsApp.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Pickup
                      </span>
                      <p className="font-semibold text-gray-900">{city}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-niagara-blue" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Tour
                      </span>
                      <p className="font-semibold text-gray-900">
                        {selectedTour?.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {selectedTour?.duration}
                      </p>
                    </div>
                    <span className="font-bold text-gray-900">
                      ${selectedTour?.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Guests
                      </span>
                      <p className="font-semibold text-gray-900">
                        {guests} {guests === 1 ? "person" : "people"}
                      </p>
                    </div>
                    <Users className="w-5 h-5 text-niagara-blue" />
                  </div>

                  {addons.length > 0 && (
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Add-ons
                      </span>
                      {addons.map((id) => {
                        const allAddons = [...ADDONS["niagara"], ...ADDONS["toronto"], ...ADDONS["couples-spa"]];
                        const addon = allAddons.find((a) => a.id === id);
                        if (!addon) return null;
                        const multiplier =
                          addon.unit === "per couple" || addon.unit === "per arrangement" ? 1 : guests;
                        return (
                          <div
                            key={id}
                            className="flex items-center justify-between mt-2"
                          >
                            <p className="font-medium text-gray-900 text-sm">
                              {addon.name}{" "}
                              {multiplier > 1 && (
                                <span className="text-gray-400">x{multiplier}</span>
                              )}
                            </p>
                            <span className="text-sm font-semibold text-gray-700">
                              +${addon.price * multiplier}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center justify-between p-4 bg-niagara-blue/5 rounded-xl border-2 border-niagara-blue/20">
                    <span className="text-lg font-bold text-gray-900">
                      Estimated Total
                    </span>
                    <span className="text-2xl font-bold text-niagara-blue">
                      ${total} CAD
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/16479094565?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-niagara-blue to-niagara-dark text-white py-4 rounded-full text-lg font-bold hover:shadow-lg hover:shadow-niagara-blue/30 transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Final pricing confirmed upon booking. Add-on prices are estimates.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goBack}
          disabled={step === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
            step === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:text-niagara-blue"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        {step < 3 && (
          <button
            onClick={goNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
              canProceed
                ? "bg-niagara-blue text-white hover:bg-niagara-dark shadow-md shadow-niagara-blue/20"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
