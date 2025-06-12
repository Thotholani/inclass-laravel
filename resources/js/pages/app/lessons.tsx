import AppNavigation from '@/components/app-navigation';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';
import { RiArrowRightLine, RiCloseLine, RiVideoOnLine } from 'react-icons/ri';

export default function StudentLessonsPage() {
    return (
        <main className={'mx-auto w-11/12 max-w-4xl space-y-4'}>
            <div className={'mb-16 flex justify-between'}>
                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>My lessons</h1>

                <Button asChild variant={'link'} className={'text-muted-foreground px-0'}>
                    <Link href={'/student/lessons/history'} className={'flex items-center'}>
                        View past lessons <RiArrowRightLine size={20} />
                    </Link>
                </Button>
            </div>

            <div className={'border-muted-foreground/20 flex justify-between rounded-2xl border-2 p-4'}>
                <div>
                    <h1 className={'mb-1 text-lg font-bold'}>Mathematics with Jack Daniels</h1>
                    <p className={'text-md mb-1 font-medium'}>12 December 2025, 11:30 AM</p>
                </div>

                <div className={'flex w-fit flex-col gap-2'}>
                    <Button size={'sm'} variant={'destructive'} className={'text-primary-foreground'}>
                        <RiCloseLine size={20} />
                        Cancel
                    </Button>
                    <Button size={'sm'}>
                        <RiVideoOnLine size={20} />
                        Join
                    </Button>
                </div>
            </div>
        </main>
    );
}

StudentLessonsPage.layout = (page: React.ReactNode) => <AppNavigation children={page} />;
