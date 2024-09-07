import React from "react";
import Back from "../Components/Back";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Back />
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">[Your Company Name]</span>{" "}
        Research and Consultancy Website. By accessing and using this website,
        you agree to comply with the following terms and conditions. Please read
        them carefully before using the services provided on the website.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. General Use</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            The website is owned and operated by{" "}
            <span className="font-semibold">[Your Company Name]</span>.
          </li>
          <li>
            By accessing the website, you acknowledge and agree that you will
            use the website in accordance with these terms of service and all
            applicable laws.
          </li>
          <li>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. User Accounts</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            To access certain sections of the website, including the blog and
            careers sections, you must register for an account.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account login information and any actions taken under your account.
          </li>
          <li>
            Misuse of account information or unauthorized access will result in
            termination of services.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Blog Section</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>Registered users can write and publish blog posts.</li>
          <li>
            All content must adhere to our content guidelines. We reserve the
            right to remove any content that violates these guidelines,
            including offensive, unlawful, or inappropriate material.
          </li>
          <li>
            By submitting content, you grant{" "}
            <span className="font-semibold">[Your Company Name]</span> the right
            to display, distribute, and promote your content within the website.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Careers Section</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            Registered users can view information about current
            employees/attachees and submit applications for attachee positions.
          </li>
          <li>
            All personal information provided during the application process
            will be handled in accordance with our Privacy Policy.
          </li>
          <li>
            Applications submitted through the website do not guarantee
            acceptance into an attachee or employment position.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. User Conduct</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            You agree to use the website for lawful purposes only and will not
            engage in any activity that disrupts the website’s operations or
            infringes on the rights of others.
          </li>
          <li>
            Harassment, hate speech, or abusive behavior toward other users or
            staff will not be tolerated.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Intellectual Property
        </h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            All content, trademarks, and intellectual property displayed on this
            website are owned by{" "}
            <span className="font-semibold">[Your Company Name]</span> or the
            respective owners. You may not reproduce, distribute, or modify any
            content without explicit permission.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            We reserve the right to terminate or suspend your account at any
            time for violations of these terms.
          </li>
          <li>
            You may also delete your account at any time through the account
            settings.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          8. Limitation of Liability
        </h2>
        <ul className="list-decimal list-inside pl-4">
          <li>
            <span className="font-semibold">[Your Company Name]</span> will not
            be liable for any damages arising out of your use of the website.
          </li>
          <li>
            We are not responsible for the accuracy of user-generated content
            such as blog posts or job applications.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Privacy</h2>
        <p>
          Our Privacy Policy governs the collection and use of personal
          information on this website. Please refer to it for more details.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
