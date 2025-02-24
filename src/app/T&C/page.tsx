import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to JackInfoSoft IT Solutions! By accessing or using our services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our website, services, or engaging in any contractual agreement with us. These terms form a legally binding agreement between you (the &quot;Client&quot;) and JackInfoSoft IT Solutions (the &quot;Company&quot;).
        </p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. General Information</h2>
            <p className="text-gray-600">
              JackInfoSoft IT Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;the Company&quot;) is a provider of information technology services, including but not limited to IT consulting, software development, web design, system integration, managed IT services, and other related services. These Terms and Conditions apply to all services provided by JackInfoSoft IT Solutions, and by using our services, you acknowledge and agree to the following terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
            <p className="text-gray-600 mb-3">
              JackInfoSoft IT Solutions offers the following types of services (but not limited to):
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>IT Consulting</li>
              <li>Custom Software Development</li>
              <li>Website & Mobile App Development</li>
              <li>IT Support and Maintenance</li>
              <li>Cloud Solutions and System Integration</li>
              <li>Network Security and Data Protection</li>
              <li>Managed IT Services</li>
            </ul>
            <p className="text-gray-600 mt-3">
              By contracting us for any of our services, you agree to cooperate with the Company and provide any necessary information, resources, and access needed to complete the services requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Service Agreement & Payments</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Agreement:</strong> A formal service agreement or contract will be created and signed by both parties for all projects. This agreement will outline the scope of work, timelines, pricing, payment schedules, and other important project details.
              </li>
              <li>
                <strong>Payments:</strong> All payments are due according to the payment terms outlined in the service agreement. Clients agree to pay for services as per the agreed-upon terms. Payments not made on time may result in a delay in the service delivery or suspension of the project.
              </li>
              <li>
                <strong>Currency:</strong> Payments are typically made in the currency specified in the contract or invoice. Clients are responsible for any additional charges, taxes, or exchange rates applicable to the transaction.
              </li>
              <li>
                <strong>Late Payments:</strong> If payments are not received within the specified period, the Company reserves the right to charge late fees or interest on overdue amounts. Continued non-payment may result in termination of services.
              </li>
            </ul>
          </section>

          {/* Add additional sections here following the same pattern */}
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions or require further clarification, please contact us at:
            </p>
            <ul className="text-gray-600 space-y-1 mt-3">
              <li><strong>Email:</strong> mail@jackinfosoft.com</li>
              <li><strong>Phone:</strong> +91 7791819490</li>
              <li><strong>Website:</strong> <a href="https://www.jackinfosoft.com" className="text-blue-600 underline">www.jackinfosoft.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
