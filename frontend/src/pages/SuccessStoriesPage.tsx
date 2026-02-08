import React from "react";
import { Layout } from "../components/layout";
import { Award, GraduationCap, Globe, Star, TrendingUp } from "lucide-react";

export const SuccessStoriesPage: React.FC = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      achievement: "Rhodes Scholar",
      university: "Oxford University",
      field: "International Relations",
      story: "Through beBrivus, I discovered the Rhodes Scholarship and received invaluable mentorship that helped me craft a compelling application. The platform's AI recommendations matched me with mentors who had walked the same path.",
      image: "SJ",
      year: "2025"
    },
    {
      name: "David Chen",
      achievement: "Fulbright Scholar",
      university: "MIT",
      field: "Computer Science",
      story: "The application tracking feature kept me organized throughout the entire process. I applied to 15 opportunities and secured 3 offers, including the Fulbright to conduct AI research in Germany.",
      image: "DC",
      year: "2024"
    },
    {
      name: "Maria Garcia",
      achievement: "Gates Cambridge Scholar",
      university: "University of Cambridge",
      field: "Public Health",
      story: "beBrivus connected me with mentors who provided critical feedback on my research proposal. The community forum was instrumental in helping me understand what Cambridge was looking for.",
      image: "MG",
      year: "2025"
    },
    {
      name: "James Williams",
      achievement: "Schwarzman Scholar",
      university: "Tsinghua University",
      field: "Global Affairs",
      story: "The AI coach helped me refine my personal statement through multiple iterations. I was accepted into the Schwarzman Scholars program and am now studying in Beijing.",
      image: "JW",
      year: "2024"
    },
    {
      name: "Aisha Patel",
      achievement: "Marshall Scholar",
      university: "London School of Economics",
      field: "Economics",
      story: "The resources library on beBrivus had everything I needed - from essay templates to interview preparation guides. I'm now pursuing my Master's at LSE on a full scholarship.",
      image: "AP",
      year: "2025"
    },
    {
      name: "Michael O'Brien",
      achievement: "Knight-Hennessy Scholar",
      university: "Stanford University",
      field: "Education Policy",
      story: "beBrivus made the overwhelming scholarship search process manageable. The platform's filters helped me find opportunities I never would have discovered on my own.",
      image: "MO",
      year: "2024"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12 sm:py-16 lg:py-20 relative overflow-x-hidden">
        {/* Animated dotted background */}
        <div className="absolute inset-0 opacity-35 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          animation: 'moveDots 20s linear infinite'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Success Stories
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto px-2 sm:px-0">
              Real stories from beBrivus fellows who transformed their dreams into reality
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-1 sm:mb-2">92%</div>
              <div className="text-xs sm:text-sm text-secondary-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-1 sm:mb-2">3,500+</div>
              <div className="text-xs sm:text-sm text-secondary-600">Scholarships Won</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-warning-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-1 sm:mb-2">85+</div>
              <div className="text-xs sm:text-sm text-secondary-600">Countries</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary-600" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-1 sm:mb-2">$450M+</div>
              <div className="text-xs sm:text-sm text-secondary-600">Total Funding</div>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4 flex-shrink-0">
                    {story.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-secondary-900 break-words">{story.name}</h3>
                    <div className="flex items-center text-warning-600 mb-1 flex-wrap">
                      <Star className="w-4 h-4 mr-1 fill-current flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">{story.achievement}</span>
                    </div>
                    <p className="text-secondary-600 text-sm">{story.university}</p>
                    <p className="text-secondary-500 text-xs sm:text-sm">{story.field} • Class of {story.year}</p>
                  </div>
                </div>
                <p className="text-secondary-700 leading-relaxed italic text-sm sm:text-base">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of successful fellows who found their dream opportunities through beBrivus
            </p>
            <a
              href="/register"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors text-sm sm:text-base"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
