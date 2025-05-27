import StudentNavigation from '@/components/student-navigation';

import { EmptyState } from '@/components/empty-state';
import { Link } from '@inertiajs/react';
import React from 'react';
import { RiFlashlightFill, RiSearchLine, RiVideoOnLine, RiWalletLine } from 'react-icons/ri';

export default function StudentDashboard() {
    // Get time of day for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Morning';
        if (hour < 18) return 'Afternoon';
        return 'Evening';
    };

    const quickActions = [
        {
            path: '/student/find-a-tutor',
            label: 'Find a tutor',
            icon: <RiSearchLine size={20} />,
        },
        {
            path: '/student/lessons',
            label: 'View my lessons',
            icon: <RiVideoOnLine size={20} />,
        },
        {
            path: '/student/wallet',
            label: 'Recharge wallet',
            icon: <RiWalletLine size={20} />,
        },
    ];

    return (
        <main className={'mx-auto my-4 w-11/12 max-w-4xl space-y-4'}>
            <h1 className={'font-title text-3xl uppercase md:text-4xl'}>{getGreeting()} Thotholani</h1>

            <section className={'flex h-full gap-4'}>
                <div className={'bg-muted hover: col-span-1 h-30 w-full rounded-2xl p-6 transition-all md:h-50 md:w-50'}>
                    <span className={'flex items-center gap-2'}>
                        <h1 className={'font-title text-3xl uppercase'}>0</h1>
                        <RiFlashlightFill className={'text-violet-500'} size={24} />
                    </span>

                    <p className={'font-medium'}>Learning streak</p>
                </div>
            </section>

            <section className={'space-y-4'}>
                <p className={'font-medium'}>Quick actions</p>

                {quickActions.map((action) => (
                    <Link
                        href={action.path}
                        key={action.path}
                        className={
                            'border-2-muted-foreground/20 flex items-center gap-4 rounded-md border-2 p-4 transition-all duration-300 hover:cursor-pointer hover:rounded-3xl'
                        }
                    >
                        {action.icon} <p className={'font-medium'}>{action.label}</p>
                    </Link>
                ))}
            </section>

            <section>
                <EmptyState
                    title={'No lessons yet'}
                    description={"It looks like you haven't scheduled any lessons yet"}
                    actionLabel={'Find a tutor'}
                    actionPath={'/student/find-a-tutor'}
                    imageSrc={'/no-lessons-2.png'}
                />
            </section>
        </main>
    );
}

StudentDashboard.layout = (page: React.ReactNode) => <StudentNavigation children={page} />;
