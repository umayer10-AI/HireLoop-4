"use client";

import React, { useState } from "react";

const plans = [
  {
    icon: "👑",
    title: "Starter",
    price: "$0",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    icon: "📊",
    title: "Growth",
    price: "$17",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    icon: "⚡",
    title: "Premium",
    price: "$99",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

const Section3 = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="text-center mb-12">
        <p className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit mx-auto font-bold tracking-widest text-sm mb-4 uppercase">
          ■ PRICING ■
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pay for the leverage,
          <br />
          not the listings
        </h2>

        <div className="inline-flex bg-gray-900 p-1 rounded-full border border-gray-800">
          <button className="px-6 py-2 rounded-full bg-white text-black font-semibold">
            Monthly
          </button>

          <button className="px-6 py-2 rounded-full text-gray-400 font-semibold hover:text-white transition">
            Yearly
            <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full ml-1">
              25%
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 border ${
              selected === index
                ? "border-gray-700 bg-gray-800/50 shadow-2xl scale-105"
                : "border-gray-800 bg-gray-900/30 hover:bg-gray-800/30"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{plan.icon}</span>

              <h3 className="text-xl font-semibold">
                {plan.title}
              </h3>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              <span className="text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 mb-6 font-medium">
              Start building your insights hub:
            </p>

            <ul className="space-y-4 mb-8 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span>+</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-xl transition flex justify-between px-6 items-center ${
                selected === index
                  ? "bg-white text-black font-semibold hover:bg-gray-200"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              Choose This Plan <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;