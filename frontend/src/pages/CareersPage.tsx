import React from "react";
import { Layout } from "../components/layout";
import { Briefcase, TrendingUp, Users, Heart } from "lucide-react";

export const CareersPage: React.FC = () => {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "AI/ML",
      location: "Remote",
      type: "Full-time"
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Careers at beBrivus
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join our mission to democratize access to global opportunities and help students achieve their dreams
            </p>
          </div>

          {/* Why Join Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Why Work at beBrivus?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Meaningful Impact</h3>
                <p className="text-secondary-700">
                  Help thousands of students access life-changing opportunities every day
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Growth Opportunities</h3>
                <p className="text-secondary-700">
                  Develop your skills in a fast-paced, innovative environment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-warning-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Amazing Team</h3>
                <p className="text-secondary-700">
                  Work with talented, passionate people from around the world
                </p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-secondary-600">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-success-600 rounded-full mr-2"></span>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-warning-600 rounded-full mr-2"></span>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Competitive Salary & Equity</h3>
                  <p className="text-secondary-700 text-sm">Industry-leading compensation with equity options</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Health & Wellness</h3>
                  <p className="text-secondary-700 text-sm">Comprehensive health, dental, and vision coverage</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Flexible Work</h3>
                  <p className="text-secondary-700 text-sm">Remote-first culture with flexible hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Professional Development</h3>
                  <p className="text-secondary-700 text-sm">Learning budget and conference attendance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Unlimited PTO</h3>
                  <p className="text-secondary-700 text-sm">Take time off when you need it</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-success-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Home Office Setup</h3>
                  <p className="text-secondary-700 text-sm">Budget for your ideal workspace</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're always looking for talented people. Send us your resume!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
