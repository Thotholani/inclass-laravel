import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import MarketingLayout from '@/layouts/marketing-layout';
import { ChevronDownIcon, Search } from 'lucide-react';
import { useId, useState } from 'react';

export default function FindTutorPage() {
    // Available options for filters
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Spanish', 'French', 'Computer Science'];
    const levels = ['kindergarten', 'primary', 'secondary', 'undergraduate', 'postgraduate'];
    const languages = ['english', 'french', 'cibemba', 'chinyanja', 'silozi', 'chitonga'];
    // const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    // const hours = Array.from({ length: 24 }, (_, i) => i);

    const id = useId();

    const items = [
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Saturday' },
        { value: '7', label: 'Sunday' },
    ];

    const [value, setValue] = useState([25, 75]);

    return (
        <div className="container mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h1 className="font-title mb-4 text-4xl uppercase md:text-5xl">Find a Tutor</h1>
                {/*<p className="text-muted-foreground mx-auto max-w-3xl text-xl">Connect with expert tutors who can help you master any subject</p>*/}
            </div>

            {/* Search and Filter UI */}
            <div className="mx-auto mb-8 max-w-4xl">
                <form method="GET" action="/student/tutors" role="search" className="space-y-4">
                    {/* Search Bar */}

                    <div className={'flex gap-4'}>
                        <div className="relative w-full">
                            <Search size={16} className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
                            <Input type="search" name="q" placeholder="Search by subject, name, or keyword..." className="w-full rounded-xl pl-10" />
                        </div>
                        <Button type="submit" className="">
                            <Search className="block h-4 w-4 md:mr-2 md:hidden" />
                            <div className={'hidden md:block'}>Search</div>
                        </Button>
                    </div>

                    <div className={'flex gap-2'}>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Subject</SelectLabel>
                                    {subjects.map((subject) => (
                                        <SelectItem key={subject} value={subject} className={'capitalize'}>
                                            {subject}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className={'capitalize'}>
                                    <SelectLabel>Education Level</SelectLabel>
                                    {levels.map((level) => (
                                        <SelectItem key={level} value={level} className={'capitalize'}>
                                            <span className={'capitalize'}>{level}</span>
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    Languages <ChevronDownIcon className="-me-1" size={16} aria-hidden="true" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="">
                                <div className="grid gap-3">
                                    {languages.map((language, index) => (
                                        <div className="flex items-center gap-2">
                                            <Checkbox id={`${index}-1`} />
                                            <Label htmlFor={`${index}-1`} className={'capitalize'}>
                                                {language}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    Price <ChevronDownIcon className="-me-1" size={16} aria-hidden="true" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="">
                                <div className="grid gap-3">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-2">
                                            <Label className="leading-6">Price range (K/hour)</Label>
                                            <output className="text-sm font-medium tabular-nums">
                                                K{value[0]} - K{value[1]}
                                            </output>
                                        </div>
                                        <Slider value={value} onValueChange={setValue} aria-label="Price range input" min={30} max={500} />
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    Days <ChevronDownIcon className="-me-1" size={16} aria-hidden="true" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className={'w-fit'}>
                                <fieldset className="space-y-4">
                                    <legend className="text-foreground text-sm leading-none font-medium">Availability</legend>
                                    <div className="flex gap-1.5">
                                        {items.map((item) => (
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
                                </fieldset>
                            </PopoverContent>
                        </Popover>
                    </div>
                </form>
            </div>

            {/*<div className="py-12 text-center">*/}
            {/*    <h3 className="mb-2 text-xl font-semibold">No tutors found</h3>*/}
            {/*    <p className="text-muted-foreground mb-6">Try adjusting your filters or search query to find more tutors.</p>*/}
            {/*    <Button className="bg-black text-white">Reset Filters</Button>*/}
            {/*</div>*/}
        </div>
    );
}

FindTutorPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
