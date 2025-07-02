import React from "react";

const OtherDocumentations = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-26">
      <div className="max-w-7xl md:mx-10 lg:mx-auto mx-5">
        <h1 className="text-2xl font-semibold text-primary mb-7">
          Other Documentations
        </h1>

        <p className="mb-6 text-lg">
          This section includes additional documentation that supports our platform’s operation, transparency, and legal compliance. These documents are important for understanding how we function and what we expect from our users.
        </p>

        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              1. Terms of Service
            </h2>
            <p>
              Our <strong>Terms of Service</strong> outlines the rules and regulations for using AcademiaPro. By accessing our platform, you agree to comply with these terms. Violating them may lead to suspension or termination of your access.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              2. Cookie Policy
            </h2>
            <p>
              We use cookies to enhance your browsing experience and analyze website traffic. The <strong>Cookie Policy</strong> explains what types of cookies we use, how they’re used, and how you can control them.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              3. Refund Policy
            </h2>
            <p>
              Our <strong>Refund Policy</strong> describes the conditions under which refunds may be issued. If you are unsatisfied with a service or product, please refer to this document to understand the eligibility and process for a refund.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              4. Accessibility Statement
            </h2>
            <p>
              AcademiaPro is committed to making our platform accessible to all users, regardless of ability. The <strong>Accessibility Statement</strong> outlines the steps we've taken to improve usability and ensure inclusivity.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              5. Contact for Documentation Requests
            </h2>
            <p>
              If you need access to any additional legal or technical documents not listed here, please reach out to us at{" "}
              <a
                href="mailto:mirramimahammad@gmail.com"
                className="text-blue-600 underline"
              >
                mirramimahammad@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherDocumentations;
