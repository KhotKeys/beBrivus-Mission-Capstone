import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "/education.jpeg",
}) => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden bg-cover bg-center sm:bg-bottom bg-no-repeat bg-scroll sm:bg-fixed min-h-[320px] sm:min-h-[400px]"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 100%), url('${backgroundImage}')`,
      }}
    >
      {/* Creative Blur & Mesh Overlay Layer */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
          `,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      ></div>

      {/* Enhanced Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/40 pointer-events-none"></div>

      {/* Decorative Elements for Creativity */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center min-h-80">
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
