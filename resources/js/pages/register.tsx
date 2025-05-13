import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MarketingLayout from '@/layouts/marketing-layout';
import { Link } from '@inertiajs/react';
import { Check, Eye, EyeOff } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Update password strength when password changes
        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };

    const calculatePasswordStrength = (password: string) => {
        let strength = 0;

        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;

        setPasswordStrength(strength);
    };

    const getPasswordStrengthText = () => {
        if (passwordStrength === 0) return '';
        if (passwordStrength === 1) return 'Weak';
        if (passwordStrength === 2) return 'Fair';
        if (passwordStrength === 3) return 'Good';
        return 'Strong';
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength === 0) return 'bg-gray-200';
        if (passwordStrength === 1) return 'bg-red-500';
        if (passwordStrength === 2) return 'bg-yellow-500';
        if (passwordStrength === 3) return 'bg-green-400';
        return 'bg-green-500';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // This is where you would normally make an API call to register
            // For demo purposes, we'll just simulate a delay and redirect
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Simulate validation
            if (!formData.name || !formData.email || !formData.password) {
                throw new Error('Please fill in all fields');
            }

            if (!formData.email.includes('@')) {
                throw new Error('Please enter a valid email address');
            }

            if (passwordStrength < 2) {
                throw new Error('Please choose a stronger password');
            }

            if (!agreeTerms) {
                throw new Error('You must agree to the terms and privacy policy');
            }

            // Redirect to dashboard or onboarding on success
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="font-title mb-2 text-4xl uppercase">Create an account</h1>
                    <p className="text-muted-foreground">Fill in the form to get started </p>
                </div>

                {error && (
                    <Alert variant="destructive" className="mb-4 border-red-500 text-red-500">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="rounded-xl"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={showPassword ? '$up3rSecretP@ssw0rd' : '••••••••'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="rounded-xl pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {formData.password && (
                                <div className="mt-2 space-y-2">
                                    <div className="flex h-1 w-full overflow-hidden rounded-full bg-gray-200">
                                        <div
                                            className={`${getPasswordStrengthColor()} h-full transition-all duration-300`}
                                            style={{ width: `${(passwordStrength / 4) * 100}%` }}
                                        />
                                    </div>
                                    <p className="text-muted-foreground text-xs">
                                        Password strength: <span className="font-medium">{getPasswordStrengthText()}</span>
                                    </p>
                                    <ul className="text-muted-foreground space-y-1 text-xs">
                                        <li className="flex items-center">
                                            <span className={formData.password.length >= 8 ? 'text-green-500' : ''}>
                                                {formData.password.length >= 8 ? <Check size={12} className="mr-1 inline" /> : '•'} At least 8
                                                characters
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className={/[A-Z]/.test(formData.password) ? 'text-green-500' : ''}>
                                                {/[A-Z]/.test(formData.password) ? <Check size={12} className="mr-1 inline" /> : '•'} At least 1
                                                uppercase letter
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className={/[0-9]/.test(formData.password) ? 'text-green-500' : ''}>
                                                {/[0-9]/.test(formData.password) ? <Check size={12} className="mr-1 inline" /> : '•'} At least 1
                                                number
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className={/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-500' : ''}>
                                                {/[^A-Za-z0-9]/.test(formData.password) ? <Check size={12} className="mr-1 inline" /> : '•'} At least
                                                1 special character
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                checked={agreeTerms}
                                onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                                className="mt-1"
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

                    <Button type="submit" className="w-full rounded-xl" size="lg" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create account'}
                    </Button>
                </form>
                <p className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="hover:text-foreground font-medium transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

RegisterPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
