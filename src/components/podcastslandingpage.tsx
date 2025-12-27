import { useRef, useState } from "react";
import { NavButton } from "./NavBtn";
import { PodcastCard } from "./PodcastCard";
import type { PodcastCardProps } from "./PodcastCard";

export function PodcastLandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Podcast data
  const podcasts: PodcastCardProps[] = [
    {
      id: 1,
      title: 'Press CTRL + C for Creativity : Podcast with Rajeev Mehta ',
      originalPrice: 1999,
      offerPrice: 199,
      coverImage: '/imgs/IMG_1541.PNG',
      bottomtext:' A secret podcast for designers'
    },
    // {
    //   id: 2,
    //   title: 'CTRL+C FOR CREATIVITY ',
    //   originalPrice: 1999,
    //   offerPrice: 199,
    //   coverImage: '/imgs/IMG_1541.PNG',
    //   bottomtext:' A secret podcast for designers'
    // },
    // {
    //   id: 3,
    //   title: 'CTRL+C FOR CREATIVITY ',
    //   originalPrice: 1999,
    //   offerPrice: 199,
    //   coverImage: '/imgs/IMG_1541.PNG',
    //   bottomtext:' A secret podcast for designers'
    // },
    // {
    //   id: 4,
    //   title: 'CTRL+C FOR CREATIVITY ',
    //   originalPrice: 1999,
    //   offerPrice: 199,
    //   coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop'
    // },
    // {
    //   id: 5,
    //   title: 'CTRL+C FOR CREATIVITY ',
    //   originalPrice: 1999,
    //   offerPrice: 199,
    //   coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    // },
    // {
    //   id: 6,
    //   title: 'CTRL+C FOR CREATIVITY ',
    //   originalPrice: 1999,
    //   offerPrice: 199,
    //   coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop'
    // }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white px-4 md:px-24">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto py-12 ">
        
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Upcoming Podcasts
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Card Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-16 left-0 flex items-center gap-3">
            <NavButton
              direction="left"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            />
            <NavButton
              direction="right"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            />
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="snap-start">
                <PodcastCard {...podcast} />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator for Desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Use arrow buttons or swipe to navigate</span>
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}