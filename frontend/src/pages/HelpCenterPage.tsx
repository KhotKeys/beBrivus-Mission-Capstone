import React from "react";
import { Layout } from "../components/layout";
import { LifeBuoy, Search, BookOpen, MessageCircle, Mail } from "lucide-react";

export const HelpCenterPage: React.FC = () => {
  const categories = [
    {
      icon: Search,
      title: "Getting Started",
      description: "Learn the basics of using beBrivus",
      articles: 12
    },
    {
      icon: BookOpen,
      title: "Finding Opportunities",
      description: "How to search and filter opportunities",
      articles: 8
    },
    {
      icon: MessageCircle,
      title: "Mentorship",
      description: "Connect with and learn from mentors",
      articles: 6
    },
    {
      icon: Mail,
      title: "Account & Billing",
      description: "Manage your account and subscription",
      articles: 10
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl">
                <LifeBuoy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Help Center
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600 mb-8">
              Find answers and get support whenever you need it
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">{category.title}</h3>
                  <p className="text-secondary-600 text-sm mb-3">{category.description}</p>
                  <p className="text-primary-600 text-sm font-semibold">{category.articles} articles</p>
                </div>
              );
            })}
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Popular Articles</h2>
            <div className="space-y-4">
              <a href="#" className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors">
                <h3 className="font-semibold text-secondary-900 mb-1">How do I create an account?</h3>
                <p className="text-secondary-600 text-sm">Step-by-step guide to getting started with beBrivus</p>
              </a>
              <a href="#" className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors">
                <h3 className="font-semibold text-secondary-900 mb-1">How does the AI recommendation system work?</h3>
                <p className="text-secondary-600 text-sm">Learn about our personalized opportunity matching</p>
              </a>
              <a href="#" className="block p-4 hover:bg-neutral-50 rounded-lg transition-colors">
                <h3 className="font-semibold text-secondary-900 mb-1">How do I connect with a mentor?</h3>
                <p className="text-secondary-600 text-sm">Find and book sessions with expert mentors</p>
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Still Need Help?</h3>
              <p className="text-primary-100 mb-6">
                Our support team is ready to assist you with any questions
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Support
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">Browse All Topics</h3>
              <p className="text-secondary-700 mb-6">
                Explore our complete knowledge base for detailed guides and tutorials
              </p>
              <a
                href="/faq"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
