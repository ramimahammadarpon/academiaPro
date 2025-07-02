import React from "react";

const TermsAndServices = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-26">
      <div className="max-w-7xl md:mx-10 lg:mx-auto mx-5">
        <h1 className="text-2xl font-semibold text-primary mb-7">
          Terms and Services
        </h1>
        <p className="mb-6 text-lg">
          Welcome to <strong>AcademiaPro</strong>. Please read these Terms and
          Services carefully before using our platform. By accessing or using
          our services, you agree to be bound by these terms.
        </p>

        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering, accessing, or using AcademiaPro, you agree to
              comply with and be bound by these Terms and Conditions. If you do
              not agree, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              2. Account Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials. You agree to provide accurate and complete
              information and to update it as needed.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              3. Intellectual Property
            </h2>
            <p>
              All content, logos, graphics, and source code are the property of
              AcademiaPro or its licensors. You may not reuse or redistribute
              content without explicit permission.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              4. Payments & Refunds
            </h2>
            <p>
              All course payments are handled via our secure payment processor.
              Refunds are subject to approval based on our refund policy.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              5. Prohibited Activities
            </h2>
            <p>
              Users must not upload harmful or illegal content, misuse the
              platform, or interfere with others’ experience. Violations may
              result in account suspension.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              6. Changes to Terms
            </h2>
            <p>
              AcademiaPro reserves the right to update these Terms at any time.
              Continued use of the platform signifies your acceptance of any
              changes.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, feel free to contact
              us at{" "}
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

export default TermsAndServices;
