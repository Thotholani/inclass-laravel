import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MarketingLayout from '@/layouts/marketing-layout';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // This is where you would normally make an API call to request password reset
            // For demo purposes, we'll just simulate a delay and success
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simulate validation
            if (!email) {
                throw new Error('Please enter your email address');
            }

            if (!email.includes('@')) {
                throw new Error('Please enter a valid email address');
            }

            setIsSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="font-title mb-2 text-4xl uppercase">Reset password</h1>
                    <p className="text-muted-foreground">Enter your email and we'll send you a link to reset your password</p>
                </div>

                {error && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {isSubmitted ? (
                    <div className="space-y-6">
                        <Alert className="border-green-200 bg-green-50">
                            <AlertDescription className="text-green-800">
                                If an account exists with the email <strong>{email}</strong>, you will receive a password reset link shortly.
                            </AlertDescription>
                        </Alert>
                        <div className="text-center">
                            <Link href="/login">
                                <Button variant="outline" className="rounded-xl">
                                    <ArrowLeft size={16} className="mr-2" />
                                    Back to login
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full rounded-xl" size="lg" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send reset link'}
                        </Button>

                        <div className="text-center">
                            <Link href="/login" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                <ArrowLeft size={16} className="mr-1 inline" />
                                Back to login
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

ForgotPasswordPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
