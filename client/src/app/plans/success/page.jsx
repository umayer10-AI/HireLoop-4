import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { createSubscription } from "@/lib/api/subscription";

export default async function Success({ searchParams }) {
const { session_id } = await searchParams;

if (!session_id) {
throw new Error("Please provide a valid session_id");
}

const {
status,
customer_details: { email: customerEmail },
// metadata
} = await stripe.checkout.sessions.retrieve(session_id, {
expand: ["line_items", "payment_intent"],
});

if (status === "open") {
return redirect("/");
}

if (status === "complete") {

    // const subsInfo = {
    //     email: customerEmail,
    //     planId: metadata.planId
    // }

    // const data = await createSubscription(subsInfo)
    // console.log(data)

return ( <div className="min-h-screen bg-black flex items-center justify-center px-4"> <div className="max-w-xl w-full"> <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center shadow-2xl"> <div className="flex justify-center mb-6"> <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center"> <CheckCircle className="w-12 h-12 text-green-400" /> </div> </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Thank you for your purchase. Your subscription has been activated
          successfully.
        </p>

        <div className="bg-black/40 border border-gray-800 rounded-2xl p-5 mb-8">
          <p className="text-gray-400 text-sm mb-2">
            Confirmation Email Sent To
          </p>

          <p className="text-cyan-400 font-semibold break-all">
            {customerEmail}
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            Go To Dashboard
          </Link>

          <Link
            href="/"
            className="block w-full py-3 rounded-xl border border-gray-700 hover:bg-gray-800 text-gray-300 transition"
          >
            Back To Home
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Need help? Contact support anytime.
        </p>
      </div>
    </div>
  </div>
);

}
}
