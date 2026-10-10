import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ivory px-5 py-16 text-deep sm:px-8">
      <article className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-deep/70 hover:text-gold"
        >
          ← Back to Home
        </a>

        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-deep/60">
          Last updated: October 10, 2026
        </p>

        <p className="mt-8 leading-7">
          Stanley Suresh Ministries ("we", "us", or "our") respects your
          privacy. This Privacy Policy explains how information may be
          collected, used, and disclosed when you visit
          stanleysureshministries.in or contact our ministry through the
          website.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            1. Information You Provide
          </h2>
          <p className="leading-7">
            If you contact us or submit a prayer request, you may choose to
            provide information such as your name, phone number, email
            address, and the details of your message or prayer request.
            Please share only information you are comfortable providing.
          </p>
          <p className="leading-7">
            Prayer requests may contain sensitive personal information.
            Please avoid including unnecessary medical, financial, or other
            private details about yourself or another person.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            2. How We Use Information
          </h2>
          <p className="leading-7">
            Information you voluntarily provide may be used to respond to
            enquiries, receive and respond to prayer requests, communicate
            with you about ministry activities you ask about, and operate
            and maintain the website.
          </p>
          <p className="leading-7">
            We do not intend to use your prayer request or contact details
            for unrelated marketing without an appropriate basis or consent
            where required by law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            3. Prayer Requests and Confidentiality
          </h2>
          <p className="leading-7">
            We treat prayer requests with care. However, please do not assume
            that information submitted online is absolutely confidential.
            Website hosting, communication, or form service providers may
            process information as necessary to deliver their services.
          </p>
          <p className="leading-7">
            We will not intentionally publish identifiable details from a
            private prayer request as a public testimony without appropriate
            permission, except where disclosure is required or permitted by
            applicable law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            4. Donations and Payment Processing
          </h2>
          <p className="leading-7">
            The website's Give Now option may direct you to Razorpay or
            another payment service to make a contribution. Payments are
            processed through the relevant provider and may be subject to
            that provider's privacy policy and terms.
          </p>
          <p className="leading-7">
            We do not intend to collect or store your full payment card
            details through this website. The payment provider may collect
            information necessary to process and manage a transaction.
            Please review the provider's privacy information before making
            a payment.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            5. YouTube and Social Media
          </h2>
          <p className="leading-7">
            Our website may link to or display content from YouTube,
            Facebook, Instagram, and other third-party services. When you
            visit those services or interact with embedded content, those
            providers may collect information according to their own
            policies and settings.
          </p>
          <p className="leading-7">
            We do not control the privacy practices of third-party services.
            Please review their privacy policies directly.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            6. Cookies and Technical Information
          </h2>
          <p className="leading-7">
            Our hosting provider and the technologies used to operate the
            website may process technical information such as browser
            details, IP addresses, access times, and requested pages for
            security, reliability, and troubleshooting.
          </p>
          <p className="leading-7">
            Third-party content or services may use cookies or similar
            technologies. The use of cookies depends on the services
            enabled on the website and your browser settings.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            7. Sharing of Information</h2>
          <p className="leading-7">
            We may share information with service providers when reasonably
            necessary to operate the website, respond to your request,
            process a payment, maintain security, or comply with legal
            obligations. We do not sell personal information as a business
            practice.
          </p>
          <p className="leading-7">
            Information may also be disclosed when required by law or when
            reasonably necessary to protect rights, safety, or prevent
            misuse of the website.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            8. Data Security and Retention
          </h2>
          <p className="leading-7">
            We take reasonable steps to protect information handled by the
            ministry. However, no method of electronic transmission or
            storage is completely secure, and absolute security cannot be
            guaranteed.
          </p>
          <p className="leading-7">
            Information is kept only for as long as reasonably necessary
            for the purpose for which it was collected, to address enquiries,
            maintain relevant records, or meet applicable legal
            requirements.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            9. Your Choices and Requests
          </h2>
          <p className="leading-7">
            You may contact us to ask about personal information you have
            provided or to request correction or deletion where applicable.
            We may need to retain some information where required by law or
            for legitimate recordkeeping purposes.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            10. Children's Privacy
          </h2>
          <p className="leading-7">
            Parents or guardians should supervise children's use of the
            website and avoid submitting a child's personal information
            unless appropriate and lawful. If you believe a child has
            provided personal information inappropriately, please contact
            us so that we can review the request.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            11. Third-Party Websites
          </h2>
          <p className="leading-7">
            Our website may contain links to websites we do not operate.
            We are not responsible for their content, security, or privacy
            practices. Review the privacy policy of each third-party
            website you visit.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            12. Changes to This Policy
          </h2>
          <p className="leading-7">
            We may update this Privacy Policy when our practices or legal
            requirements change. The revised version will be published on
            this page with an updated date.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-semibold">
            13. Contact Us
          </h2>
          <p className="leading-7">
            If you have questions or requests regarding this Privacy
            Policy, please contact Stanley Suresh Ministries:
          </p>
          <p className="leading-7">
            Email:{" "}
            <a
              href="mailto:stanleysureshministries@gmail.com"
              className="underline hover:text-gold"
            >
              stanleysureshministries@gmail.com
            </a>
          </p>
          <p className="leading-7">
            Phone:{" "}
            <a href="tel:9585191911" className="underline hover:text-gold">
              9585191911
            </a>
          </p>
        </section>

        <p className="mt-12 border-t border-deep/15 pt-6 text-sm text-deep/60">
          This policy should be reviewed against the ministry's actual data
          practices and applicable Indian privacy law before publication.
        </p>
      </article>
    </main>
  );
}
