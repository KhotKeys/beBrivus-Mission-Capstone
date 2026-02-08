import React, { useState } from "react";
import { Layout } from "../components/layout";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is beBrivus?",
          a: "beBrivus is a comprehensive platform that helps students discover and apply for scholarships, internships, and fellowship opportunities worldwide. We provide AI-powered recommendations, expert mentorship, application tracking, and community support to maximize your chances of success."
        },
        {
          q: "How do I create an account?",
          a: "Click the 'Register' button on the homepage and fill out the registration form with your basic information. Once registered, complete your profile to receive personalized opportunity recommendations."
        },
        {
          q: "Is beBrivus free to use?",
          a: "Yes! beBrivus offers a free tier with access to our opportunity database, application tracker, and community forum. We also offer premium features including unlimited AI coach sessions and priority mentor matching."
        }
      ]
    },
    {
      category: "Finding Opportunities",
      questions: [
        {
          q: "How does the AI recommendation system work?",
          a: "Our AI analyzes your profile, academic background, interests, and career goals to match you with relevant opportunities. The more complete your profile, the better the recommendations."
        },
        {
          q: "How often are new opportunities added?",
          a: "We add new opportunities weekly and update existing ones daily to ensure you have access to the latest information and deadlines."
        },
        {
          q: "Can I search for opportunities in specific countries?",
          a: "Absolutely! Use our advanced filters to search by country, field of study, degree level, funding amount, and more."
        }
      ]
    },
    {
      category: "Applications",
      questions: [
        {
          q: "How does the application tracker work?",
          a: "The application tracker helps you organize all your applications in one place. You can track deadlines, upload documents, monitor application status, and receive reminders for upcoming deadlines."
        },
        {
          q: "Can I apply to opportunities directly through beBrivus?",
          a: "beBrivus provides all the information and tools you need, but applications are submitted directly to the opportunity providers through their official channels. We provide direct links and guidance for each application."
        },
        {
          q: "What documents do I typically need for applications?",
          a: "Common documents include: CV/resume, personal statement, letters of recommendation, transcripts, proof of enrollment, and sometimes research proposals or portfolios. Requirements vary by opportunity."
        }
      ]
    },
    {
      category: "Mentorship",
      questions: [
        {
          q: "How do I connect with a mentor?",
          a: "Browse our mentor directory and request sessions with mentors whose expertise aligns with your goals. You can filter by field, scholarship type, and availability."
        },
        {
          q: "Are mentors qualified?",
          a: "All our mentors are verified successful scholarship recipients, admissions professionals, or industry experts with proven track records in guiding applicants."
        },
        {
          q: "How many mentorship sessions can I book?",
          a: "Free users can book 2 sessions per month. Premium users have unlimited access to mentorship sessions."
        }
      ]
    },
    {
      category: "AI Coach",
      questions: [
        {
          q: "What can the AI coach help me with?",
          a: "The AI coach can help you brainstorm essay topics, provide feedback on your writing, prepare for interviews, answer questions about opportunities, and offer personalized advice throughout your application journey."
        },
        {
          q: "Is my conversation with the AI coach private?",
          a: "Yes, all conversations are private and encrypted. We never share your personal information or application materials."
        },
        {
          q: "How accurate is the AI coach?",
          a: "Our AI is trained on thousands of successful applications and continuously learns from expert feedback. While it's a powerful tool, we recommend combining AI guidance with mentor feedback for best results."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          q: "How do I upgrade to premium?",
          a: "Click on your profile, navigate to Settings, and select the Premium plan. You can choose monthly or annual billing."
        },
        {
          q: "Can I cancel my premium subscription?",
          a: "Yes, you can cancel anytime from your account settings. You'll retain premium access until the end of your billing period."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions."
        }
      ]
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-secondary-600">
              Find answers to common questions about beBrivus
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="border border-neutral-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-semibold text-secondary-900 pr-4">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-secondary-700 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Still Have Questions?
            </h2>
            <p className="text-primary-100 mb-6">
              Our support team is here to help you succeed
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
