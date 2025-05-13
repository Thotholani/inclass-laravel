import { Camera, Upload, X } from 'lucide-react';
import { useState } from 'react';

import MarketingLogo from '@/components/marketing-logo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function StudentRegisterPage() {
    const [formData, setFormData] = useState({
        name: 'John Doe', // Pre-filled from registration
        profileImage: null,
        subjects: [],
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a preview URL
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            setFormData((prev) => ({ ...prev, profileImage: file }));
        }
    };

    const handleSubjectToggle = (subject) => {
        setFormData((prev) => {
            const subjects = [...prev.subjects];
            if (subjects.includes(subject)) {
                return { ...prev, subjects: subjects.filter((s) => s !== subject) };
            } else {
                return { ...prev, subjects: [...subjects, subject] };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // In a real app, you would submit to your Laravel backend here
        // For now, just simulate a submission
        setTimeout(() => {
            setIsSubmitting(false);
            // Redirect would happen here in a real app
            console.log('Form submitted:', formData);
        }, 1500);
    };

    const subjects = [
        { label: 'Mathematics', value: 'mathematics' },
        { label: 'Science', value: 'science' },
        { label: 'English', value: 'english' },
        { label: 'History', value: 'history' },
        { label: 'Geography', value: 'geography' },
        { label: 'Physics', value: 'physics' },
        { label: 'Chemistry', value: 'chemistry' },
        { label: 'Biology', value: 'biology' },
        { label: 'Computer Science', value: 'computer-science' },
        { label: 'Art', value: 'art' },
        { label: 'Music', value: 'music' },
        { label: 'Physical Education', value: 'physical-education' },
        { label: 'Foreign Languages', value: 'foreign-languages' },
    ];

    return (
        <div className="bg-background min-h-screen">
            <header className="flex items-center justify-between p-6">
                <div className="flex-1">
                    <MarketingLogo />
                </div>
                <Button variant="secondary" size={'lg'} className="rounded-full">
                    Back to role selection
                </Button>
            </header>

            <main className="container mx-auto max-w-3xl px-4 py-8">
                <div className="mb-8 text-center">
                    <h1 className="font-title text-3xl uppercase md:text-4xl">Complete Your Profile</h1>
                    <p className="text-muted-foreground mt-2">Let's set up your student profile to help you find the perfect tutors</p>
                </div>

                <form onSubmit={handleSubmit} className={'mx-auto space-y-4 md:w-9/12 md:max-w-3xl'}>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="profile-image">Profile Image</Label>
                            <div className="flex items-start gap-4">
                                <div className="bg-muted relative h-24 w-24 overflow-hidden rounded-full border">
                                    {imagePreview ? (
                                        <img src={imagePreview || '/placeholder.svg'} alt="Profile preview" className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <Camera className="text-muted-foreground h-8 w-8" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="profile-image-upload"
                                            className="bg-muted/50 hover:bg-muted cursor-pointer rounded-xl border px-4 py-2 text-center"
                                        >
                                            <Upload className="mr-2 inline-block h-4 w-4" />
                                            Upload Photo
                                        </Label>
                                        <Input
                                            id="profile-image-upload"
                                            name="profileImage"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                    <p className="text-muted-foreground text-xs">JPG, PNG or GIF. 1MB max.</p>
                                </div>
                            </div>
                            <p className={'text-muted-foreground text-xs'}>
                                A clear headshot helps tutors build trust and feel safe connecting with you on the platform. Don't worry, we'll ask
                                your tutor to do the same.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="rounded-xl"
                            />
                            <p className={'text-muted-foreground text-xs'}>Enter your full name</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subjects">Subjects of Interest</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className="border-input bg-background ring-offset-background focus-within:ring-ring flex min-h-10 w-full flex-wrap items-center justify-between rounded-xl border px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2">
                                        {formData.subjects.length > 0 ? (
                                            <div className="flex flex-wrap gap-1">
                                                {formData.subjects.map((subject) => (
                                                    <Badge key={subject} variant="secondary" className="flex items-center gap-1">
                                                        {subjects.find((s) => s.value === subject)?.label || subject}
                                                        <button
                                                            type="button"
                                                            onClick={() => handleSubjectToggle(subject)}
                                                            className="ring-offset-background focus:ring-ring rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                                                        >
                                                            <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                                                        </button>
                                                    </Badge>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="text-muted-foreground">Select subjects</span>
                                        )}
                                        <div className="flex shrink-0 opacity-50">▼</div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0" align="start">
                                    <div className="max-h-[300px] overflow-auto p-2">
                                        {subjects.map((subject) => (
                                            <div
                                                key={subject.value}
                                                className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5"
                                                onClick={() => handleSubjectToggle(subject.value)}
                                            >
                                                <div
                                                    className={`border-primary flex h-4 w-4 items-center justify-center rounded-sm border ${
                                                        formData.subjects.includes(subject.value)
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'opacity-50'
                                                    }`}
                                                >
                                                    {formData.subjects.includes(subject.value) && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="h-3 w-3"
                                                        >
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span>{subject.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverContent>
                            </Popover>
                            <p className={'text-muted-foreground text-xs'}>
                                We'll give you some recommendations on tutors to learn with based on this.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" className="w-full px-8 py-6 md:w-fit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : <>Complete Registration</>}
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
