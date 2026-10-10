
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

        <div className="space-y-6 leading-7">
          <p>
            Please read these Terms and Conditions carefully before using the
            Stanley Suresh Ministries website.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Interpretation and Definitions
            </h2>
            <h3 className="mb-2 font-semibold">Definitions</h3>
            <p>
              For the purposes of these Terms and Conditions, the Company
              refers to Stanley Suresh Ministries, and the Website refers to
              https://www.stanleysureshministries.in/.
            </p>
            <p className="mt-3">
              You means the individual accessing or using the Website.
              Service refers to the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Acknowledgment</h2>
            <p>
              These Terms govern your use of the Website. By accessing or
              using the Website, you agree to these Terms. If you disagree
              with any part of these Terms, please discontinue using the
              Website.
            </p>
            <p className="mt-3">
              Please also read our Privacy Policy, which explains how
              information is handled when you use the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Links to Other Websites
            </h2>
            <p>
              The Website may contain links to third-party websites or
              services. Stanley Suresh Ministries does not control and is not
              responsible for the content, privacy policies, or practices of
              third-party websites. Please review their terms and privacy
              policies before using them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Website Availability</h2>
            <p>
              The Website and its content are provided on an as-available
              basis. We cannot guarantee uninterrupted access or that all
              information will always be complete, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Governing Law</h2>
            <p>
              These Terms are subject to applicable laws of India. Any
              disputes should first be raised with us so that we can attempt
              to resolve them informally, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The revised version
              will be published on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Contact Us</h2>
            <p>If you have questions about these Terms, contact us:</p>
            <p className="mt-3">
              Phone:{" "}
              <a className="text-primary hover:underline" href="tel:9585191911">
                9585191911
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                className="text-primary hover:underline"
                href="mailto:stanleysureshministries@gmail.com"
              >
                stanleysureshministries@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
