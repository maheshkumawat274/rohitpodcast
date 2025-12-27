// Navigation Button Component
import { cn } from "../lib/utils";

interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

export const NavButton = ({ direction, onClick, disabled }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl",
        // Base glass + green tint
        "bg-gradient-to-br from-emerald-400/10 to-emerald-900/5 backdrop-blur-xl",
        "border border-emerald-400/10 transition-all duration-300",
        // Hover state (green glow)
        "hover:bg-gradient-to-br hover:from-emerald-400/20 hover:to-emerald-900/10",
        "hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/30",
        // Disabled
        "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100",
        // Active
        "active:scale-95"
      )}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        className={cn(
          "w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300",
          "group-hover:scale-110"
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {direction === "left" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        )}
      </svg>
    </button>
  );
};
