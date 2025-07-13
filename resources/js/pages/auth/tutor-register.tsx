import { Link, useForm, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';

import AmountInput from '@/components/comp-29';
import MarketingLogo from '@/components/marketing-logo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MultipleSelector from '@/components/ui/multiselect';
import { PhoneNumberInput } from '@/components/ui/phone-number-input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SharedData } from '@/types';
import { Check, X } from 'lucide-react';
import { RiCameraLine } from 'react-icons/ri';

export default function TutorRegisterPage() {
    const subjects = [
        // Secondary school / Zambian syllabus
        { name: 'Mathematics' },
        { name: 'English' },
        { name: 'Biology' },
        { name: 'Chemistry' },
        { name: 'Physics' },
        { name: 'Geography' },
        { name: 'History' },
        { name: 'Civic Education' },
        { name: 'Religious Education' },
        { name: 'Literature in English' },
        { name: 'Commerce' },
        { name: 'Principles of Accounts' },
        { name: 'Business Studies' },
        { name: 'Agricultural Science' },
        { name: 'Computer Studies' },
        { name: 'Art and Design' },
        { name: 'Physical Education' },

        // Broader undergrad-level categories
        { name: 'Economics' },
        { name: 'Engineering' },
        { name: 'Medical Sciences' },
        { name: 'Law' },
        { name: 'Social Sciences' },
        { name: 'Political Science' },
        { name: 'Education' },
        { name: 'Environmental Studies' },
        { name: 'Computer Science' },
        { name: 'Hospitality' },
        { name: 'Brand and Marketing' },
        { name: 'Banking and Finance' },
        { name: 'Communication and Media' },
    ];

    const educationLevels = [
        { value: 'primary', label: 'Primary School' },
        { value: 'secondary', label: 'High School' },
        { value: 'college', label: 'College/University' },
        { value: 'adult', label: 'Adult Education' },
    ];

    const languages = [
        {
            label: 'English',
            value: 'english',
        },
        {
            label: 'Cibemba',
            value: 'cibemba',
        },
        {
            label: 'Nyanja',
            value: 'nyanja',
        },
        {
            label: 'Chichewa',
            value: 'chichewa',
        },
        {
            label: 'Silozi',
            value: 'silozi',
        },
        {
            label: 'French',
            value: 'french',
        },
        {
            label: 'Mandarin',
            value: 'mandarin',
        },
    ];

    const goodPhotoComments = [
        {
            comment: 'Clear view of face with genuine smile',
        },
        {
            comment: 'Only one person in the photo',
        },
        {
            comment: 'Neutral background and Good lighting',
        },
    ];
    const badPhotoComments = [
        {
            comment: 'Face too far away',
        },
        {
            comment: 'Multiple people in the photo',
        },
        {
            comment: 'Over-edited or distracting style',
        },
    ];

    const { auth } = usePage<SharedData>().props;

    const { data, setData, errors, processing, post } = useForm<{
        image: File | null;
        name: string;
        hourly_rate: number;
        languages: string[];
        subject: string;
        phone: string;
        bio: string;
        education_levels: string[];
        identification: File | null;
        teaching_certification: File | null;
    }>({
        image: null,
        name: auth.user.name,
        hourly_rate: 0,
        languages: ['english'],
        education_levels: [],
        subject: '',
        phone: '',
        bio: '',
        identification: null,
        teaching_certification: null,
    });

    const [preview, setPreview] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        setData('image', file);
        setPreview(file ? URL.createObjectURL(file) : null);
    }

    const steps = ['Personal Info', 'Teaching Details', 'Documentation', 'Review'];
    const [currentStep, setCurrentStep] = useState(0);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/tutor-register', { forceFormData: true });
    }

    return (
        <div className="bg-background min-h-screen">
            <header className="flex items-center justify-between p-6">
                <MarketingLogo />
                <Button variant="secondary" size="lg" className="rounded-full">
                    <Link href="/select-role">Back to role selection</Link>
                </Button>
            </header>

            <main className="container mx-auto max-w-3xl px-4 py-8">
                {/* --- Centered progress indicator --------------------------- */}
                <div className="mb-8 flex items-center justify-center space-x-2">
                    {steps.map((label, index) => (
                        <div key={label} className="flex items-center">
                            <div
                                className={`flex size-6 items-center justify-center rounded-full border-2 ${
                                    index < currentStep
                                        ? 'bg-primary border-primary text-primary-foreground'
                                        : index === currentStep
                                          ? 'bg-primary border-primary text-primary-foreground'
                                          : 'bg-muted border-muted-foreground text-muted-foreground'
                                }`}
                            >
                                {index < currentStep ? '✓' : index + 1}
                            </div>

                            {index < steps.length - 1 && (
                                <div className={`h-1 w-8 sm:w-16 ${index < currentStep ? 'bg-primary' : 'bg-muted-foreground/20'}`}></div>
                            )}
                        </div>
                    ))}
                </div>

                <h1 className="font-title mb-4 text-center text-3xl uppercase md:text-4xl">{steps[currentStep]}</h1>

                {/* --- Copy text under heading ------------------------------ */}
                <p className="text-muted-foreground mb-8 text-center">
                    {currentStep === 0 && "Let's start by entering your personal details to set up your tutor profile."}
                    {currentStep === 1 && 'Tell us about your teaching experience, subjects, and languages you offer.'}
                    {currentStep === 2 && 'Upload documents that verify your teaching qualifications and identity.'}
                    {currentStep === 3 && "Review all the information you've provided before completing your registration."}
                </p>

                <form onSubmit={submit} className="space-y-4">
                    {currentStep === 0 && (
                        // Personal Information
                        <div className={'space-y-6'}>
                            <div className={'space-y-4'}>
                                <div className="space-y-2">
                                    <Label>Profile Photo</Label>

                                    {preview ? (
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="h-32 w-32 overflow-hidden rounded-full border">
                                                <img src={preview} alt="Profile preview" className="h-full w-full object-cover" />
                                            </div>
                                            <Button
                                                type="button"
                                                className={'hover:cursor-pointer'}
                                                variant="secondary"
                                                onClick={() => {
                                                    setData('image', null);
                                                    setPreview(null);
                                                }}
                                            >
                                                <X />
                                                Remove Photo
                                            </Button>
                                        </div>
                                    ) : (
                                        <label
                                            htmlFor="profile-photo"
                                            className="border-muted hover:bg-muted/50 flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-4 text-center transition-colors"
                                        >
                                            <RiCameraLine className={'text-muted-foreground'} size={36} />
                                            <p className="text-muted-foreground text-sm">Drag and drop your photo here, or Click to upload</p>
                                            <p className="text-muted-foreground text-xs">JPG, PNG, JPEG Max 2MB.</p>
                                            <Input id="profile-photo" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                                        </label>
                                    )}
                                </div>

                                {/* Profile Photo Guidelines */}
                                <div className={'rounded-3xl border p-4'}>
                                    <h1 className={'text-lg font-semibold md:text-2xl'}>Profile Photo Guidelines</h1>

                                    <div className={'flex justify-between gap-4'}>
                                        <div className={'max-w-1/2 space-y-2'}>
                                            <Badge className={'bg-green-100 text-green-800'}>Good</Badge>
                                            <img
                                                src={'/profile-sample-good.jpg'}
                                                className={'h-24 w-24 rounded-md object-cover md:h-50 md:w-50'}
                                                alt={'Profile Image Good'}
                                            />

                                            <div>
                                                {goodPhotoComments.map((good) => (
                                                    <div className={'flex items-center gap-1 text-xs md:text-sm'} key={good.comment}>
                                                        <span>
                                                            <Check className={'h-4 w-4 text-green-600'} />
                                                        </span>
                                                        <p>{good.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={'space-y-2'}>
                                            <Badge className={'bg-red-100 text-red-800'}>
                                                <X /> Bad
                                            </Badge>
                                            <img
                                                src={'/profile-sample-bad.jpg'}
                                                className={'h-24 w-24 rounded-md object-cover md:h-50 md:w-50'}
                                                alt={'Profile Image Bad'}
                                            />
                                            <div>
                                                {badPhotoComments.map((bad) => (
                                                    <div className={'flex items-center gap-1 text-xs md:text-sm'} key={bad.comment}>
                                                        <span>
                                                            <X className={'h-4 w-4 text-red-600'} />
                                                        </span>
                                                        <p>{bad.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'space-y-2'}>
                                <Label>Name</Label>
                                <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                <p className={'text-muted-foreground text-xs'}>
                                    {errors.name
                                        ? errors.name
                                        : 'Enter in your official government name. Do not enter nicknames or AKAs as this will only delay your verification process'}
                                </p>
                            </div>

                            <div>
                                <Label>Mobile Number</Label>
                                <PhoneNumberInput
                                    value={data.phone}
                                    onChange={(value) => setData('phone', value)} // ✅ Correct: value is string
                                    defaultCountry="ZM"
                                    className={'rounded-none'}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <Label>Tutor bio</Label>
                                <Textarea
                                    placeholder={'Describe who you are, your teaching style and why you are the best fit for students'}
                                    value={data.bio}
                                    onChange={(event) => setData('bio', event.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div className={'space-y-6'}>
                            {/* Hourly Rate Details*/}
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
                                    {errors.hourly_rate ? errors.hourly_rate : 'Enter how much you will charge for your services per hour'}
                                </p>
                            </div>

                            {/* Subjects */}
                            <div className={'space-y-2'}>
                                <Label>Subject or Course</Label>
                                <Select onValueChange={(value) => setData('subject', value)} value={data.subject}>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select a subject you will tutor on Inclass" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Subjects</SelectLabel>
                                            {subjects.map((subject) => (
                                                <SelectItem key={subject.name} value={subject.name}>
                                                    {subject.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <p className={'text-muted-foreground text-xs'}>
                                    {errors.subject
                                        ? errors.subject
                                        : 'Enter in your official government name. Do not enter nicknames or AKAs as this will only delay your verification process'}
                                </p>
                            </div>
                            {/* Subject Level*/}
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
                                {errors.education_levels && <p className="text-destructive text-xs italic">{errors.education_levels}</p>}
                            </div>

                            <div className={'space-y-2'}>
                                <Label>Languages spoken</Label>
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
                                <p className={'text-muted-foreground text-xs'}>
                                    {errors.languages
                                        ? errors.languages
                                        : 'Enter in your official government name. Do not enter nicknames or AKAs as this will only delay your verification process'}
                                </p>
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="flex flex-col gap-5 md:flex-row">
                                {/* Front of ID */}
                                <div className="flex h-50 w-full flex-col items-center justify-center space-y-4 rounded-2xl border p-5 text-center md:w-1/2">
                                    <h2 className="text-lg font-semibold">Capture Front of ID</h2>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="environment"
                                        className="hidden"
                                        id="front-id"
                                        onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                const file = e.target.files[0];
                                                console.log('Front ID file:', file);
                                                setData('identification', file);
                                            }
                                        }}
                                    />
                                    <label
                                        htmlFor="front-id"
                                        className="hover:bg-muted inline-flex cursor-pointer items-center justify-center rounded-xl border border-dashed p-4 transition"
                                    >
                                        <span className="text-muted-foreground text-sm">Tap to Capture Front</span>
                                    </label>
                                </div>

                                {/* Back of ID */}
                                <div className="flex h-50 w-full flex-col items-center justify-center space-y-4 rounded-2xl border p-5 text-center md:w-1/2">
                                    <h2 className="text-lg font-semibold">Capture Back of ID</h2>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="environment"
                                        className="hidden"
                                        id="back-id"
                                        onChange={(e) => {
                                            if (e.target.files?.[0]) {
                                                const file = e.target.files[0];
                                                console.log('Back ID file:', file);
                                                // handle back file here, e.g., setData('idBack', file);
                                            }
                                        }}
                                    />
                                    <label
                                        htmlFor="back-id"
                                        className="hover:bg-muted inline-flex cursor-pointer items-center justify-center rounded-xl border border-dashed p-4 transition"
                                    >
                                        <span className="text-muted-foreground text-sm">Tap to Capture Back</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && <p>Step 4: Review your information here.</p>}

                    <div className="flex justify-between pt-4">
                        <Button type="button" disabled={currentStep === 0} onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}>
                            Previous
                        </Button>

                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={() => setCurrentStep((s) => s + 1)}>
                                Next
                            </Button>
                        ) : (
                            <Button type="submit" disabled={processing}>
                                Submit
                            </Button>
                        )}
                    </div>
                </form>
            </main>
        </div>
    );
}
