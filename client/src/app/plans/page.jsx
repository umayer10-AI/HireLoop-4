"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const seekerPlans = [
{
name: "Free",
price: "$0",
period: "/forever",
features: [
"Browse & save up to 10 jobs",
"Apply to up to 3 jobs per month",
"Basic profile",
"Email alerts",
],
},
{
name: "Pro",
price: "$19",
period: "/month",
popular: true,
features: [
"Apply to up to 30 jobs per month",
"Unlimited saved jobs",
"Application tracking",
"Salary insights",
],
},
{
name: "Premium",
price: "$39",
period: "/month",
features: [
"Unlimited applications",
"Profile boost to recruiters",
"Early access to new jobs",
"Priority support",
],
},
];

const recruiterPlans = [
{
name: "Free",
price: "$0",
period: "/forever",
features: [
"Up to 3 active job posts",
"Basic applicant management",
"Standard listing visibility",
"Perfect for first-year hiring",
],
},
{
name: "Growth",
price: "$49",
period: "/month",
popular: true,
features: [
"Up to 10 active job posts",
"Applicant tracking",
"Basic analytics",
"Email support",
],
},
{
name: "Enterprise",
price: "$149",
period: "/month",
features: [
"Up to 50 active job posts",
"Advanced analytics dashboard",
"Featured job listings",
"Team collaboration",
"Custom branding",
"Priority support",
],
},
];

const faqs = [
{
question: "Can I cancel my subscription anytime?",
answer:
"Yes. You can cancel your subscription at any time from your account settings.",
},
{
question: "Do you offer refunds?",
answer:
"Refunds are reviewed on a case-by-case basis depending on usage and billing cycle.",
},
{
question: "What payment methods do you accept?",
answer:
"We accept Visa, MasterCard, American Express, PayPal, and major payment gateways.",
},
{
question: "Can I switch plans later?",
answer:
"Absolutely. You can upgrade or downgrade your plan whenever you want.",
},
];

export default function PricingPage() {
const [tab, setTab] = useState("seekers");
const [openFAQ, setOpenFAQ] = useState(null);

const plans = tab === "seekers" ? seekerPlans : recruiterPlans;

return ( <div className="min-h-screen bg-black text-white px-6 py-20"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-14"> <h1 className="text-5xl font-bold mb-4">
Simple, Transparent Pricing </h1> <p className="text-gray-400 max-w-2xl mx-auto">
Choose the perfect plan whether you're searching for your dream job
or hiring top talent. </p> </div>

```
    <div className="flex justify-center mb-12">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-1 flex">
        <button
          onClick={() => setTab("seekers")}
          className={`px-6 py-3 rounded-lg transition ${
            tab === "seekers"
              ? "bg-cyan-500 text-white"
              : "text-gray-400"
          }`}
        >
          For Job Seekers
        </button>

        <button
          onClick={() => setTab("recruiters")}
          className={`px-6 py-3 rounded-lg transition ${
            tab === "recruiters"
              ? "bg-cyan-500 text-white"
              : "text-gray-400"
          }`}
        >
          For Recruiters
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-8 ${
            plan.popular
              ? "border-cyan-500 bg-gray-900"
              : "border-gray-800 bg-gray-900/50"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 right-6 bg-cyan-500 px-3 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </div>
          )}

          <h3 className="text-2xl font-bold">{plan.name}</h3>

          <div className="mt-4 mb-6">
            <span className="text-5xl font-bold">{plan.price}</span>
            <span className="text-gray-400">{plan.period}</span>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check size={18} className="text-cyan-400 mt-1" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
            Choose Plan
          </button>
        </div>
      ))}
    </div>

    <div className="mt-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenFAQ(openFAQ === index ? null : index)
              }
              className="w-full flex items-center justify-between p-5 bg-gray-900"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFAQ === index && (
              <div className="p-5 text-gray-400 bg-gray-950">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

);
}
