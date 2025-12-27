import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <section className="bg-black text-gray-300 py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 leading-relaxed">
            These Terms & Conditions govern your access to and use of
            rohitprashar.com. By using this website, you agree to comply with
            and be bound by the terms outlined below.
          </p>
        </div>

        {/* Acceptance */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Acceptance of Terms
          </h2>
          <p className="leading-relaxed">
            By accessing or using this website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms & Conditions.
            If you do not agree with any part of these terms, you must not use
            this website.
          </p>
        </div>

        {/* Website Use */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Use of Website
          </h2>
          <p className="leading-relaxed">
            This website is intended to provide information about services,
            content, and professional offerings by Rohit Prashar. You agree to
            use the website only for lawful purposes and in a manner that does
            not violate any applicable laws or regulations.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>No misuse, hacking, or data extraction</li>
            <li>No posting of offensive or unlawful content</li>
            <li>No attempt to disrupt website functionality</li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Intellectual Property Rights
          </h2>
          <p className="leading-relaxed">
            All content available on rohitprashar.com including text, graphics,
            images, logos, designs, and code is the intellectual property of
            Rohit Prashar unless otherwise stated.
          </p>
          <p className="leading-relaxed">
            You may not copy, reproduce, distribute, modify, or republish any
            content from this website without prior written permission.
          </p>
        </div>

        {/* User Submissions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            User Submissions
          </h2>
          <p className="leading-relaxed">
            Any information submitted through the contact form must be accurate
            and genuine. By submitting information, you grant permission to
            Rohit Prashar to use it solely for communication and service-related
            purposes.
          </p>
        </div>

        {/* Third Party Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Third-Party Links
          </h2>
          <p className="leading-relaxed">
            This website may contain links to third-party websites for reference
            or convenience. Rohit Prashar does not control or endorse these
            websites and is not responsible for their content, policies, or
            practices.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            Rohit Prashar shall not be liable for any direct, indirect,
            incidental, or consequential damages arising out of your use or
            inability to use this website.
          </p>
        </div>

        {/* Termination */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Termination of Access
          </h2>
          <p className="leading-relaxed">
            We reserve the right to restrict or terminate access to this website
            without prior notice if these Terms & Conditions are violated.
          </p>
        </div>

        {/* Governing Law */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>
          <p className="leading-relaxed">
            If you have any questions regarding these Terms & Conditions, you
            may contact us at{" "}
            <span className="text-white font-medium">
              info@rohitprashar.in
            </span>.
          </p>
        </div>

        {/* Footer Note */}
        <div className="pt-10 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            These Terms & Conditions may be updated at any time without prior
            notice. Continued use of the website indicates acceptance of the
            updated terms.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsConditions;
