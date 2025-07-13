import AppNavigation from '@/components/app-navigation';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import dayjs from 'dayjs';
import { RiArrowRightLine, RiCloseLine, RiVideoOnLine } from 'react-icons/ri';

interface Lesson {
    id: number;
    date: string; // "2025-01-14"
    time: string; // "14:00:00"
    subject: string;
    tutor: { user: { name: string } };
    status: string;
}

export default function StudentLessonsPage({ lessons }: { lessons: Lesson[] }) {
    return (
        <main className="mx-auto w-11/12 max-w-4xl space-y-4">
            <div className="mb-16 flex justify-between">
                <h1 className="font-title text-3xl uppercase md:text-4xl">My lessons</h1>

                <Button asChild variant="link" className="text-muted-foreground px-0">
                    <Link href="/lessons/history" className="flex items-center gap-1">
                        View past lessons <RiArrowRightLine size={20} />
                    </Link>
                </Button>
            </div>

            {lessons.map((lesson) => {
                /* build a JS Date only once per row */
                const start = dayjs(`${lesson.date}T${lesson.time}`);

                const formattedDate = start.format('ddd DD MMM YYYY'); //
                const formattedTime = start.format('HH:mm'); // "14:00"

                return (
                    <div
                        key={lesson.id} /* ← add key */
                        className="border-left-violet-500 border-muted-foreground/20 flex w-full gap-4 rounded-2xl border-2 p-4"
                    >
                        {/*<img src={`/subjects/${lesson.subject}.png`} alt={`${lesson.subject} icon`} className="h-16 w-16" />*/}

                        <div className="flex w-full justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">{lesson.subject}</h1>
                                <h2 className="font-medium">{lesson.tutor.user.name}</h2>
                                <h2 className="text-sm font-medium">
                                    {formattedDate} at {formattedTime}
                                </h2>
                            </div>

                            <div className="flex w-fit flex-col gap-2">
                                <Button size="sm">
                                    <RiVideoOnLine size={20} />
                                    Join
                                </Button>
                                {/* Disable cancel once "completed" or "canceled" */}
                                <Button size="sm" variant="secondary" className="hover:bg-muted-foreground/50" disabled={lesson.status !== 'pending'}>
                                    <RiCloseLine size={20} />
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    );
}

StudentLessonsPage.layout = (page: React.ReactNode) => <AppNavigation>{page}</AppNavigation>;
