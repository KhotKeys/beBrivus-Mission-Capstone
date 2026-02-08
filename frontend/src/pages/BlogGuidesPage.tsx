import React from "react";
import { Layout } from "../components/layout";
import { BookOpen, FileText, Video } from "lucide-react";

export const BlogGuidesPage: React.FC = () => {
  const guides = [
    {
      title: "The Ultimate Scholarship Application Guide",
      category: "Guide",
      description: "A comprehensive step-by-step guide to crafting winning scholarship applications.",
      readTime: "15 min read"
    },
    {
      title: "Top 10 Scholarships for International Students 2026",
      category: "Blog",
      description: "Discover the most prestigious and well-funded scholarships available this year.",
      readTime: "8 min read"
    },
    {
      title: "How to Write a Compelling Personal Statement",
      category: "Guide",
      description: "Expert tips and examples for creating personal statements that stand out.",
      readTime: "12 min read"
    },
    {
      title: "Interview Preparation Masterclass",
      category: "Video Guide",
      description: "Video series covering common interview questions and best practices.",
      readTime: "45 min watch"
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
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Blog & Guides
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600">
              Expert insights and resources to guide your scholarship journey
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {guide.category === "Video Guide" ? (
                    <Video className="w-6 h-6 text-error-600 mr-2" />
                  ) : guide.category === "Guide" ? (
                    <FileText className="w-6 h-6 text-primary-600 mr-2" />
                  ) : (
                    <BookOpen className="w-6 h-6 text-success-600 mr-2" />
                  )}
                  <span className="text-sm font-semibold text-secondary-600">{guide.category}</span>
                  <span className="ml-auto text-sm text-secondary-500">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{guide.title}</h3>
                <p className="text-secondary-700 mb-4">{guide.description}</p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Read More →
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Want More Resources?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Premium members get access to our complete library of guides, templates, and video tutorials
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
            >
              Unlock Premium Content
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
