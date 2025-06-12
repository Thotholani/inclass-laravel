import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarketingLayout from '@/layouts/marketing-layout';
import { BookOpen, Calendar, CreditCard, FileText, Headphones, MessageCircle, Search, Video } from 'lucide-react';
import type React from 'react';

export default function HelpCenterPage() {
    const categories = [
        {
            id: 'getting-started',
            name: 'Getting Started',
            icon: <BookOpen className="h-5 w-5" />,
            description: 'Learn the basics of using Inclass',
        },
        {
            id: 'account',
            name: 'Account & Profile',
            icon: <FileText className="h-5 w-5" />,
            description: 'Manage your account settings',
        },
        {
            id: 'tutoring',
            name: 'Tutoring Sessions',
            icon: <Video className="h-5 w-5" />,
            description: 'Everything about online sessions',
        },
        {
            id: 'scheduling',
            name: 'Scheduling',
            icon: <Calendar className="h-5 w-5" />,
            description: 'Booking and managing appointments',
        },
        {
            id: 'payments',
            name: 'Payments & Billing',
            icon: <CreditCard className="h-5 w-5" />,
            description: 'Payment methods and invoices',
        },
        {
            id: 'support',
            name: 'Technical Support',
            icon: <Headphones className="h-5 w-5" />,
            description: 'Troubleshooting and technical help',
        },
    ];

    const faqs = {
        'getting-started': [
            {
                question: 'How do I create an account on Inclass?',
                answer: "To create an account, click on the 'Get started for Free' button on the homepage. Fill in your details, verify your email address, and you're ready to go!",
            },
            {
                question: 'What subjects are available for tutoring?',
                answer: 'Inclass offers tutoring in a wide range of subjects including mathematics, sciences, languages, humanities, test preparation, programming, and more. You can browse available subjects when searching for tutors.',
            },
            {
                question: 'How do I find the right tutor for me?',
                answer: 'Use our search and filter options to find tutors based on subject, price range, availability, and ratings. You can also read reviews from other students to help make your decision.',
            },
            {
                question: 'Is there a mobile app available?',
                answer: 'Not currently. Inclass is still in beta and we are committed to making it the best it can be before bringing it to android and iOS. You can however access Inclass through your browser of choice on your mobile phone.',
            },
        ],
        account: [
            {
                question: 'How do I reset my password?',
                answer: "To reset your password, click on the 'Forgot password?' link on the login page. Enter your email address, and we'll send you a link to create a new password.",
            },
            {
                question: 'How do I update my profile information?',
                answer: "Log in to your account, go to your profile settings, and click on 'Edit Profile'. From there, you can update your personal information, profile picture, and preferences.",
            },
            {
                question: 'Can I change my email address?',
                answer: "Yes, you can change your email address in your account settings. You'll need to verify the new email address before the change takes effect.",
            },
            {
                question: 'How do I delete my account?',
                answer: "To delete your account, go to your account settings and select 'Delete Account'. Please read our terms of service regarding how deleting your account works.",
            },
        ],
        tutoring: [
            {
                question: 'How do online tutoring sessions work?',
                answer: "Our online tutoring sessions take place in our virtual classroom, which includes video conferencing and an interactive whiteboard. You'll connect with your tutor at the scheduled time, and you can share screens, draw on the whiteboard, and communicate in real-time.",
            },
            {
                question: 'What equipment do I need for tutoring sessions?',
                answer: "You'll need a computer or tablet with a webcam and microphone, a stable internet connection, and a quiet place to focus. We recommend using headphones for better audio quality.",
            },
            {
                question: 'Can I record tutoring sessions?',
                answer: 'Our virtual classroom does not currently have recording capability but a snapshot of your whiteboard is kept and you can reference this at anytime to see what was discussed during the class using it.',
            },
            {
                question: 'What if I have technical issues during a session?',
                answer: 'If you experience technical difficulties, try refreshing your browser or restarting the app. If problems persist, you can use the in-session chat to communicate with your tutor or contact our technical support team.',
            },
        ],
        scheduling: [
            {
                question: 'How do I book a tutoring session?',
                answer: 'To book a session, find a tutor you like, check their availability calendar, and select a time slot that works for you. Confirm your booking and make the payment to secure your session.',
            },
            {
                question: 'How far in advance should I book a session?',
                answer: 'We recommend booking at least 24 hours in advance to ensure availability, but many tutors offer last-minute sessions if their schedule permits.',
            },
            {
                question: 'What is the cancellation policy?',
                answer: "You can cancel or reschedule a session up to 24 hours before the scheduled time without any penalty. Cancellations with less notice may be subject to a fee, depending on the tutor's policy.",
            },
            {
                question: 'Can I book recurring sessions?',
                answer: 'Yes, you can set up recurring sessions with your tutor on a weekly or bi-weekly basis. This helps maintain consistency in your learning and secures your preferred time slot.',
            },
        ],
        payments: [
            {
                question: 'What payment methods are accepted?',
                answer: 'We accept major credit and debit cards, PayPal, and bank transfers in select regions. All payments are processed securely through our platform.',
            },
            {
                question: 'How much do tutoring sessions cost?',
                answer: "Tutoring rates vary depending on the subject and the tutor's experience. Each tutor sets their own rates, which are clearly displayed on their profile before you book a session.",
            },
            {
                question: 'When am I charged for a session?',
                answer: "You're charged when you book a session. The payment is held in escrow until the session is completed, at which point it's released to the tutor.",
            },
            {
                question: 'What is your refund policy?',
                answer: "If you're not satisfied with a session, you can request a refund within 48 hours. Each case is reviewed individually according to our refund policy, which protects both students and tutors.",
            },
        ],
        support: [
            {
                question: 'How do I contact technical support?',
                answer: "You can contact our technical support team through the 'Contact Support' button at the bottom of this page, or by emailing support@inclass.com. We aim to respond to all inquiries within 24 hours.",
            },
            {
                question: "The video or audio isn't working during my session. What should I do?",
                answer: 'First, check your browser permissions to ensure Inclass has access to your camera and microphone. Try refreshing the page or using a different browser. If issues persist, contact our technical support team.',
            },
            {
                question: 'Is there a minimum internet speed required?',
                answer: 'We recommend a minimum internet speed of 5 Mbps for download and 2 Mbps for upload to ensure smooth video and audio during sessions. You can test your internet speed at speedtest.net.',
            },
            {
                question: 'Which browsers are supported?',
                answer: 'Inclass works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.',
            },
        ],
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="font-title mb-4 text-4xl uppercase md:text-5xl">Help Center</h1>
                <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                    Find answers to common questions and learn how to get the most out of Inclass
                </p>
            </div>

            <div className="mx-auto mb-12 max-w-2xl">
                <div className="relative">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
                    <Input type="search" placeholder="Search for help articles..." className="rounded-xl pl-10" />
                </div>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                    <Card key={category.id} className="rounded-2xl transition-shadow hover:shadow-md">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="bg-muted rounded-full p-2">{category.icon}</div>
                                <div>
                                    <CardTitle>{category.name}</CardTitle>
                                    <CardDescription>{category.description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <div className="mb-16">
                <h2 className="font-title mb-8 text-center text-3xl uppercase">Frequently Asked Questions</h2>
                <Tabs defaultValue="getting-started" className="mx-auto max-w-4xl">
                    <TabsList className="mb-8 grid grid-cols-3 md:grid-cols-6">
                        {categories.map((category) => (
                            <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(faqs).map(([categoryId, questions]) => (
                        <TabsContent key={categoryId} value={categoryId}>
                            <Accordion type="single" collapsible className="w-full">
                                {questions.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            <div className="bg-muted mx-auto max-w-3xl rounded-2xl p-8 text-center">
                <h2 className="font-title mb-4 text-2xl uppercase">Still need help</h2>
                <p className="text-muted-foreground mb-6">Our support team is here to help you with any questions or issues you might have.</p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button className="rounded-xl" size="lg" asChild>
                        <a href="mailto:support@unlikly.com">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Contact Support
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

HelpCenterPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
