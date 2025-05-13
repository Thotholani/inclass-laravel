import MarketingLogo from '@/components/marketing-logo';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowRight, Backpack, GraduationCap } from 'lucide-react';
import { useId, useState } from 'react';

export default function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = useState<'student' | 'tutor' | null>(null);
    const id = useId();

    const items = [
        { value: 'student', label: 'Student', description: 'I want to learn and find tutors', Icon: Backpack },
        { value: 'tutor', label: 'Tutor', description: 'I want to teach and find students', Icon: GraduationCap },
    ];

    const handleRoleSelect = (value: string) => {
        setSelectedRole(value as 'student' | 'tutor');
    };

    const handleNext = () => {
        // Handle navigation based on selected role
        if (selectedRole === 'student') {
            window.location.href = '/select-role/student';
        } else if (selectedRole === 'tutor') {
            window.location.href = '/select-role/tutor';
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="flex items-center justify-between p-6">
                <div className="flex-1">
                    <MarketingLogo />
                </div>
                <Button variant="secondary" size={'lg'} className="rounded-full">
                    Logout
                </Button>
            </header>

            {/* Main content */}
            <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-4">
                <div className="mb-12 text-center">
                    <h1 className="font-title mb-4 text-3xl uppercase md:text-4xl">Hi John. We're happy to have you!</h1>
                    <p className="text-muted-foreground text-lg">Let's get you started by selecting a role that describes you best</p>
                </div>

                <div className="w-full max-w-md space-y-4">
                    <RadioGroup className="flex flex-col space-y-4" onValueChange={handleRoleSelect} value={selectedRole || undefined}>
                        {items.map((item) => (
                            <Label key={`${id}-${item.value}`} htmlFor={`${id}-${item.value}`} className="cursor-pointer">
                                <div
                                    className={`hover:border-primary/50 relative flex items-center gap-4 rounded-xl border-2 p-6 transition-all hover:shadow-sm ${selectedRole === item.value ? 'border-primary bg-primary/5 border-2' : ''} `}
                                >
                                    <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
                                        <item.Icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-lg font-medium">{item.label}</div>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                    <RadioGroupItem id={`${id}-${item.value}`} value={item.value} className="sr-only" />
                                </div>
                            </Label>
                        ))}
                    </RadioGroup>
                </div>

                <div className="mt-12 flex w-full justify-center">
                    <Button onClick={handleNext} disabled={!selectedRole} className="w-full px-8 py-6 md:w-fit">
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </main>
        </div>
    );
}
