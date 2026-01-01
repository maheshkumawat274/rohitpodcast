import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const PodcastHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-gray-800 sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="h-full w-24 overflow-hidden flex items-center pt-3">
          <Link to="/" className="block h-full w-full">
            <img
              src="/imgs/podcastlogo.PNG"
              alt="Podcast Logo"
              className="h-full w-full object-cover scale-200"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          
          {/* EXCLUSIVE - HIGHLIGHTED */}
          <span className="text-emerald-400 text-xl font-semibold relative">
            Exclusive Podcasts
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-emerald-400 rounded" />
          </span>

          {/* UPCOMING */}
          <span className="text-gray-300 text-lg hover:text-emerald-400 transition">
            Upcoming Podcasts
          </span>

          {/* GUEST */}
          <a
            href="https://forms.gle/WwiqSPvndCYQQNUa8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-lg hover:text-emerald-400 transition"
          >
            Guest Suggestion
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-emerald-400 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-5 text-lg">

          {/* EXCLUSIVE */}
          <div className="text-emerald-400 text-xl font-semibold border-b border-gray-700 pb-2">
            Exclusive Podcasts
          </div>

          {/* UPCOMING */}
          <div className="text-gray-300 hover:text-emerald-400 transition">
            Upcoming Podcasts
          </div>

          {/* GUEST */}
          <a
            href="https://forms.gle/WwiqSPvndCYQQNUa8"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-300 hover:text-emerald-400 transition"
          >
            Guest Suggestion
          </a>
        </div>
      )}
    </header>
  );
};

export default PodcastHeader;
