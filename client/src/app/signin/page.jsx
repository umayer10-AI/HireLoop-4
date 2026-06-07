"use client";
import { authClient } from "@/lib/auth-client";
// import { Chrome } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {

  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/'
  const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            rememberMe: true,
            // callbackURL: "/",
        });

        if(data){
            toast.success('Login Successfully',
              {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );
            router.push(redirectTo)
        }
        if(error){
            toast(`${error.message}`,
              {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );
        }
    }

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
          provider: "google",
        });
    }

  return (
    <div className="flex items-center justify-center bg-black px-4 py-5">

      <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(a)} className="space-y-5">


          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-3">
          <div className="flex-1 h-[1px] bg-gray-700"></div>

          <span className="text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-purple-400 font-semibold hover:text-purple-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;