import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      {/* Header Section */}
      <div className="bg-blue-100 p-6 mb-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          About Us - JackInfoSoft LLP
        </h1>
        <p className="text-gray-700 mt-4 text-center">
          Welcome to JackInfoSoft LLP, your trusted partner in innovative IT solutions. Established
          with a vision to empower businesses through technology, we specialize in providing
          cutting-edge software development, web solutions, and IT consulting services tailored to
          meet your unique needs.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h2>
        <p className="text-gray-700">
          At JackInfoSoft, our mission is to harness the power of technology to drive success for our
          clients. We are dedicated to delivering high-quality solutions that enhance efficiency,
          foster growth, and promote innovation.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium">Custom Software Development</h3>
            <p className="text-gray-700">
              We create bespoke software solutions that cater specifically to your business
              requirements, ensuring seamless integration and scalability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Web Development</h3>
            <p className="text-gray-700">
              Our expertise in web technologies allows us to build responsive, user-friendly websites
              that enhance your online presence and engage your audience effectively.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Mobile App Development</h3>
            <p className="text-gray-700">
              We design and develop intuitive mobile applications for both iOS and Android platforms,
              helping you reach your customers wherever they are.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">IT Consulting</h3>
            <p className="text-gray-700">
              Our consultants provide strategic insights and solutions to optimize your IT
              infrastructure, streamline processes, and enhance overall performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Client-Centric Approach: We prioritize your needs and work closely with you throughout the project lifecycle to ensure your vision is realized.</li>
          <li>Expert Team: Our diverse team of developers, designers, and consultants are passionate about technology and dedicated to delivering exceptional results.</li>
          <li>Innovative Solutions: We stay ahead of industry trends, utilizing the latest technologies and methodologies to provide innovative solutions that give you a competitive edge.</li>
          <li>Commitment to Quality: We adhere to the highest quality standards in our work, ensuring that every project is executed with precision and excellence.</li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Join Us on Your Digital Journey</h2>
        <p className="text-gray-700">
          At JackInfoSoft LLP, we believe that technology should empower your business. Let us help
          you navigate the digital landscape and unlock new opportunities for growth. Contact us
          today to discuss how we can collaborate to achieve your goals.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Get in Touch</h2>
        <p className="text-gray-700">
          For inquiries or to learn more about our services, please reach out to us at:
        </p>
        <div className="flex items-center mt-4">
          <span className="mr-2 font-bold">Email:</span>
          <a href="mailto:JACKINFOSOFT@GMAIL.COM" className="text-blue-600 underline">
            JACKINFOSOFT@GMAIL.COM
          </a>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2 font-bold">Phone:</span>
          <a href="tel:+917791819490" className="text-blue-600 underline">
            +91 7791819490
          </a>
        </div>
        <p className="mt-4">
          <strong>Address:</strong> Elish Bridge, M.J. Library near by Medicare Center, Ahmedabad.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
