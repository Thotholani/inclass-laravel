import MarketingLayout from '@/layouts/marketing-layout';
import type React from 'react';

export default function TermsOfServicePage() {
    return (
        <div className="mx-auto w-11/12 max-w-4xl py-4">
            <h1 className="font-title mb-8 text-4xl uppercase md:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: May 1, 2025</p>

            <div className="space-y-8">
                <section>
                    <p className="mb-4">
                        These Terms of Service ("Terms") govern your use of Inclass (the "Service") operated by Unlikly Software ("we," "us," or
                        "our").
                    </p>
                    <p className="mb-4">
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may
                        not access the Service.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">1. Accounts</h2>
                    <p className="mb-4">
                        When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes
                        a breach of the Terms, which may result in immediate termination of your account.
                    </p>
                    <p className="mb-4">
                        You are responsible for safeguarding the password used to access the Service and for any activities or actions under your
                        password.
                    </p>
                    <p className="mb-4">
                        You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach
                        of security or unauthorized use of your account.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">2. Tutoring Services</h2>
                    <p className="mb-4">
                        Inclass provides a platform for connecting students with tutors. We do not guarantee the quality, safety, or legality of
                        tutoring services provided through our platform.
                    </p>
                    <p className="mb-4">
                        Tutors are independent contractors and not employees of Inclass. Tutors are responsible for the content and quality of their
                        tutoring services.
                    </p>
                    <p className="mb-4">
                        Students are responsible for selecting tutors based on their own judgment. Students agree to attend scheduled sessions on time
                        and to provide at least 24 hours' notice for cancellations.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">3. Payments</h2>
                    <p className="mb-4">
                        All payments are processed through our secure payment system. Students agree to pay for tutoring services at the rates
                        specified by tutors.
                    </p>
                    <p className="mb-4">
                        Tutors receive payment for their services according to our payment schedule. Inclass retains a service fee from each
                        transaction.
                    </p>
                    <p className="mb-4">All payments are non-refundable except as expressly provided in our Refund Policy or as required by law.</p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">4. Content</h2>
                    <p className="mb-4">
                        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos,
                        or other material. You are responsible for the content you post on or through the Service.
                    </p>
                    <p className="mb-4">
                        By posting content on or through the Service, you grant us the right to use, modify, publicly perform, publicly display,
                        reproduce, and distribute such content on and through the Service.
                    </p>
                    <p className="mb-4">
                        You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or
                        otherwise objectionable.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">5. Intellectual Property</h2>
                    <p className="mb-4">
                        The Service and its original content (excluding content provided by users), features, and functionality are and will remain
                        the exclusive property of Unlikly Software and its licensors.
                    </p>
                    <p className="mb-4">
                        The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection
                        with any product or service without the prior written consent of Unlikly Software.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">6. Termination</h2>
                    <p className="mb-4">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including
                        without limitation if you breach the Terms.
                    </p>
                    <p className="mb-4">
                        Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply
                        discontinue using the Service or contact us to request account deletion.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">7. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall Unlikly Software, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for
                        any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data,
                        use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">8. Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Unlikly Software is
                        established, without regard to its conflict of law provisions.
                    </p>
                    <p className="mb-4">
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision
                        of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in
                        effect.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">9. Changes</h2>
                    <p className="mb-4">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will
                        try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                    <p className="mb-4">
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        If you do not agree to the new terms, please stop using the Service.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">10. Contact Us</h2>
                    <p className="mb-4">If you have any questions about these Terms, please contact us at legal@inclass.com.</p>
                </section>
            </div>
        </div>
    );
}

TermsOfServicePage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
