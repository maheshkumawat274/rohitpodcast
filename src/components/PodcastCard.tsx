export interface PodcastCardProps {
  id: number;
  title: string;
  originalPrice: number;
  offerPrice: number;
  coverImage: string;
  bottomtext: string;
}

// Podcast Card Component
export const PodcastCard = ({
  title,
  originalPrice,
  offerPrice,
  coverImage,
  bottomtext,
}: PodcastCardProps) => {
  return (
    <div className="group relative flex-shrink-0 w-[280px] md:w-[450px]">
      {/* Glassmorphism Card */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-400/10 to-emerald-900/5 backdrop-blur-xl border border-emerald-400/10 shadow-2xl transition-all duration-500 hover:shadow-emerald-500/30 hover:border-emerald-400/30">

        {/* Cover Image Section */}
        <div className="relative overflow-hidden h-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-emerald-900/30 to-transparent z-20" />
        </div>

        {/* Content Section */}
        <div className="p-5 md:p-6">
          {/* Title */}
          <h3 className="text-white text-lg md:text-xl font-semibold mb-4 leading-tight">
            {title}
          </h3>

          {/* Price Row */}
          <div className="flex items-center justify-between mb-2">
            
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm line-through">
                ₹{originalPrice}
              </span>
              <span className="text-emerald-300 text-lg md:text-xl font-bold">
                ₹{offerPrice}
              </span>
            </div>
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              Exclusive Podcasts
            </span>
          </div>

          {/* Info Line */}
          <p className="text-gray-400 text-xs mb-5">
            {bottomtext}
          </p>

          {/* CTA */}
          <a
            href="https://topmate.io/therohitprashar/1861938"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center relative group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 rounded-xl blur opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <div className="relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 rounded-xl font-semibold text-white text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer">
              Enroll Now
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
