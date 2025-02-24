import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      {/* Header Section */}
      <div className="bg-blue-100 p-6 mb-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Privacy Policy for JackInfo Soft LLP
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Introduction</h2>
        <p className="text-gray-700">
          At JackInfo Soft LLP, we value your privacy and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and safeguard your
          information as a service provider company.
        </p>
      </section>

      {/* Information We Collect Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">
            <strong>Personal Information:</strong> When you contact us or use our services, you may
            provide personal details such as your name, email address, phone number, and company name.
          </li>
          <li>
            <strong>Technical Data:</strong> We automatically collect information about your device
            and usage, including your IP address, browser type, and operating system, through cookies
            and similar technologies.
          </li>
        </ul>
      </section>

      {/* How We Use Your Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">
            <strong>Service Delivery:</strong> To provide, maintain, and improve our services,
            including software development, web solutions, and IT consulting.
          </li>
          <li className="mb-2">
            <strong>Communication:</strong> To respond to your inquiries, send you updates, and inform
            you about our services and promotions.
          </li>
          <li>
            <strong>Analysis:</strong> To analyze usage trends and enhance the user experience on our
            website and services.
          </li>
        </ul>
      </section>

      {/* Data Sharing and Disclosure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Data Sharing and Disclosure</h2>
        <p className="text-gray-700">
          As a service provider, we do not sell or rent your personal information to third parties. We
          may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">
            <strong>With Service Providers:</strong> We may engage third-party service providers to
            assist us in delivering our services, who are obligated to protect your information.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information if required by law or
            to comply with legal processes.
          </li>
        </ul>
      </section>

      {/* Data Security Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Data Security</h2>
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to protect your personal
          information from unauthorized access, loss, or misuse. However, no method of transmission
          over the internet or method of electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      {/* Your Rights Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Your Rights</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">
            You have the right to access, update, or delete your personal information.
          </li>
          <li className="mb-2">
            Opt out of receiving marketing communications from us.
          </li>
          <li>
            Withdraw your consent at any time where we are relying on your consent to process your
            personal information.
          </li>
        </ul>
      </section>

      {/* Changes to This Privacy Policy Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated effective date. We encourage you to review this policy periodically to
          stay informed about how we are protecting your information.
        </p>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Contact Us</h2>
        <p className="text-gray-700 mb-2">
          If you have any questions or concerns about this Privacy Policy or our practices regarding
          your personal information, please contact us at:
        </p>
        <address className="not-italic text-gray-700">
          <p>JackInfo Soft LLP</p>
          <p>Elish Bridge, M.J. Library near by Medicare Center</p>
          <p>Ahmedabad, Gujarat, 380006</p>
          <p>Email: <a href="mailto:mail@jackinfosoft.com" className="text-blue-600 underline">mail@jackinfosoft.com</a></p>
          <p>Phone: +91 7791819490</p>
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
