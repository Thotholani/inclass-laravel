import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MarketingLayout from '@/layouts/marketing-layout';
import { Link } from '@inertiajs/react';
import { Award, BookOpen, Bus, Calendar, DollarSign, Globe } from 'lucide-react';
import type React from 'react';

export default function BecomeTutorPage() {
    const benefits = [
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: 'Competitive Earnings',
            description: 'Set your own rates and keep up to 85% of what you earn. Top tutors on Inclass earn K1,000+ per week.',
        },
        {
            icon: <Calendar className="h-6 w-6" />,
            title: 'Flexible Schedule',
            description: 'Choose when you work. Create a schedule that fits your lifestyle with no minimum hour requirements.',
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: 'National Student Base',
            description: 'Connect with students from around the country who are eager to learn from your expertise.',
        },
        {
            icon: <Bus className="h-6 w-6" />,
            title: 'Zero Commute',
            description: 'Teach from anywhere with an internet connection. No more wasted time traveling to lessons.',
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: 'Professional Growth',
            description: 'Develop your teaching skills and build a portfolio of positive reviews and testimonials.',
        },
        {
            icon: <BookOpen className="h-6 w-6" />,
            title: 'All-in-One Platform',
            description: 'Our virtual classroom has everything you need: video conferencing, interactive whiteboard, and more.',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Create your profile',
            description: 'Sign up and build your tutor profile highlighting your expertise, experience, and teaching style.',
        },
        {
            number: '02',
            title: 'Complete verification',
            description: 'Verify your identity and credentials to build trust with potential students.',
        },
        {
            number: '03',
            title: 'Set your availability',
            description: "Define when you're available to teach and set your hourly rate based on your experience level.",
        },
        {
            number: '04',
            title: 'Meet and learn',
            description: 'Connect with students and start teaching in our interactive virtual classroom.',
        },
    ];

    const testimonials = [
        {
            quote: "Inclass has transformed how I teach. The platform is intuitive, payments are reliable, and I've connected with students I never would have reached otherwise.",
            name: 'Dr. Thomas Phiri',
            role: 'Physics Tutor',
            avatar: '/avatar_2.svg',
            subject: 'Physics',
            rating: 4.9,
            earnings: 'K1,200/week',
        },
        {
            quote: "I started tutoring on Inclass as a side gig, but it's become my full-time job. The flexibility allows me to travel while maintaining a steady income.",
            name: 'Janet Siame',
            role: 'English Tutor',
            avatar: '/avatar_5.svg',
            subject: 'Spanish, French',
            rating: 5.0,
            earnings: 'K950/week',
        },
        {
            quote: 'The tools Inclass provides make online teaching so much more effective. My students love the interactive whiteboard and the ability to record sessions.',
            name: "John M'hango",
            role: 'Mathematics Tutor',
            avatar: '/avatar_4.svg',
            subject: 'English Literature',
            rating: 4.8,
            earnings: 'K1,050/week',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-muted px-4 py-20">
                <div className="container mx-auto w-11/12 max-w-7xl">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="space-y-6">
                            <h1 className="font-title text-4xl uppercase md:text-5xl lg:text-6xl">
                                Share your knowledge. <br />
                                <span className="text-primary">Earn on your terms</span>
                            </h1>
                            <p className="text-muted-foreground max-w-xl text-xl">
                                Join hundreds of tutors who are turning their expertise into income on Inclass. Set your own schedule, rates, and
                                become your own boss.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button size="lg" className="rounded-xl">
                                    Become a Tutor
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    <Avatar className="border-background border-2">
                                        <AvatarImage src="/tutor-1.jpg" className={'object-cover'} />
                                        <AvatarFallback>SJ</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="border-background border-2">
                                        <AvatarImage src="/tutor-2.jpg" className={'object-cover'} />
                                        <AvatarFallback>MC</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="border-background border-2">
                                        <AvatarImage src="/tutor-3.jpg" className={'object-cover'} />
                                        <AvatarFallback>PP</AvatarFallback>
                                    </Avatar>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Join <span className="text-foreground font-bold">100+</span> tutors already teaching on Inclass
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="/tutor-hero.svg" alt="Tutor teaching online" height={300} width={450} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-4 py-20">
                <div className="container mx-auto w-11/12 max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="font-title mb-4 text-3xl uppercase md:text-4xl">Why Tutor on Inclass</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                            Our platform is designed to help tutors succeed while doing what they love
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="hover:bg-muted rounded-2xl border-0 shadow-none">
                                <CardHeader className={'p-0 md:px-4'}>
                                    <div className="bg-muted mb-4 w-fit rounded-full p-3">{benefit.icon}</div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className={'p-0 md:px-4'}>
                                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-muted px-4 py-20">
                <div className="container mx-auto w-11/12 max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="font-title mb-4 text-3xl uppercase md:text-4xl">How It Works</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">Getting started as a tutor on Inclass is simple</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-primary/20 mb-4 text-4xl font-bold">{step.number}</div>
                                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 py-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="font-title mb-4 text-3xl uppercase md:text-4xl">Hear From Our Tutors</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                            Success stories from tutors who have transformed their teaching careers on Inclass
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="rounded-2xl shadow-none">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={testimonial.avatar || '/placeholder.svg'} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                            <CardDescription>{testimonial.role}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                    <Badge variant="outline" className="rounded-full">
                                        {testimonial.earnings}
                                    </Badge>
                                    {/*<div className="flex flex-wrap gap-2">*/}
                                    {/*    <Badge variant="outline" className="rounded-full">*/}
                                    {/*        {testimonial.subject}*/}
                                    {/*    </Badge>*/}
                                    {/*    <Badge variant="outline" className="rounded-full">*/}
                                    {/*        ★ {testimonial.rating}*/}
                                    {/*    </Badge>*/}
                                    {/*    <Badge variant="outline" className="rounded-full">*/}
                                    {/*        {testimonial.earnings}*/}
                                    {/*    </Badge>*/}
                                    {/*</div>*/}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-muted px-4 py-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="font-title mb-4 text-3xl uppercase md:text-4xl">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">Everything you need to know about tutoring on Inclass</p>
                    </div>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">How much can I earn?</h3>
                            <p className="text-muted-foreground">
                                Your earnings depend on your rates and how many hours you teach. Tutors on Inclass set rates between K20-K500 per hour
                                based on their expertise and experience.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">What subjects can I teach?</h3>
                            <p className="text-muted-foreground">
                                You can teach any subject you're knowledgeable in, from academic subjects like math and science to skills like
                                programming, music, or language learning.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">What are the requirements?</h3>
                            <p className="text-muted-foreground">
                                You need expertise in your subject area, a reliable internet connection, a computer (or smartphone) with a webcam and
                                microphone, and the ability to communicate effectively.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">When do I get paid?</h3>
                            <p className="text-muted-foreground">
                                Money is moved to your Inclass wallet immediately after a lesson is completed and confirmed. You can then choose to
                                transfer funds to your mobile money account at any time. Full payment terms and conditions are available in our terms
                                of service.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">How do I get students?</h3>
                            <p className="text-muted-foreground">
                                Students can discover you through our search and matching system. Creating a compelling profile with clear subject
                                expertise, setting competitive rates, and maintaining high-quality sessions will improve your visibility. As you
                                receive positive reviews, your profile will rank higher in search results.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">What tools does Inclass provide?</h3>
                            <p className="text-muted-foreground">
                                Our platform includes video conferencing, an interactive whiteboard, file sharing, session scheduling, payment
                                processing, and messaging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-primary text-primary-foreground rounded-3xl p-8 text-center md:p-12">
                        <div className="mx-auto max-w-3xl space-y-6">
                            <h2 className="font-title text-3xl uppercase md:text-4xl">Ready to Earn on your terms</h2>
                            <p className="text-xl">
                                Join our community of passionate educators and start sharing your knowledge with students around the world.
                            </p>
                            <div className="pt-4">
                                <Button size="lg" variant="secondary" className="rounded-xl" asChild>
                                    <Link href={'/register'}>Apply Now</Link>
                                </Button>
                            </div>
                            <p className="text-xs opacity-80">Applications are typically reviewed within 2-3 business days</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

BecomeTutorPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
