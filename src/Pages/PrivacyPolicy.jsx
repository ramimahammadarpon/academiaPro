import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-26">
      <div className="max-w-7xl md:mx-10 lg:mx-auto mx-5">
        <h1 className="text-2xl font-semibold text-primary mb-7">
          Privacy Policy
        </h1>
        <p className="mb-6 text-lg">
          At <strong>AcademiaPro</strong>, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, payment details, and any data you voluntarily provide
              when using our services. We also collect usage data (such as page
              visits and session time) to improve user experience.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              2. How We Use Your Information
            </h2>
            <p>
              The data we collect is used to:
              <ul className="list-disc pl-6 mt-2">
                <li>Provide and improve our services</li>
                <li>Process transactions</li>
                <li>Send important updates and communications</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              3. Sharing Your Data
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share data with trusted partners who assist in
              operating our website, as long as they agree to keep your data
              confidential.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              4. Cookies and Tracking
            </h2>
            <p>
              We use cookies and similar technologies to personalize your
              experience and analyze website traffic. You can adjust your
              browser settings to disable cookies, though some features may not
              function properly.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              5. Data Security
            </h2>
            <p>
              We implement robust security measures to protect your data from
              unauthorized access, alteration, or disclosure. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, modify, or delete your personal
              data. If you would like to make a request, please contact us using
              the details provided below.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy occasionally. All changes will
              be posted on this page, and we encourage you to review it
              regularly.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
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

export default PrivacyPolicy;
