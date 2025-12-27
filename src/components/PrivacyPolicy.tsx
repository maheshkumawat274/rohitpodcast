import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-black text-gray-300 py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="text-gray-400 leading-relaxed">
            This Privacy Policy explains how Rohit Prashar collects, uses, and
            protects your information when you visit or interact with
            rohitprashar.com.
          </p>
        </div>

        {/* Scope */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Scope of This Policy
          </h2>
          <p className="leading-relaxed">
            This privacy policy applies only to rohitprashar.com. Any external
            websites or third-party links accessible through this website are
            governed by their respective privacy policies and terms of use.
            Rohit Prashar is not responsible for the privacy practices of such
            external websites.
          </p>
        </div>

        {/* Information Collection */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Information Collected by the Website
          </h2>
          <p className="leading-relaxed">
            We collect information solely through the Contact Form available on
            this website. The information provided by users may include name,
            email address, phone number, and message content. This information
            is voluntarily submitted by the user for communication purposes.
          </p>
          <p className="leading-relaxed">
            All data is stored and processed in India and handled in compliance
            with applicable laws and regulations.
          </p>
        </div>

        {/* Cookies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Cookies and Tracking Technologies
          </h2>
          <p className="leading-relaxed">
            This website may use cookies and similar tracking technologies to
            enhance user experience and analyze website performance. Cookies do
            not collect personally identifiable information unless explicitly
            provided by the user.
          </p>
          <p className="leading-relaxed">
            Most web browsers allow you to manage or disable cookies through
            their settings. Continued use of the website implies consent to the
            use of cookies.
          </p>
        </div>

        {/* Data Usage */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Use of Collected Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to inquiries submitted via the contact form</li>
            <li>To provide information related to services or collaborations</li>
            <li>To improve website content and user experience</li>
          </ul>
        </div>

        {/* Communication */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Communication & Opt-Out
          </h2>
          <p className="leading-relaxed">
            We may contact users via email or phone based on the information
            submitted through the contact form. Users can opt out of any future
            communication by writing to us at{" "}
            <span className="text-white font-medium">
              info@rohitprashar.in
            </span>.
          </p>
        </div>

        {/* Third Party */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Content
          </h2>
          <p className="leading-relaxed">
            This website may display third-party content, testimonials, or
            references for informational purposes. Rohit Prashar does not
            endorse, control, or take responsibility for the accuracy or
            legality of third-party content.
          </p>
          <p className="leading-relaxed">
            Users agree not to post or submit any offensive, misleading, or
            unlawful content through this website.
          </p>
        </div>

        {/* Copyright */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Copyright & Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All website content including design, text, graphics, images, and
            code is the exclusive property of rohitprashar.com unless stated
            otherwise. Unauthorized copying, reproduction, scraping, or
            redistribution of any content is strictly prohibited without prior
            written permission.
          </p>
        </div>

        {/* Footer Note */}
        <div className="pt-10 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            This Privacy Policy may be updated from time to time. Continued use
            of the website constitutes acceptance of any changes made.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
