import AppNavigation from '@/components/app-navigation';
import { Button } from '@/components/ui/button';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import {
    RiCloseLine,
    RiFlashlightFill,
    RiMoneyDollarCircleFill,
    RiQuestionLine,
    RiSearchLine,
    RiVideoOnLine,
    RiWalletLine,
} from 'react-icons/ri'; /* ------------------------------------------------------------------------
 * 1.  Role-based dictionaries
 * --------------------------------------------------------------------- */

/* ------------------------------------------------------------------------
 * 1.  Role-based dictionaries
 * --------------------------------------------------------------------- */
const CARD_BY_ROLE = {
    student: {
        icon: <RiFlashlightFill className="text-violet-500" size={24} />,
        label: 'Learning streak',
        value: 0,
    },
    tutor: {
        icon: <RiMoneyDollarCircleFill className="text-[#0ba35d]" size={24} />,
        label: 'Wallet balance',
        value: 0,
    },
} satisfies Record<'student' | 'tutor', { icon: JSX.Element; label: string; value: number }>;

const ACTIONS_BY_ROLE = {
    student: [
        { path: '/find-a-tutor', label: 'Find a tutor', icon: <RiSearchLine size={20} /> },
        { path: '/lessons', label: 'View my lessons', icon: <RiVideoOnLine size={20} /> },
        { path: '/wallet', label: 'Recharge wallet', icon: <RiWalletLine size={20} /> },
    ],
    tutor: [
        { path: '/tutorial', label: 'Learn about Inclass', icon: <RiQuestionLine size={20} /> },
        { path: '/lessons', label: 'View my lessons', icon: <RiVideoOnLine size={20} /> },
        { path: '/wallet', label: 'Withdraw from wallet', icon: <RiWalletLine size={20} /> },
    ],
} satisfies Record<'student' | 'tutor', { path: string; label: string; icon: JSX.Element }[]>;

/* ------------------------------------------------------------------------
 * 2.  Dashboard
 * --------------------------------------------------------------------- */
export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const role = auth.user.role as 'student' | 'tutor'; // narrow the type once

    const firstName = auth.user.name.trim().split(/\s+/)[0] ?? '';

    const greeting = (() => {
        const h = new Date().getHours();
        return h < 12 ? 'Morning' : h < 18 ? 'Afternoon' : 'Evening';
    })();

    const card = CARD_BY_ROLE[role];
    const actions = ACTIONS_BY_ROLE[role];

    return (
        <main className="mx-auto my-4 w-11/12 max-w-4xl space-y-4">
            <h1 className="font-title text-3xl uppercase md:text-4xl">
                {greeting} {firstName}
            </h1>

            {/* card same component, fed by lookup */}
            <section className="flex h-full flex-col gap-4 md:flex-row">
                {/*<img*/}
                {/*    src={role === 'student' ? '/dash-2.png' : '/dash.png'}*/}
                {/*    alt={'Woman outside on computer'}*/}
                {/*    className={'h-20 w-full rounded-2xl object-cover object-bottom md:h-50 md:w-fit'}*/}
                {/*/>*/}

                <div className="bg-muted col-span-1 h-30 w-full rounded-2xl p-6 transition-all md:h-50 md:w-50">
                    <span className="flex items-center gap-2">
                        <h1 className="font-title text-3xl uppercase">{card.value}</h1>
                        {card.icon}
                    </span>
                    <p className="font-medium">{card.label}</p>
                </div>
            </section>

            {/* quick actions just map over the role-filtered list */}
            <section className="space-y-4">
                <p className="font-medium">Quick actions</p>

                {actions.map((a) => (
                    <Link
                        key={a.path}
                        href={a.path}
                        className="hover:bg-primary hover:text-primary-foreground bg-muted/90 flex items-center gap-4 rounded-md p-4 transition-all duration-300 hover:cursor-pointer hover:rounded-3xl"
                    >
                        {a.icon}
                        <p className="font-medium">{a.label}</p>
                    </Link>
                ))}
            </section>

            {/* empty-state section stays unchanged */}
            <section>
                <p className="mb-4 font-medium">Upcoming lessons</p>
                <div className={'border-muted-foreground/20 flex w-full gap-4 rounded-md border-2 p-4'}>
                    {/*<img src={'/subjects/math.png'} alt={'lesson icon'} className={'h-16 w-16'} />*/}

                    <div className={'flex w-full justify-between'}>
                        <div>
                            <h1 className={'text-2xl font-semibold'}>Mathematics</h1>
                            <h2 className={'font-medium'}>Thotholani Tembo</h2>
                            <h2 className={'text-sm font-medium'}>Wednesday 18 June 2025</h2>
                        </div>

                        <div className={'flex w-fit flex-col gap-2'}>
                            <Button>
                                <RiVideoOnLine />
                                <span className={'hidden md:block'}>Join Lesson</span>
                            </Button>
                            <Button variant={'secondary'} className={'hover:bg-muted-foreground/10'}>
                                <RiCloseLine />
                                <span className={'hidden md:block'}>Cancel Lesson</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/*<EmptyState title="No lessons yet" description="It looks like you haven't scheduled any lessons yet" />*/}
            </section>
        </main>
    );
}

/* optional layout wrapper */
Dashboard.layout = (page: React.ReactNode) => <AppNavigation>{page}</AppNavigation>;
