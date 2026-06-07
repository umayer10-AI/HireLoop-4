"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdWork,
  MdBusiness,
  MdSettings,
} from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const menus = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: MdDashboard,
    },
    {
      label: "My Company",
      path: "/dashboard/company",
      icon: MdBusiness,
    },
    {
      label: "Manage Jobs",
      path: "/dashboard/manage",
      icon: MdWork,
    },
    {
      label: "Applications",
      path: "/dashboard/application",
      icon: FaFileAlt,
    },
    {
      label: "Settings",
      path: "/dashboard/setting",
      icon: MdSettings,
    },
  ];

  return (
    <aside className="w-72 h-screen bg-[#121212] border-r border-gray-800 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          HireLoop
        </h1>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">Alex Sterling</h3>
          <p className="text-xs text-gray-400">Recruiter</p>

          <span className="inline-block mt-1 text-[10px] px-2 py-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white">
            PREMIUM
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menus.map((menu) => (
          <NavItem
            key={menu.path}
            label={menu.label}
            href={menu.path}
            icon={menu.icon}
            active={pathname === menu.path}
          />
        ))}
      </nav>
    </aside>
  );
};

const NavItem = ({ label, href, icon: Icon, active }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
        active
          ? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
          : "text-gray-300 hover:bg-[#1f1f1f] hover:text-white"
      }`}
    >
      <Icon size={22} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default Sidebar;