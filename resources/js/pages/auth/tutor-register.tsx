import { Link, useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';

import AvailabilityPicker, { WeekSchedule } from '@/components/availability-picker';
import AmountInput from '@/components/comp-29';
import MarketingLogo from '@/components/marketing-logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MultipleSelector from '@/components/ui/multiselect';
import { PhoneNumberInput } from '@/components/ui/phone-number-input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import QualificationDropzone from '@/components/upload-dropzone';
import { blankWeek } from '@/lib/utils';
import { SharedData } from '@/types';
import {
    Atom,
    Bed,
    Binary,
    Calculator,
    ChartArea,
    Check,
    Clapperboard,
    Computer,
    Dumbbell,
    Earth,
    Feather,
    Flag,
    HandCoins,
    Landmark,
    Palette,
    Percent,
    PiggyBank,
    Pyramid,
    Scale,
    ScrollText,
    Stethoscope,
    Store,
    Tractor,
    Wrench,
} from 'lucide-react';
import { MdOutlineVolcano } from 'react-icons/md';
import {
    RiArrowRightSLine,
    RiBook2Line,
    RiChatQuoteLine,
    RiCheckLine,
    RiCrossLine,
    RiErrorWarningLine,
    RiPlantLine,
    RiTestTubeLine,
    RiTranslate2,
} from 'react-icons/ri';

const LOCAL_KEY = 'tutor-register-draft';

export default function TutorRegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            title: 'Personal',
            description:
                "Let's start with the basics—your legal name, mobile money number for payouts, subject you teach and languages you speak. This info (except your number) appears on your public profile and students find you.",
        },
        {
            title: 'Photo',
            description:
                'Choose a photo for your profile. Students are far more likely to book a lesson when they can see who they’ll be learning from.',
        },
        {
            title: 'Description',
            description: 'Tell students who you are and why they should learn with you.',
        },
        {
            title: 'Qualification',
            description:
                'Upload a photo or PDF of your degree, diploma, transcript (if you are a student that wants to tutor) or other teaching credentials. This helps show us that you are qualified to teach. Once reviewed your file will be deleted',
        },
        {
            title: 'Availability',
            description: 'Set the days and time slots when you’re available to teach. Students will only see times you mark as open.',
        },
        {
            title: 'Price',
            description:
                'Choose the subject(s) you’ll tutor and set your hourly rate. You can update these later if your schedule or pricing changes.',
        },
    ];
    const subjects = [
        // Secondary school / Zambian syllabus
        {
            name: 'Mathematics',
            icon: <Calculator />,
        },
        { name: 'English', icon: <RiTranslate2 /> },
        { name: 'Biology', icon: <RiPlantLine /> },
        { name: 'Chemistry', icon: <RiTestTubeLine /> },
        { name: 'Physics', icon: <Atom /> },
        { name: 'Geography', icon: <MdOutlineVolcano /> },
        { name: 'History', icon: <Pyramid /> },
        { name: 'Civic Education', icon: <ScrollText /> },
        { name: 'Religious Education', icon: <RiCrossLine /> },
        { name: 'Literature in English', icon: <Feather /> },
        { name: 'Commerce', icon: <HandCoins /> },
        { name: 'Principles of Accounts', icon: <Percent /> },
        { name: 'Business Studies', icon: <Store /> },
        { name: 'Agricultural Science', icon: <Tractor /> },
        { name: 'Computer Studies', icon: <Computer /> },
        { name: 'Art and Design', icon: <Palette /> },
        { name: 'Physical Education', icon: <Dumbbell /> },
        // Broader undergrad-level categories
        { name: 'Economics', icon: <ChartArea /> },
        { name: 'Engineering', icon: <Wrench /> },
        { name: 'Medical Sciences', icon: <Stethoscope /> },
        { name: 'Law', icon: <Scale /> },
        { name: 'Social Sciences', icon: <Landmark /> },
        { name: 'Political Science', icon: <Flag /> },
        { name: 'Environmental Studies', icon: <Earth /> },
        { name: 'Computer Science', icon: <Binary /> },
        { name: 'Hospitality', icon: <Bed /> },
        { name: 'Banking and Finance', icon: <PiggyBank /> },
        { name: 'Communication and Media', icon: <Clapperboard /> },
    ];
    const educationLevels = [
        { value: 'primary', label: 'Primary School' },
        { value: 'secondary', label: 'High School' },
        { value: 'college', label: 'College/University' },
        { value: 'adult', label: 'Adult Education' },
    ];
    const imageGuidelines = [
        'You should be facing forward',
        'Frame your head and shoulders',
        'You should be centered and upright',
        'You should be the only person in the photo',
        'Use a colored photo with high resolution and no filters',
        'Avoid logos or contact information',
    ];
    const languages = [
        {
            label: 'English',
            value: 'English',
        },
        {
            label: 'Cibemba',
            value: 'Cibemba',
        },
        {
            label: 'Nyanja',
            value: 'Nyanja',
        },
        {
            label: 'Chichewa',
            value: 'Chichewa',
        },
        {
            label: 'Silozi',
            value: 'Silozi',
        },
        {
            label: 'French',
            value: 'French',
        },
        {
            label: 'Mandarin',
            value: 'Mandarin',
        },
    ];

    function getInitialValues(authName: string) {
        const base = {
            image: null,
            name: authName,
            hourly_rate: 0,
            languages: [] as string[],
            education_levels: [] as string[],
            subject: '',
            phone: '',
            bio: '',
            qualification: null,
            schedule: blankWeek() as WeekSchedule,
            agreed_to_terms: false,
        };

        try {
            const stored = JSON.parse(localStorage.getItem(LOCAL_KEY) ?? 'null');
            if (stored && typeof stored === 'object') {
                // merge only matching keys
                Object.keys(base).forEach((k) => {
                    if (k in stored) (base as any)[k] = stored[k];
                });
            }
        } catch {
            /* ignore bad JSON */
        }

        return base;
    }

    const { auth } = usePage<SharedData>().props;

    const { data, setData, errors, processing, post } = useForm(getInitialValues(auth.user.name));

    const [preview, setPreview] = useState<string | null>(null);

    const [pageError, setPageError] = useState<string | null>(null);

    /* ---------- localStorage: persist on every change ----------------- */
    useEffect(() => {
        const safe = JSON.stringify(data, (key, value) =>
            key === 'agreed_to_terms' || // ⬅︎ skip checkbox
            value instanceof File ||
            value instanceof Blob ||
            typeof value === 'function'
                ? undefined
                : value,
        );
        localStorage.setItem(LOCAL_KEY, safe);
    }, [data]);

    useEffect(() => {
        return () => {
            // revoke when component unmounts OR when preview changes next time
            if (import.meta.env.PROD && preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const COMMISSION = 0.2;

    const gross = Number(data.hourly_rate) || 0;
    const commission = gross * COMMISSION;
    const net = gross - commission;

    function goToPreviousPage(currentPage: number) {
        if (currentPage <= 0) {
            return null;
        }
        return setCurrentStep(currentPage - 1);
    }

    function goToNextPage() {
        if (currentStep >= steps.length - 1) return;
        if (!validateStep(currentStep)) return; // <- guard
        setCurrentStep(currentStep + 1);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setData('image', file); // your existing useForm setter
        setPreview(URL.createObjectURL(file));
    }

    const formatLanguages = (langs: string[]): string => {
        if (langs.length === 0) return '';
        if (langs.length === 1) return langs[0];
        if (langs.length === 2) return `${langs[0]} and ${langs[1]}`;
        return `${langs.slice(0, -1).join(', ')} and ${langs.at(-1)}`;
    };

    /* Reset “I agree” every time the user navigates to step 5 ------------- */
    useEffect(() => {
        if (currentStep === 5 && data.agreed_to_terms) {
            setData('agreed_to_terms', false); // will also re-render the button text
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    /** Returns true if the fields for `step` are valid */
    function validateStep(stepIndex: number): boolean {
        switch (stepIndex) {
            /* ─────────────── Step 0 – Personal ─────────────── */
            case 0: {
                if (!data.name.trim()) {
                    setPageError('Enter your full name');
                    return false;
                }
                if (!data.phone.trim() || data.phone.trim().length < 13) {
                    setPageError('Enter a mobile money number with 10 digits');
                    return false;
                }
                if (!data.subject) {
                    setPageError('Select a subject you teach');
                    return false;
                }
                if (!data.education_levels.length) {
                    setPageError('Pick at least one education level');
                    return false;
                }
                if (!data.languages.length) {
                    setPageError('Select at least one language');
                    return false;
                }
                setPageError(null);
                return true;
            }

            /* ─────────────── Step 1 – Photo ────────────────── */
            case 1:
                if (!data.image) {
                    setPageError('Please upload a profile photo');
                    return false;
                }
                setPageError(null);
                return true;

            /* ─────────────── Step 2 – Description ──────────── */
            case 2:
                if (data.bio.trim().length < 150 || data.bio.trim().length > 800) {
                    setPageError('Write a brief description between 150 and 800 characters');
                    return false;
                }
                setPageError(null);
                return true;

            /* ─────────────── Step 3 – Qualification ────────── */
            case 3:
                if (!data.qualification) {
                    setPageError('Upload a qualification document');
                    return false;
                }
                setPageError(null);
                return true;

            /* ─────────────── Step 4 – Availability ─────────── */
            case 4: {
                const anyActive = Object.values(data.schedule).some((d) => d.isActive);
                if (!anyActive) {
                    setPageError('Set at least one available time slot');
                    return false;
                }
                setPageError(null);
                return true;
            }

            /* ─────────────── Step 5 – Price (nothing to block) */
            default:
                setPageError(null);
                return true;
        }
    }

    function submit(e: React.FormEvent) {
        e.preventDefault();

        console.log(data);

        // post('/tutor-register', {
        //     forceFormData: true,
        //     onSuccess: () => localStorage.removeItem(LOCAL_KEY),
        // });
    }

    return (
        <div className="bg-background min-h-screen">
            <header className="flex items-center justify-between p-6">
                <MarketingLogo />
                <Button variant="secondary" size="lg" className="rounded-full">
                    <Link href="/select-role">Back to role selection</Link>
                </Button>
            </header>

            <div className="scrollbar-hide mx-auto hidden w-9/12 max-w-5xl flex-nowrap items-center gap-2 overflow-x-auto md:flex md:justify-between md:overflow-visible">
                {steps.map((step, index) => {
                    const completed = currentStep > index;
                    return (
                        <div key={step.title} className="flex shrink-0 items-center gap-2">
                            {/* circle */}
                            <span
                                className={`flex size-10 items-center justify-center rounded-2xl font-medium ${
                                    completed
                                        ? 'bg-primary text-primary-foreground'
                                        : index === currentStep
                                          ? 'bg-primary text-primary-foreground'
                                          : 'bg-muted text-muted-foreground'
                                }`}
                            >
                                {completed ? <RiCheckLine /> : index + 1}
                            </span>

                            {/* label: hidden on <640px */}
                            <span
                                className={`hidden font-medium whitespace-nowrap ${index === currentStep ? 'text-primary' : 'text-muted-foreground'} sm:block`}
                            >
                                {step.title}
                            </span>

                            {/* arrow except after last */}
                            {index < steps.length - 1 && <RiArrowRightSLine className="text-muted-foreground" />}
                        </div>
                    );
                })}
            </div>

            <div className="mx-auto max-w-6xl md:hidden">
                <p className="text-muted-foreground py-3 text-center text-xs">
                    Step {currentStep + 1} of {steps.length}
                </p>

                {/* progress bar */}
                <div className="bg-muted-foreground/40 h-1 w-full">
                    <div className="bg-primary h-full rounded-2xl transition-all" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
                </div>
            </div>

            <main className="container mx-auto max-w-2xl px-4 py-8">
                <div>
                    <h1 className="font-title mb-4 text-center text-3xl uppercase md:text-4xl">{steps[currentStep].title}</h1>
                    <p className="text-muted-foreground mb-8 text-center">{steps[currentStep].description}</p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    {pageError && (
                        <div className={'text-primary-foreground bg-destructive/80 flex items-center gap-2 rounded-2xl p-4'}>
                            <RiErrorWarningLine size={24} /> {pageError}
                        </div>
                    )}

                    {currentStep === 0 && (
                        // Personal Information
                        <div className={'space-y-6'}>
                            <div className={'space-y-2'}>
                                <Label>Full name</Label>
                                <Input placeholder={'John Doe'} type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                <p className={'text-destructive text-xs'}>{errors.name}</p>
                            </div>

                            <div className={'space-y-2'}>
                                <Label>Mobile Number</Label>
                                <PhoneNumberInput
                                    value={data.phone}
                                    onChange={(value) => setData('phone', value)} // ✅ Correct: value is string
                                    defaultCountry="ZM"
                                    className={'rounded-none'}
                                    placeholder="Enter your phone number"
                                />
                                <p className={'text-muted-foreground text-xs'}>
                                    {errors.phone
                                        ? errors.phone
                                        : 'Provide the Airtel or MTN mobile-money number where you’ll receive your earnings. Make sure it’s registered for mobile-money and that you have access to it.'}
                                </p>
                            </div>

                            {/* Subjects */}
                            <div className={'space-y-2'}>
                                <Label>Subject you teach</Label>
                                <Select onValueChange={(value) => setData('subject', value)} value={data.subject}>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select a subject you will tutor on Inclass" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Subjects</SelectLabel>
                                            {subjects.map((subject) => (
                                                <SelectItem key={subject.name} value={subject.name}>
                                                    {subject.icon}
                                                    {subject.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <p className={'text-destructive text-xs'}>{errors.subject}</p>
                            </div>

                            <div className="space-y-2">
                                <Label className="block">Education Levels You Specialize In</Label>
                                <div className="flex flex-col gap-2">
                                    {educationLevels.map((level) => (
                                        <div key={level.value} className="flex items-center gap-2">
                                            <Checkbox
                                                id={`edu-${level.value}`}
                                                checked={data.education_levels.includes(level.value)}
                                                onCheckedChange={(checked) => {
                                                    if (checked) {
                                                        setData('education_levels', [...data.education_levels, level.value]);
                                                    } else {
                                                        setData(
                                                            'education_levels',
                                                            data.education_levels.filter((v) => v !== level.value),
                                                        );
                                                    }
                                                }}
                                            />
                                            <Label className={'text-s font-normal'} htmlFor={`edu-${level.value}`}>
                                                {level.label}
                                            </Label>
                                        </div>
                                    ))}
                                </div>

                                <p className={'text-muted-foreground text-xs'}>
                                    {errors.education_levels
                                        ? errors.education_levels
                                        : 'Tick each level you’re comfortable tutoring. Choose at least one.'}
                                </p>
                            </div>

                            <div className={'space-y-2'}>
                                <Label>Languages you speak</Label>
                                <MultipleSelector
                                    value={data.languages.map((lang) => ({ value: lang, label: lang }))}
                                    defaultOptions={languages}
                                    placeholder="Select languages you can tutor in"
                                    onChange={(selectedOptions) => {
                                        const selectedValues = selectedOptions.map((opt) => opt.value);
                                        setData('languages', selectedValues);
                                    }}
                                    emptyIndicator={<p className="text-center text-sm">No languages found</p>}
                                />
                                <p className={'text-destructive text-xs'}>{errors.languages}</p>
                            </div>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div className={'space-y-2'}>
                            <Separator />

                            <div className={'my-6 flex gap-4'}>
                                {data.image ? (
                                    <img src={preview ?? undefined} className={'h-32 w-32 rounded-2xl object-cover'} />
                                ) : (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div
                                                className={
                                                    'bg-muted/80 text-muted-foreground flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed text-center font-semibold'
                                                }
                                            >
                                                JPG or PNG,max 5MB
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Click on the upload button below to upload your photo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )}

                                <div className={''}>
                                    <h1 className="font-title mb-2 text-3xl uppercase">{data.name}</h1>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <RiBook2Line size={16} /> Teaches {data.subject}
                                    </p>
                                    <p className="text-muted-foreground mb-8 flex items-start gap-2">
                                        <RiChatQuoteLine size={16} />
                                        {data.languages.length > 0 && (
                                            <>
                                                Speaks&nbsp;
                                                {formatLanguages(data.languages)}
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>

                            {errors.image && <p className={'text-destructive my-4 text-xs'}>{errors.image}</p>}

                            <Separator />

                            <div>
                                <Button type="button" onClick={() => inputRef.current?.click()} className="w-full cursor-pointer">
                                    {preview ? 'Change photo' : 'Upload photo'}
                                </Button>
                                <input ref={inputRef} id="photo" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
                            </div>

                            <h1 className={'text-lg font-semibold'}>What your photo needs</h1>
                            <div className="flex gap-2 sm:gap-3">
                                <div className="/* 1️⃣ same side padding as rest */ /* wrap if still too wide */ /* centre on phones, flush-left on ≥640 px */ flex w-full flex-wrap justify-center gap-2 px-4 sm:justify-start sm:gap-3">
                                    <img
                                        src="/sample-1.jpg"
                                        className="aspect-square max-w-[6rem] min-w-[4.5rem] flex-1 rounded-2xl object-cover"
                                        alt={'Profile sample image 1'}
                                    />
                                    <img
                                        src="/sample-2.jpg"
                                        className="aspect-square max-w-[6rem] min-w-[4.5rem] flex-1 rounded-2xl object-cover"
                                        alt={'Profile sample image 2'}
                                    />
                                    <img
                                        src="/sample-3.jpg"
                                        className="aspect-square max-w-[6rem] min-w-[4.5rem] flex-1 rounded-2xl object-cover"
                                        alt={'Profile sample image 3'}
                                    />
                                    <img
                                        src="/sample-4.jpg"
                                        className="aspect-square max-w-[6rem] min-w-[4.5rem] flex-1 rounded-2xl object-cover"
                                        alt={'Profile sample image 4'}
                                    />
                                </div>
                            </div>
                            <div className={'space-y-2'}>
                                {imageGuidelines.map((text) => (
                                    <p key={text} className={'flex items-center gap-2'}>
                                        <Check size={16} />
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className={'space-y-2'}>
                            <Textarea
                                className={'h-[200px]'}
                                placeholder={
                                    'Describe who you are, your teaching style and why you are the best fit for students. For example, you could say. Hello! My name is John and '
                                }
                                value={data.bio}
                                onChange={(event) => setData('bio', event.target.value)}
                            />
                            <p
                                className={`text-sm ${data.bio.trim().length < 150 || data.bio.trim().length > 800 ? 'text-destructive' : 'text-muted-foreground'}`}
                            >
                                {data.bio.trim().length}/800 characters
                            </p>

                            <p className={'text-muted-foreground text-xs'}>
                                {errors.bio
                                    ? errors.bio
                                    : 'Tell your potential students about your teaching style, experience, and one personal detail that helps students relate to you in a couple short paragraphs.'}
                            </p>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className={'space-y-2'}>
                            <QualificationDropzone value={data.qualification} onChange={(file) => setData('qualification', file)} />
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div>
                            <AvailabilityPicker value={data.schedule} onChange={(sched) => setData('schedule', sched)} />
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div className={'space-y-2'}>
                            <Label>Hourly Rate</Label>
                            <AmountInput
                                aria-label={'Hourly Rate'}
                                currency={'ZMW'}
                                minValue={10}
                                maxValue={500}
                                value={data.hourly_rate}
                                onChange={(value) => setData('hourly_rate', value)}
                            />
                            <p className={'text-muted-foreground text-xs'}>
                                {errors.hourly_rate
                                    ? errors.hourly_rate
                                    : 'Set an amount you will earn per hour of tutoring between 10.00 and 500.00 Zambian Kwacha. You can change this at any time and is subject to Inclass commission'}
                            </p>

                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is Inclass Commission?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4">
                                        <p>
                                            We take a small cut of your hourly earnings to improve the tutoring experience. Our commission is{' '}
                                            <strong>20%</strong>.
                                        </p>

                                        <div className="bg-muted/80 space-y-2 rounded-xl p-6">
                                            <div className="flex justify-between">
                                                <span>Gross hourly rate</span>
                                                <span>
                                                    {gross.toLocaleString('en-ZM', {
                                                        style: 'currency',
                                                        currency: 'ZMW',
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Commission (20 %)</span>
                                                <span>
                                                    -
                                                    {commission.toLocaleString('en-ZM', {
                                                        style: 'currency',
                                                        currency: 'ZMW',
                                                    })}
                                                </span>
                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex justify-between font-medium">
                                                <span>You take home</span>
                                                <span>
                                                    {net.toLocaleString('en-ZM', {
                                                        style: 'currency',
                                                        currency: 'ZMW',
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="flex items-start space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={data.agreed_to_terms}
                                    disabled={processing}
                                    onCheckedChange={(value) => setData('agreed_to_terms', !!value)}
                                    className="mt-1 hover:cursor-pointer"
                                    required
                                />
                                <Label htmlFor="terms" className="text-sm font-normal">
                                    I agree to the{' '}
                                    <Link href="/terms" className="hover:text-foreground underline transition-colors">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="hover:text-foreground underline transition-colors">
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between pt-4">
                        <Button type={'button'} variant={'secondary'} disabled={currentStep === 0} onClick={() => goToPreviousPage(currentStep)}>
                            Previous
                        </Button>

                        {currentStep < steps.length - 1 ? (
                            <Button type={'button'} disabled={currentStep === steps.length - 1} onClick={goToNextPage}>
                                Next
                            </Button>
                        ) : (
                            <Button type="submit" disabled={processing || !data.agreed_to_terms}>
                                {data.agreed_to_terms ? 'Submit' : 'Agree to terms to continue'}
                            </Button>
                        )}
                    </div>
                </form>
            </main>
        </div>
    );
}
