import MarketingLayout from '@/layouts/marketing-layout';
import type React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="mx-auto w-11/12 max-w-4xl py-4">
            <h1 className="font-title mb-8 text-4xl uppercase md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: May 1, 2025</p>

            <div className="space-y-8">
                <section>
                    <p className="mb-4">
                        This Privacy Policy describes how Inclass ("we", "us", or "our") collects, uses, and discloses your personal information when
                        you use our website and services (collectively, the "Service").
                    </p>
                    <p className="mb-4">
                        We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information
                        in accordance with this policy.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect several different types of information for various purposes to provide and improve our Service to you:
                    </p>

                    <h3 className="mb-2 text-xl font-medium">Personal Data</h3>
                    <p className="mb-4">
                        While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to
                        contact or identify you ("Personal Data"). This may include, but is not limited to:
                    </p>
                    <ul className="mb-4 list-disc space-y-1 pl-6">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Cookies and Usage Data</li>
                    </ul>

                    <h3 className="mb-2 text-xl font-medium">Usage Data</h3>
                    <p className="mb-4">
                        We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include
                        information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of
                        our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and
                        other diagnostic data.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">2. Use of Data</h2>
                    <p className="mb-4">Inclass uses the collected data for various purposes:</p>
                    <ul className="mb-4 list-disc space-y-1 pl-6">
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">3. Transfer of Data</h2>
                    <p className="mb-4">
                        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your
                        state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your
                        jurisdiction.
                    </p>
                    <p className="mb-4">
                        If you are located outside the United States and choose to provide information to us, please note that we transfer the data,
                        including Personal Data, to the United States and process it there.
                    </p>
                    <p className="mb-4">
                        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that
                        transfer.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">4. Disclosure of Data</h2>
                    <p className="mb-4">We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul className="mb-4 list-disc space-y-1 pl-6">
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of Inclass</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">5. Security of Data</h2>
                    <p className="mb-4">
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of
                        electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we
                        cannot guarantee its absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">6. Service Providers</h2>
                    <p className="mb-4">
                        We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on
                        our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                    </p>
                    <p className="mb-4">
                        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to
                        disclose or use it for any other purpose.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">7. Analytics</h2>
                    <p className="mb-4">We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                    <p className="mb-4">
                        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data
                        collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the
                        collected data to contextualize and personalize the ads of its own advertising network.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">8. Cookies</h2>
                    <p className="mb-4">
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                    </p>
                    <p className="mb-4">
                        Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser
                        from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track
                        information and to improve and analyze our Service.
                    </p>
                    <p className="mb-4">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
                        cookies, you may not be able to use some portions of our Service.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">9. Children's Privacy</h2>
                    <p className="mb-4">Our Service does not address anyone under the age of 18 ("Children").</p>
                    <p className="mb-4">
                        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or
                        guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that
                        we have collected Personal Data from children without verification of parental consent, we take steps to remove that
                        information from our servers.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
                    <p className="mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on
                        this page.
                    </p>
                    <p className="mb-4">
                        We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the
                        "effective date" at the top of this Privacy Policy.
                    </p>
                    <p className="mb-4">
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when
                        they are posted on this page.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">11. Contact Us</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at privacy@inclass.com.</p>
                </section>
            </div>
        </div>
    );
}

PrivacyPolicyPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
