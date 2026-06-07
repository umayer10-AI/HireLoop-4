"use client";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession()
  const user = session?.user
  // console.log(user)

  const pathname = usePathname();

  const navLinks = [
    {
      name: "Browse Jobs",
      path: "/jobs",
    },
    {
      name: "Company",
      path: "/company",
    },
    {
      name: "Pricing",
      path: "/plans",
    },
  ];

  const a = async () => {
    await authClient.signOut()
    toast.error('User Logout',
              {
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              }
            );
  }

  return (
    <nav className="w-full px-4 py-4 lg:sticky lg:top-0 lg:z-50">
      <div className="lg:max-w-[80%] mx-auto">
        
        <div className="flex items-center justify-between backdrop-blur-md bg-[#181818]/60 border border-gray-800 rounded-2xl px-4 md:px-6 py-3">

          <Link href="/" className="flex items-center gap-2">

            <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 font-bold rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl"
              >
                H
            </motion.div>

            <div>

              <h2 className="text-2xl bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold leading-none">HireLoop</h2>

            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-gray-300">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`border-b-2 transition font-semibold ${
                  pathname === item.path
                    ? "bg-linear-to-r from-purple-500 py-1 px-4 rounded-xl to-pink-500 text-center text-white"
                    : "border-transparent hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}



            <div className="flex items-center gap-8 border-l-2 border-l-gray-700 pl-7">
                {

                  user? 
                  <div className="flex items-center gap-5">
                    <h2>Hi, {user?.name?.split(" ")[0]}</h2>
                    <Dropdown triggerMode="hover">
  
                <Dropdown.Trigger>
                  <Avatar size="sm" aria-label="Menu" className="cursor-pointer">
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover>
                  <Dropdown.Menu
                  >
                    <Dropdown.Item id="new-file">
                      <Label>Profile</Label>
                    </Dropdown.Item>

                    <Dropdown.Item onClick={a}
                      id="delete-file"
                      variant="danger"
                    >
                      <Label onClick={async() => await authClient.signOut()}>Log Out</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>

              </Dropdown>
                    </div>
                :
                    <Link
                        href="/signin"
                        className={`transition font-medium ${
                          pathname === "/signin"
                            ? "bg-linear-to-r from-purple-500 py-1 px-4 rounded-xl to-pink-500 text-center text-white"
                            : "text-purple-400 hover:text-purple-300"
                        }`}
                      >
                        Sign In
                    </Link>
                
                }
                
                <Link
                    href="/get-started"
                    className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
                  >
                    Get Started
                </Link>
              </div>

            
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 bg-[#141414] border border-gray-800 rounded-2xl p-5 space-y-5 text-gray-300">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block border-b transition ${
                  pathname === item.path
                    ? "bg-linear-to-r from-purple-500 py-2 rounded-2xl to-pink-500 text-center text-white"
                    : "border-transparent hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className={`block font-medium ${
                pathname === "/signin"
                  ? "bg-linear-to-r from-purple-500 py-2 rounded-2xl to-pink-500 text-center text-white"
                  : "text-purple-400"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-white text-black py-2 rounded-xl font-medium"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;