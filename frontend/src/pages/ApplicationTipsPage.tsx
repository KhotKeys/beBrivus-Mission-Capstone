import React from "react";
import { Layout } from "../components/layout";
import { Lightbulb, CheckCircle, FileText, Users, Clock, Target } from "lucide-react";

export const ApplicationTipsPage: React.FC = () => {
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Application Tips
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600">
              Expert advice to maximize your scholarship and fellowship success
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Start Early and Plan Strategically
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-0 sm:ml-16">
                <li>Begin research at least 6-12 months before deadlines</li>
                <li>Create a calendar with all important dates and milestones</li>
                <li>Allocate time for each application component</li>
                <li>Build in buffer time for unexpected delays</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-success-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Craft a Compelling Personal Statement
                </h2>
              </div>
              <div className="space-y-4 ml-0 sm:ml-16">
                <div className="bg-success-50 border-l-4 border-success-500 p-4 rounded">
                  <h3 className="font-semibold text-success-900 mb-2">Do:</h3>
                  <ul className="list-disc list-inside space-y-1 text-success-800">
                    <li>Tell your unique story with specific examples</li>
                    <li>Connect your experiences to future goals</li>
                    <li>Show passion and genuine interest</li>
                    <li>Tailor each statement to the specific opportunity</li>
                    <li>Get feedback from mentors and peers</li>
                  </ul>
                </div>
                <div className="bg-error-50 border-l-4 border-error-500 p-4 rounded">
                  <h3 className="font-semibold text-error-900 mb-2">Don't:</h3>
                  <ul className="list-disc list-inside space-y-1 text-error-800">
                    <li>Use generic or clichéd language</li>
                    <li>Simply list achievements without context</li>
                    <li>Exceed word limits or ignore formatting guidelines</li>
                    <li>Submit without thorough proofreading</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-warning-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Secure Strong Letters of Recommendation
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-0 sm:ml-16">
                <li>Choose recommenders who know you well and can speak to your strengths</li>
                <li>Ask at least 2-3 months before the deadline</li>
                <li>Provide recommenders with your CV, personal statement, and opportunity details</li>
                <li>Follow up politely and send thank-you notes</li>
                <li>Ensure recommenders understand what the scholarship values</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Prepare for Interviews
                </h2>
              </div>
              <div className="space-y-4 ml-0 sm:ml-16">
                <p className="text-secondary-700">
                  If you advance to the interview stage, preparation is key:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-700">
                  <li>Research the organization and its values thoroughly</li>
                  <li>Practice common interview questions with a mentor</li>
                  <li>Prepare thoughtful questions to ask interviewers</li>
                  <li>Conduct mock interviews to build confidence</li>
                  <li>Dress professionally and test technology in advance (for virtual interviews)</li>
                  <li>Be authentic and let your personality shine</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Master Time Management
                </h2>
              </div>
              <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg ml-0 sm:ml-16">
                <h3 className="font-semibold text-primary-900 mb-3">Application Timeline Template:</h3>
                <div className="space-y-2 text-primary-800">
                  <p><strong>6-12 months before:</strong> Research opportunities, identify mentors</p>
                  <p><strong>4-6 months before:</strong> Request recommendation letters, draft essays</p>
                  <p><strong>2-3 months before:</strong> Finalize essays, gather documents</p>
                  <p><strong>1 month before:</strong> Review, proofread, submit</p>
                  <p><strong>After submission:</strong> Prepare for potential interviews</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-success-50 to-primary-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Pro Tips from Successful Applicants
              </h2>
              <ul className="space-y-3 text-secondary-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Be specific:</strong> Use concrete examples and quantifiable achievements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Show impact:</strong> Demonstrate how you've made a difference</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Be authentic:</strong> Let your genuine passion and personality come through</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Apply broadly:</strong> Don't limit yourself to just one opportunity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Learn from rejection:</strong> Each application is a learning experience</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
