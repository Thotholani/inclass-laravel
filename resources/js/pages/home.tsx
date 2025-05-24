import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import MarketingLayout from '@/layouts/marketing-layout';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import { CalendarCheck2Icon, Coins, MousePointer2Icon, Search, UsersIcon, Video } from 'lucide-react';
import React from 'react';

export default function HomePage() {
    const faqItems = [
        {
            question: 'How does online tutoring work on Inclass?',
            answer: 'Our platform connects you with expert tutors through video conferencing and an interactive whiteboard. You can browse tutors, schedule sessions at times that work for you, and learn in real-time with personalized attention.',
        },
        {
            question: 'What subjects are available for tutoring?',
            answer: "We offer tutoring across a wide range of subjects including mathematics, sciences, languages, humanities, test preparation, programming, and more. Whatever you're learning, we likely have tutors who can help.",
        },
        {
            question: 'How much does tutoring cost?',
            answer: 'Tutoring rates vary by subject and tutor experience. Each tutor sets their own rates, which are clearly displayed on their profiles. You only pay for the sessions you book, with no subscription fees or hidden costs.',
        },
        {
            question: 'How do I find the right tutor for me?',
            answer: "You can search for tutors by subject, read reviews from other students, and filter by availability and price range. Many tutors offer a free introductory session to ensure it's a good match before you commit.",
        },
        {
            question: 'Can I become a tutor on Inclass?',
            answer: "Yes! If you have expertise in a subject and want to share your knowledge, you can apply to become a tutor. You'll need to complete our verification process, after which you can set your rates and availability.",
        },
        {
            question: 'What if I need to cancel a session?',
            answer: 'You can reschedule or cancel sessions up to 24 hours before the scheduled time without any penalty. Last-minute cancellations may be subject to our cancellation policy.',
        },
    ];

    const testimonials = [
        {
            quote: 'It’s like having a tutor right next to you. The live video and whiteboard made all the difference.',
            person: 'Ama, calculus student',
        },
        {
            quote: 'The lesson was tailored exactly to what I needed. I felt fully supported.',
            person: 'Thandi, chemistry undergrad',
        },
        {
            quote: 'Interactive and clear! This was way better than watching pre-recorded videos.',
            person: 'Brian, physics learner',
        },
        {
            quote: 'I finally understood the concepts I was struggling with. It was such a relief.',
            person: 'Rachel, biology student',
        },
    ];

    return (
        <main>
            <div className={'mx-auto w-11/12 max-w-7xl'}>
                <section>
                    <h1 className={'font-title scroll-m-20 text-center text-4xl uppercase md:text-5xl lg:text-7xl'}>
                        Turn any room into a classroom
                    </h1>
                    <p className="mx-auto mt-6 text-center text-lg leading-6 md:max-w-3xl md:text-2xl md:leading-7">
                        Get top-quality teaching wherever you are. Open the app , meet a tutor, and learn like you’re face-to-face in your space.
                    </p>

                    <div className={'flex flex-col-reverse items-center md:flex-col'}>
                        <Button className={'my-4 w-full md:w-fit'} size={'lg'} asChild>
                            <Link href={'/find-a-tutor'}>Find a tutor</Link>
                        </Button>

                        <div className={'my-8 flex justify-center gap-1'}>
                            <img src={'/hero_2.svg'} height={300} width={400} alt={'man tutoring in class'} />
                        </div>
                    </div>
                </section>

                {/*Features Section*/}
                <section className={'my-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'}>
                    <FeatureCard
                        title={'Personal'}
                        icon={<UsersIcon size={30} />}
                        details={
                            'Ask questions the moment they pop up. Your tutor adjusts the pace and examples to fit you—no one-size-fits-all videos.'
                        }
                    />
                    <FeatureCard
                        title={'Hands-on'}
                        icon={<MousePointer2Icon size={30} />}
                        details={
                            'Share screens, sketch on the same whiteboard, and work through problems together in real time like if you were in the same room.'
                        }
                    />
                    <FeatureCard
                        title={'Affordable'}
                        icon={<Coins size={30} />}
                        details={'Pick tutors whose hourly rates fit your budget. Pay only for the lessons you book, nothing more.'}
                    />
                </section>

                <section className={'my-12'}>
                    <div className={'flex flex-col-reverse items-center justify-between md:flex-row'}>
                        <div>
                            <h1 className={'font-title text-4xl uppercase md:text-5xl lg:text-7xl'}>As easy as...</h1>
                            <p className="my-6 text-lg leading-6 md:max-w-lg md:text-2xl md:leading-7">
                                Connect with expert tutors in just a few clicks and start learning right away.
                            </p>
                            <Button className={'rounded-full'} size={'lg'}>
                                Get started
                            </Button>
                        </div>
                        <img src={'/steps.svg'} height={300} width={400} />
                    </div>

                    <section className={'my-8 grid grid-cols-1 gap-8 md:my-2 md:grid-cols-2 lg:grid-cols-3'}>
                        <FeatureCard
                            title={''}
                            icon={<Search size={30} />}
                            details={
                                'Browse through a list of expert tutors. Choose one that fits your needs, and check their rates and availability.'
                            }
                        />
                        <FeatureCard
                            title={''}
                            icon={<CalendarCheck2Icon size={30} />}
                            details={
                                'Pick a time that works for you. Our flexible scheduling system makes it easy to book lessons when it’s most convenient.'
                            }
                        />
                        <FeatureCard
                            title={''}
                            icon={<Video size={30} />}
                            details={
                                'Meet your tutor in a live video room. You’ll use a shared whiteboard to work through lessons just like you would in-person.'
                            }
                        />
                    </section>
                </section>

                <section className={'my-12 gap-6 md:flex'}>
                    <h1 className={'font-title mb-4 text-4xl uppercase md:w-1/2 md:text-5xl lg:text-7xl'}>What people are saying about us</h1>
                    <Carousel
                        className={'md:w-1/2'}
                        plugins={[
                            Autoplay({
                                delay: 4500,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem className={''} key={testimonial.quote}>
                                    <Card className={'bg-muted flex h-[300px] flex-col justify-between border-0 shadow-none md:h-[500px]'}>
                                        <CardHeader>
                                            <Avatar>
                                                <AvatarImage src={'/avatar_1.svg'} alt="@avatar" />
                                                <AvatarFallback>AV</AvatarFallback>
                                            </Avatar>
                                            <CardTitle className={'text-2xl'}>{testimonial.quote}</CardTitle>
                                        </CardHeader>
                                        <CardFooter>
                                            <Button>{testimonial.person}</Button>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/*<CarouselPrevious />*/}
                        {/*<CarouselNext />*/}
                    </Carousel>
                </section>

                <section className="my-20">
                    <div className="mb-10 text-center">
                        <h2 className="font-title text-4xl uppercase md:text-5xl">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                            Everything you need to know about our online tutoring platform
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </div>

            <section className={'bg-primary text-primary-foreground flex w-full flex-col items-center px-4 py-40 text-center md:px-10'}>
                <h1 className={'font-title text-4xl uppercase md:text-5xl lg:text-7xl'}>Ready to excel in your studies</h1>
                <p className={'mx-auto w-11/12 text-2xl md:w-2/3'}>
                    Join thousands of students who are achieving their academic goals with personalized tutoring.
                </p>
                <Button size={'lg'} className={'mt-4'} variant={'secondary'}>
                    Get started for free
                </Button>
            </section>
        </main>
    );
}

interface featureCardProps {
    title: string;
    icon: React.ReactNode;
    details: string;
}

function FeatureCard({ title, icon, details }: featureCardProps) {
    return (
        <div>
            <div className={'bg-muted mb-4 flex w-fit items-center justify-center rounded-full p-5'}>{icon}</div>
            <h1 className={'text-lg font-semibold md:text-2xl'}>{title}</h1>
            <p className={'text-muted-foreground font-normal'}>{details}</p>
        </div>
    );
}

HomePage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
