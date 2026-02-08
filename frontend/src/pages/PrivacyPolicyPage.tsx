import React from "react";
import { Layout } from "../components/layout";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-secondary-600">
              Last Updated: January 26, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-secondary-700 leading-relaxed">
                At beBrivus, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Information We Collect
                </h2>
              </div>
              
              <div className="space-y-4 ml-0 sm:ml-16">
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-secondary-700">
                    <li>Name, email address, and contact information</li>
                    <li>Educational background and academic records</li>
                    <li>Professional experience and career goals</li>
                    <li>Profile pictures and biographical information</li>
                    <li>Application materials and documents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Usage Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-secondary-700">
                    <li>Browser type, device information, and IP address</li>
                    <li>Pages visited, features used, and time spent on platform</li>
                    <li>Search queries and opportunity interactions</li>
                    <li>Communication preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Cookies and Tracking Technologies
                  </h3>
                  <p className="text-secondary-700">
                    We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-success-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  How We Use Your Information
                </h2>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-0 sm:ml-16">
                <li>Provide personalized opportunity recommendations</li>
                <li>Connect you with mentors and other users</li>
                <li>Process your applications and track submissions</li>
                <li>Send relevant notifications and updates</li>
                <li>Improve our services and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations and enforce our policies</li>
                <li>Communicate important announcements and changes</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-warning-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Information Sharing and Disclosure
                </h2>
              </div>
              
              <div className="space-y-4 ml-0 sm:ml-16">
                <p className="text-secondary-700">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-secondary-700">
                  <li><strong>With Mentors:</strong> When you request mentorship or participate in mentoring sessions</li>
                  <li><strong>With Opportunity Providers:</strong> When you apply to scholarships, internships, or fellowships</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in platform operations (e.g., hosting, analytics, email services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights, safety, and security</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize information sharing</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-error-100 rounded-xl flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-error-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Data Security
                </h2>
              </div>
              
              <div className="space-y-4 ml-0 sm:ml-16">
                <p className="text-secondary-700">
                  We implement industry-standard security measures to protect your information:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-secondary-700">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>

                <p className="text-secondary-700">
                  While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Your Privacy Rights
              </h2>
              
              <div className="space-y-4">
                <p className="text-secondary-700">
                  Depending on your location, you may have the following rights:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-secondary-700">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restrict Processing:</strong> Limit how we use your information</li>
                  <li><strong>Object:</strong> Object to certain data processing activities</li>
                </ul>

                <p className="text-secondary-700">
                  To exercise these rights, please contact us at <a href="mailto:privacy@bebrivus.com" className="text-primary-600 hover:text-primary-700 font-semibold">privacy@bebrivus.com</a>
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Data Retention
              </h2>
              
              <p className="text-secondary-700">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will remove or anonymize your personal information within 30 days, except where required by law.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                International Data Transfers
              </h2>
              
              <p className="text-secondary-700">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Children's Privacy
              </h2>
              
              <p className="text-secondary-700">
                Our platform is not intended for users under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              
              <p className="text-secondary-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our platform and updating the "Last Updated" date. Your continued use of beBrivus after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">
                  Contact Us
                </h2>
              </div>
              
              <div className="space-y-2 text-secondary-700">
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <ul className="space-y-1">
                  <li><strong>Email:</strong> <a href="mailto:privacy@bebrivus.com" className="text-primary-600 hover:text-primary-700">privacy@bebrivus.com</a></li>
                  <li><strong>Address:</strong> beBrivus Inc., 123 Education Street, Suite 100, San Francisco, CA 94105</li>
                  <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
