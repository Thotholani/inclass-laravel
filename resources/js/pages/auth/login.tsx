import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MarketingLayout from '@/layouts/marketing-layout';
import { Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

export default function LoginPage() {
    const { setData, clearErrors, errors, post, data, processing } = useForm({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearErrors('email');
        post('/login');
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="font-title mb-2 text-4xl uppercase">Welcome back</h1>
                    <p className="text-muted-foreground">Fill in the form to continue</p>
                </div>

                <form className="space-y-6" onSubmit={submit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                required
                                className="rounded-xl"
                            />
                            {errors.email && <p className={'text-destructive text-sm'}>{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/auth/forgot-password" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={data.password}
                                    onChange={(event) => setData('password', event.target.value)}
                                    required
                                    className="rounded-xl pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 hover:cursor-pointer"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked === true)} />
                            <Label htmlFor="remember" className="text-sm font-normal">
                                Remember me for 30 days
                            </Label>
                        </div>
                    </div>

                    <Button type="submit" className="w-full rounded-xl" size="lg" disabled={processing}>
                        {processing ? 'Signing in...' : 'Sign in'}
                    </Button>
                </form>

                <p className="text-muted-foreground text-center text-sm">
                    Don't have an account?{' '}
                    <Link href="/register" className="hover:text-foreground font-medium transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

LoginPage.layout = (page: React.ReactNode) => <MarketingLayout children={page} />;
