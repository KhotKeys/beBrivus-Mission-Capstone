import React from "react";
import { Layout } from "../components/layout";
import { Target, Heart, TrendingUp, Users } from "lucide-react";

export const OurMissionPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12 sm:py-16 lg:py-20 relative overflow-x-hidden">
        {/* Animated dotted background */}
        <div className="absolute inset-0 opacity-35 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          animation: 'moveDots 20s linear infinite'
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Our Mission
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600">
              Democratizing access to global opportunities
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <p className="text-xl text-secondary-700 leading-relaxed font-semibold mb-6">
                At beBrivus, we believe that talent is universal, but opportunity is not. Our mission is to change that.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Every year, billions of dollars in scholarships, internships, and fellowships go unclaimed—not because there aren't deserving candidates, but because talented students simply don't know these opportunities exist or lack the guidance to apply successfully.
              </p>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  What We Stand For
                </h2>
              </div>
              <div className="space-y-4 ml-0 sm:ml-16">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">Equal Access</h3>
                  <p className="text-secondary-700">
                    We're committed to making global opportunities discoverable and accessible to students from all backgrounds, regardless of their resources or connections.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">Empowerment Through Technology</h3>
                  <p className="text-secondary-700">
                    By combining AI-powered recommendations with human expertise, we empower students to find and pursue opportunities that align with their goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">Community & Support</h3>
                  <p className="text-secondary-700">
                    We believe in the power of community. Through mentorship and peer support, we help students navigate complex application processes with confidence.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-success-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Our Goals
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-secondary-700 ml-0 sm:ml-16">
                <li>Help 100,000 students secure life-changing opportunities by 2030</li>
                <li>Build the world's most comprehensive database of global opportunities</li>
                <li>Create a thriving community of successful fellows who support each other</li>
                <li>Partner with institutions to make opportunities more accessible</li>
                <li>Continuously innovate to reduce barriers to global education</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-warning-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  How We Make It Happen
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 sm:ml-16">
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="font-bold text-secondary-900 mb-2">Technology</h3>
                  <p className="text-secondary-700 text-sm">
                    Advanced AI algorithms match students with opportunities tailored to their profiles and goals.
                  </p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="font-bold text-secondary-900 mb-2">Mentorship</h3>
                  <p className="text-secondary-700 text-sm">
                    Connect with successful scholarship recipients who provide personalized guidance.
                  </p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="font-bold text-secondary-900 mb-2">Resources</h3>
                  <p className="text-secondary-700 text-sm">
                    Access comprehensive guides, templates, and tools to strengthen your applications.
                  </p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="font-bold text-secondary-900 mb-2">Community</h3>
                  <p className="text-secondary-700 text-sm">
                    Join a supportive network of ambitious peers pursuing similar goals.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Join Us in Our Mission
              </h2>
              <p className="text-secondary-700 leading-relaxed mb-6">
                Whether you're a student seeking opportunities, a mentor willing to give back, or an organization looking to reach talented candidates, we invite you to be part of our movement to democratize access to global opportunities.
              </p>
              <a
                href="/register"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Started Today
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
