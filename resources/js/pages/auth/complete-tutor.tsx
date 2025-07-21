// resources/js/Pages/Tutors/CompleteTutor.tsx
import MarketingLogo from '@/components/marketing-logo';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { RiCheckLine } from 'react-icons/ri';

export default function CompleteTutor() {
    const { post } = useForm();

    function logout() {
        post('/logout');
    }

    return (
        <main className="mx-auto w-11/12 max-w-3xl">
            {/* ─── Header / Logo ───────────────────────────────────────────── */}
            <nav className="flex justify-center py-8">
                <MarketingLogo />
            </nav>

            {/* ─── Content box ─────────────────────────────────────────────── */}
            <div className="mt-16 flex flex-col items-center text-center">
                {/* 1. “Application received” icon */}
                <span className="bg-primary text-primary-foreground mb-8 flex items-center justify-center rounded-full p-6 md:p-8">
                    <RiCheckLine size={40} />
                </span>

                {/* 3. Headline & copy */}
                <h1 className="font-title mb-2 text-4xl uppercase md:text-5xl">Application received</h1>
                <p className="mb-1 text-lg font-medium">We’re reviewing your tutor profile.</p>
                <p className="text-muted-foreground mb-10">
                    This usually takes&nbsp;<strong>up to 5 business days</strong>. You’ll get an email as soon as we’ve finished.
                </p>

                {/* 4. CTA */}
                <Button size={'lg'} className={'w-full md:w-fit'} onClick={logout}>
                    I understand
                </Button>
            </div>
        </main>
    );
}
