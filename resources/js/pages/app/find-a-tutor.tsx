import AppNavigation from '@/components/app-navigation';
import { EmptyState } from '@/components/empty-state';
import InertiaPagination from '@/components/inertia-pagination';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';
import { Link } from '@inertiajs/react';
import { useId, useState } from 'react';
import { RiEqualizerLine, RiStarFill, RiStarLine } from 'react-icons/ri';

export default function FindTutorPage({ tutors }) {
    const subjects = [
        'Mathematics',
        'English',
        'Biology',
        'Chemistry',
        'Physics',
        'History',
        'Geography',
        'Civics',
        'Religious Education',
        'Literature',
        'Computer Studies',
        'Commerce',
        'Accounting',
        'Economics',
        'Business Studies',
        'Environmental Science',
        'Home Economics',
        'Agriculture',
    ];
    const [value, setValue] = useState([100, 200]);
    const levels = ['kindergarten', 'primary', 'secondary', 'undergraduate', 'postgraduate'];
    const languages = ['english', 'french', 'cibemba', 'chinyanja', 'silozi', 'chitonga'];
    const days = [
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Saturday' },
        { value: '7', label: 'Sunday' },
    ];

    const id = useId();

    const meta = {
        current_page: tutors.current_page,
        last_page: tutors.last_page,
    };

    return (
        <main className={'mx-auto my-4 w-11/12 max-w-4xl space-y-4'}>
            <section className={'space-y-4'}>
                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>Find your perfect tutor</h1>
                <form>
                    {/*<Input className={'bg-muted border-none'} placeholder={'Search by name, subject or keyword'} />*/}

                    <div>
                        <Accordion type="single" collapsible className={'border-muted-foreground/20 mt-4 rounded-2xl border-2 px-4'}>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className={'cursor-pointer hover:no-underline'}>
                                    <div className={'flex gap-2'}>
                                        <RiEqualizerLine size={20} />
                                        Filters
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className={'flex flex-col gap-4'}>
                                        {/*filters*/}
                                        <div className={'space-y-4'}>
                                            <div>
                                                <h1 className={'font-semibold'}>
                                                    Subject <span className={'text-red-600'}>*</span>
                                                </h1>
                                                <ScrollArea className="h-24 w-full">
                                                    <RadioGroup defaultValue="" className="p-2">
                                                        {subjects.map((subject) => (
                                                            <div key={subject} className="flex items-center space-x-2">
                                                                <RadioGroupItem value={subject} id={subject} />
                                                                <Label htmlFor={subject} className="text-sm">
                                                                    {subject}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </ScrollArea>
                                            </div>

                                            <div>
                                                <h1 className={'font-semibold'}>Price Range</h1>
                                                <div className="space-y-4">
                                                    <Slider
                                                        className={'mt-4'}
                                                        value={value}
                                                        onValueChange={setValue}
                                                        aria-label="Price range input"
                                                        min={30}
                                                        max={500}
                                                    />
                                                    <div className="flex items-center justify-between gap-2">
                                                        <output className="text-sm font-medium tabular-nums">
                                                            K{value[0]} - K{value[1]}
                                                        </output>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className={'font-semibold'}>Learning Level</h1>
                                                <ScrollArea className="h-24 w-full">
                                                    <RadioGroup defaultValue="Mathematics" className="p-2">
                                                        {levels.map((level) => (
                                                            <div key={level} className="flex items-center space-x-2">
                                                                <RadioGroupItem value={level} id={level} />
                                                                <Label htmlFor={level} className="text-sm capitalize">
                                                                    {level}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </ScrollArea>
                                            </div>

                                            <div>
                                                <h1 className={'font-semibold'}>Language</h1>
                                                <div className="mt-2 grid grid-cols-2 gap-3 px-2">
                                                    {languages.map((language) => (
                                                        <div key={language} className="flex items-center space-x-2">
                                                            <Checkbox id={language} />
                                                            <Label htmlFor={language} className="capitalize">
                                                                {language}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className={'font-semibold'}>Availability</h1>
                                                <div className={'mt-2 flex gap-4'}>
                                                    {days.map((item) => (
                                                        <label
                                                            key={`${id}-${item.value}`}
                                                            className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
                                                        >
                                                            <Checkbox
                                                                id={`${id}-${item.value}`}
                                                                value={item.value}
                                                                className="sr-only after:absolute after:inset-0"
                                                            />
                                                            <span aria-hidden="true" className="text-sm font-medium">
                                                                {item.label[0]}
                                                            </span>
                                                            <span className="sr-only">{item.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'flex justify-between'}>
                                            <Button variant={'outline'} className={'hover:bg-card/70'}>
                                                Clear filters
                                            </Button>
                                            <Button>Search</Button>
                                        </div>
                                        <p className={'flex items-center gap-2 text-xs text-red-600'}>Fields marked with * are mandatory</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </form>
            </section>

            {/*<section>*/}
            {/*    <div className={'mt-24 w-full text-center'}>*/}
            {/*        <h2 className={'text-lg font-medium'}>Use the filters above to search for tutors.</h2>*/}
            {/*        <p className={'text-muted-foreground text-sm font-medium'}>Select your preferences and click "Apply Filters" to get started.</p>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {tutors.data.length < 1 ? (
                <EmptyState title={'No tutors'} description={"We couldn't find any tutors matching that search criteria"} />
            ) : (
                <>
                    <section className={'space-y-2'}>
                        {tutors.data.map((tutor) => {
                            const trimmedBio = tutor.bio.substring(0, 70);

                            return (
                                <Link
                                    href={'/find-a-tutor/' + tutor.id}
                                    key={tutor.id}
                                    className={
                                        'hover:bg-muted/90 flex justify-between rounded-3xl border-2 p-4 transition-all duration-300 hover:cursor-pointer hover:rounded-4xl active:rounded-4xl'
                                    }
                                >
                                    <div className={'flex items-center gap-4'}>
                                        <Avatar className="h-full w-20 overflow-hidden rounded-2xl">
                                            <AvatarImage src={tutor.user.image} className="h-full w-full object-cover" />
                                            <AvatarFallback>TU</AvatarFallback>
                                        </Avatar>

                                        <div className={'max-w-sm'}>
                                            <h1 className={'text-lg font-semibold'}>{tutor.user.name}</h1>
                                            <div className={'flex'}>
                                                <RiStarFill className={'text-primary'} />
                                                <RiStarFill className={'text-primary'} />
                                                <RiStarFill className={'text-primary'} />
                                                <RiStarFill className={'text-primary'} />
                                                <RiStarLine className={'text-muted-foreground'} />
                                                <h2 className={'ml-2 text-sm font-semibold'}>
                                                    {tutor.rating} ({tutor.reviews})
                                                </h2>
                                            </div>
                                            <p className={'text-sm font-medium'}>
                                                {trimmedBio} ... <span className={'text-muted-foreground underline'}>More</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className={'font-title text-3xl uppercase md:text-4xl'}>{tutor.rate}</h1>
                                        <p className={'text-xs font-medium'}>kwacha per hour</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </section>
                    <InertiaPagination links={tutors.links} meta={meta} />
                </>
            )}
        </main>
    );
}

FindTutorPage.layout = (page: React.ReactNode) => <AppNavigation children={page} />;
