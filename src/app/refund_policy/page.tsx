import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-6">No Refund Policy</h1>
        <p className="text-gray-600 mb-4">
          At JackInfoSoft IT Solutions, we are committed to providing the best IT services and solutions to our clients. As part of our customer-focused approach, we have established a No Refund Policy to ensure clarity and mutual understanding regarding the services we offer. By purchasing our services or entering into any agreement with JackInfoSoft IT Solutions, you agree to the following terms and conditions:
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. No Refund Policy Overview</h2>
            <p className="text-gray-600">
              JackInfoSoft IT Solutions does not offer refunds for any services rendered, including but not limited to IT consulting, software development, web design, system integration, managed IT services, and other related services. Once payment is made for any service, it is non-refundable, regardless of the stage of project completion, nature of the service, or whether the service has been partially or fully delivered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Service Delivery & Performance</h2>
            <p className="text-gray-600">
              We ensure that our services are delivered in accordance with the specifications, timelines, and standards agreed upon in the contract or service agreement. We strive to maintain the highest quality and meet the expectations set forth. If there are concerns or dissatisfaction with our work, we encourage clients to reach out to us immediately so that we can address the issue and make the necessary adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Custom Solutions & Development</h2>
            <p className="text-gray-600">
              For custom IT solutions, software development, or any tailor-made services, we invest significant time and resources in research, design, and development. As such, no refund will be issued once work has commenced, including when initial drafts or prototypes are delivered or when the development process is in progress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Service Modifications</h2>
            <p className="text-gray-600">
              If modifications or changes are requested after the initiation of a project or service, the client will be required to cover the cost of the additional work. We encourage open communication during the project planning stages to ensure the final product meets expectations, reducing the need for extensive changes after delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Cancellations</h2>
            <p className="text-gray-600">
              Once a service agreement is signed or payment is made, cancellation of the agreement does not entitle the client to a refund. Cancellations may, however, be subject to an adjustment or a partial credit for future services, depending on the stage of the project and any work already completed at the time of cancellation.
            </p>
          </section>

      
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Client Responsibilities</h2>
            <p className="text-gray-600">
              It is the client’s responsibility to ensure that all project requirements, specifications, and expectations are clearly communicated before the service begins. Once an agreement is made, any subsequent requests or revisions outside of the initial scope will be handled as additional services with associated costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Dispute Resolution</h2>
            <p className="text-gray-600">
              In the event of any disagreements or disputes regarding the services provided, JackInfoSoft IT Solutions is committed to resolving issues in a fair and professional manner. We encourage clients to contact our customer support team to discuss any concerns before resorting to formal dispute procedures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Agreement Acknowledgement</h2>
            <p className="text-gray-600">
              By engaging with JackInfoSoft IT Solutions and utilizing our services, you acknowledge and accept this No Refund Policy. This policy applies to all services, contracts, and agreements entered into with JackInfoSoft IT Solutions, unless otherwise explicitly agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600">
              For any further inquiries or clarification regarding our No Refund Policy, please contact our customer service team at:
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

export default RefundPolicy;
