
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Stanley Suresh Ministries" },
      {
        name: "description",
        content:
          "Read the Terms and Conditions for using the Stanley Suresh Ministries website.",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground">
      <article className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-primary hover:underline"
        >
          ← Back to Home
        </a>

        <h1 className="mb-3 text-3xl font-bold md:text-4xl">
          Terms and Conditions
        </h1>

        <p className="mb-8 text-sm text-muted-foreground">
          Last updated: October 10, 2026
        </p>

        <div className="space-y-8 leading-7">
          <p>
            Please read these Terms and Conditions carefully before using
            the Stanley Suresh Ministries website.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Interpretation and Definitions
            </h2>

            <h3 className="mb-2 font-semibold">Interpretation</h3>
            <p>
              Words whose initial letters are capitalized have meanings
              defined under the following conditions. These definitions
              have the same meaning whether they appear in singular or
              plural.
            </p>

            <h3 className="mb-2 mt-4 font-semibold">Definitions</h3>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Affiliate:</strong> An entity that controls, is
                controlled by, or is under common control with a party.
              </li>
              <li>
                <strong>Country/State:</strong> Tamil Nadu, India.
              </li>
              <li>
                <strong>Ministry:</strong> Stanley Suresh Ministries,
                referred to as “We”, “Us”, or “Our”.
              </li>
              <li>
                <strong>Device:</strong> Any device that can access the
                website, including a computer, mobile phone, or tablet.
              </li>
              <li>
                <strong>Service:</strong> The website and its available
                features.
              </li>
              <li>
                <strong>Third-Party Service:</strong> Content or services
                provided by an external platform linked to or displayed
                on the website.
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.stanleysureshministries.in/"
                  className="text-primary hover:underline"
                >
                  stanleysureshministries.in
                </a>
              </li>
              <li>
                <strong>You:</strong> The individual accessing or using
                the website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Acknowledgment</h2>
            <p>
              These Terms govern your use of the website and describe
              the rights and responsibilities of visitors and users.
            </p>
            <p className="mt-3">
              By accessing or using the website, you agree to these
              Terms. If you disagree with any part of them, please
              discontinue using the website.
            </p>
            <p className="mt-3">
              Your use of the website is also subject to our Privacy
              Policy. Please read that policy to understand how
              information submitted through the website may be handled.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Website Use and Ministry Content
            </h2>
            <p>
              The website provides information about Stanley Suresh
              Ministries, its activities, prayer requests, sermons,
              testimonies, schedules, and ways to contact the ministry.
            </p>
            <p className="mt-3">
              Ministry content is provided for spiritual information,
              encouragement, and communication. Information, schedules,
              and website features may change from time to time.
            </p>
            <p className="mt-3">
              Submitting a prayer request does not guarantee a
              particular outcome. Please provide relevant information
              and avoid submitting unlawful or harmful content.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Sermons, Videos and External Links
            </h2>
            <p>
              The website may display or link to content from YouTube,
              Facebook, Instagram, Razorpay, and other third-party
              services.
            </p>
            <p className="mt-3">
              External services operate under their own terms and
              privacy policies. Stanley Suresh Ministries does not
              control third-party websites and is not responsible for
              their content, policies, availability, or practices.
            </p>
            <p className="mt-3">
              We encourage you to review the applicable terms and
              privacy policies before using external services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Giving and Payment Processing
            </h2>
            <p>
              The Give Now button may redirect you to Razorpay to
              complete a payment. Payment processing is subject to the
              terms and policies of the payment provider.
            </p>
            <p className="mt-3">
              Payment information entered on a third-party payment page
              is handled according to that provider's applicable
              policies and processes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Intellectual Property
            </h2>
            <p>
              Website text, graphics, branding, logos, photographs,
              videos, and other original materials may be protected by
              applicable intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, or use materials
              belonging to Stanley Suresh Ministries without
              appropriate permission, except where permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Termination
            </h2>
            <p>
              We may restrict or suspend access to the website where
              reasonably necessary, including in response to misuse
              or a breach of these Terms, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, the ministry
              is not responsible for indirect or consequential losses
              arising from the use of, or inability to use, the website
              or third-party services.
            </p>
            <p className="mt-3">
              Nothing in these Terms excludes or limits liability
              where such exclusion or limitation is prohibited by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Website Disclaimer
            </h2>
            <p>
              The website is provided on an “as available” basis.
              We do not guarantee uninterrupted access, error-free
              operation, or that all information will always be
              complete, accurate, or current.
            </p>
            <p className="mt-3">
              We may update or correct website content and features
              when necessary.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Governing Law</h2>
            <p>
              These Terms are subject to the applicable laws of India.
              Your statutory rights under applicable law remain
              unaffected.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Dispute Resolution
            </h2>
            <p>
              If you have a concern or dispute about the website,
              please contact the ministry first so that we can
              attempt to resolve the matter informally, subject to
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Severability and Waiver
            </h2>
            <h3 className="mb-2 font-semibold">Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid
              or unenforceable, the remaining provisions will continue
              to apply to the extent permitted by law.
            </p>
            <h3 className="mb-2 mt-4 font-semibold">Waiver</h3>
            <p>
              A failure to exercise a right under these Terms does
              not necessarily waive that right or prevent its
              exercise later.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Translation and Interpretation
            </h2>
            <p>
              If these Terms are made available in translated
              versions, the versions should be interpreted consistently
              to the extent possible, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms when necessary. The revised
              version will be published on this page with an updated
              revision date.
            </p>
            <p className="mt-3">
              Continued use of the website after changes take effect
              may be subject to the revised Terms, to the extent
              permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about these Terms, contact
              Stanley Suresh Ministries:
            </p>
            <p className="mt-3">
              Phone:{" "}
              <a
                href="tel:9585191911"
                className="text-primary hover:underline"
              >
                9585191911
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:stanleysureshministries@gmail.com"
                className="text-primary hover:underline"
              >
                stanleysureshministries@gmail.com
              </a>
            </p>
          </section>

          <p className="border-t border-border pt-5 text-sm text-muted-foreground">
            These website terms should be reviewed against the
            ministry's actual operations and applicable Indian law
            before being treated as final legal advice.
          </p>
        </div>
      </article>
    </main>
  );
}
