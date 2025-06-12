import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Clock } from 'lucide-react';
import { RiArrowLeftSLine, RiMoneyDollarCircleLine, RiStarLine, RiTranslate2, RiVideoOnLine } from 'react-icons/ri';

interface Tutor {
    id: number;
    image: string;
    name: string;
    reviews: number;
    rate: number;
    bio: string;
    subject: string;
}

export default function TutorProfilePage({ tutor }) {
    // const tutor = {
    //     id: 'jack-daniels',
    //     name: 'Jack Daniels',
    //     avatar: '/tutor-1.jpg',
    //     rating: 4.9,
    //     totalReviews: 127,
    //     subject: 'Mathematics',
    //     experience: '5+ years',
    //     language: 'English',
    //     hourlyRate: 150,
    //     responseTime: 'Usually responds within 1 hour',
    //     bio: 'Passionate mathematics tutor with over 5 years of experience helping students excel in their studies. I specialize in making complex mathematical concepts easy to understand through practical examples and interactive learning methods. My approach focuses on building strong foundational knowledge while developing problem-solving skills that students can apply confidently in their academic journey.',
    //     qualifications: [
    //         "Bachelor's Degree in Mathematics - University of Zambia",
    //         'Certified Mathematics Teacher',
    //         'Advanced Calculus Specialization',
    //     ],
    //     totalStudents: 89,
    //     completedLessons: 342,
    //     verified: true,
    // };

    const reviews = [
        {
            id: 1,
            studentName: 'Sarah M.',
            rating: 5,
            date: '2 weeks ago',
            comment:
                'Jack is an excellent tutor! He helped me understand calculus concepts that I was struggling with for months. His teaching style is very clear and patient.',
        },
        {
            id: 2,
            studentName: 'Michael K.',
            rating: 5,
            date: '1 month ago',
            comment: 'Great tutor with deep knowledge of mathematics. He uses real-world examples that make learning enjoyable and memorable.',
        },
    ];

    const availability = [
        { day: 'Monday', slots: ['09:00 AM', '02:00 PM', '04:00 PM'] },
        { day: 'Tuesday', slots: ['10:00 AM', '03:00 PM'] },
        { day: 'Wednesday', slots: ['09:00 AM', '01:00 PM', '05:00 PM'] },
        { day: 'Thursday', slots: ['11:00 AM', '02:00 PM'] },
        { day: 'Friday', slots: ['09:00 AM', '03:00 PM', '04:00 PM'] },
        { day: 'Saturday', slots: ['10:00 AM', '02:00 PM'] },
        { day: 'Sunday', slots: [] },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-primary' : 'text-muted-foreground/60'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-card sticky top-0 z-10 mx-auto w-11/12 max-w-4xl py-4">
                <div className="mx-auto flex max-w-4xl items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Button asChild variant="secondary">
                            <Link href="/app/find-a-tutor">
                                <RiArrowLeftSLine className="h-5 w-5" />
                                Back
                            </Link>
                        </Button>
                        <h1 className="text-lg font-semibold text-black">View Tutor</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto w-11/12 max-w-4xl py-8">
                {/* Tutor Information */}
                <div className="mb-12">
                    <div className="flex flex-col space-y-6 md:flex-row md:items-start md:space-y-0 md:space-x-8">
                        <div className="flex-shrink-0">
                            <Avatar className="h-32 w-32 overflow-hidden rounded-2xl md:h-42 md:w-42">
                                <AvatarImage src={tutor.user.image} className="h-full w-full object-cover" />
                                <AvatarFallback>
                                    {tutor.user.name
                                        .split(' ')
                                        .map((n: never) => n[0])
                                        .join('')}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="mb-4">
                                <div className={'flex justify-between'}>
                                    <h1 className="mb-2 text-3xl font-bold text-black">{tutor.user.name}</h1>

                                    <div className={'hidden md:block'}>
                                        <ActionButtons />
                                    </div>
                                </div>
                                <div className="mb-3 flex items-center space-x-4 text-black">
                                    <span className="text-lg font-medium">{tutor.subject}</span>
                                    <span>•</span>
                                    <div className="flex items-center space-x-1">
                                        <Badge variant={'secondary'}>
                                            <RiTranslate2 className="h-4 w-4" />
                                            <span>{'English'}</span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-6 leading-relaxed text-black">{tutor.bio}</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className={'mt-8 grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-6'}>
                        <div className={'bg-muted flex justify-between rounded-2xl p-4'}>
                            <div>
                                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>{tutor.rate}</h1>
                                <p className={'md:text-md text-xs font-medium'}>per hour</p>
                            </div>
                            <RiMoneyDollarCircleLine className={'h-8 w-8'} />
                        </div>

                        <div className={'bg-muted flex justify-between rounded-2xl p-4'}>
                            <div>
                                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>{tutor.rating}</h1>
                                <p className={'md:text-md text-xs font-medium'}>Rating</p>
                            </div>
                            <RiStarLine className={'h-8 w-8'} />
                        </div>

                        <div className={'bg-muted flex justify-between rounded-2xl p-4'}>
                            <div>
                                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>{Math.floor(Math.random() * 100)}</h1>
                                <p className={'md:text-md text-xs font-medium'}>Lessons</p>
                            </div>
                            <RiVideoOnLine className={'h-8 w-8'} />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className={'block md:hidden'}>
                    <ActionButtons />
                </div>

                {/* Availability */}
                <div className="mb-12">
                    <h2 className="mb-6 text-2xl font-bold">Schedule</h2>
                    <div className="space-y-6">
                        {availability.map((day) => (
                            <div key={day.day} className="flex flex-col py-2 md:flex-row md:items-center md:justify-between">
                                <div className="mb-1 font-semibold text-black md:mb-0 md:mb-3 md:w-32">{day.day}</div>
                                <div className="flex flex-wrap gap-1 md:gap-3">
                                    {day.slots.length > 0 ? (
                                        day.slots.map((slot) => (
                                            <button
                                                key={slot}
                                                className="border-muted-foreground/20 rounded-2xl border-2 px-4 py-2 text-sm font-medium"
                                            >
                                                {slot}
                                            </button>
                                        ))
                                    ) : (
                                        <span className="text-sm text-black">Not available</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-muted-foreground/20 mt-6 rounded-2xl border-2 p-4">
                        <p className="text-sm text-black">
                            <Clock className="mr-2 inline h-4 w-4" />
                            Times shown are in CAT (Central Africa Time). Book a session to confirm your preferred time.
                        </p>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mb-12">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-black">Reviews ({tutor.reviews})</h2>
                    </div>

                    <div className="space-y-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="pb-8 last:pb-0">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-12 w-12 border border-gray-200">
                                            <AvatarFallback className="border bg-white text-black">
                                                {review.studentName
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold text-black">{review.studentName}</div>
                                            <div className="text-sm text-black">{review.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                                </div>
                                <p className="leading-relaxed text-black">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

function ActionButtons() {
    return (
        <>
            <div className={'mb-8 flex flex-col gap-2 md:flex-row'}>
                <Button className={'w-full md:w-fit'}>Book a lesson</Button>
                <Button variant={'outline'} className={'w-full md:w-fit'}>
                    Message
                </Button>
            </div>
        </>
    );
}
