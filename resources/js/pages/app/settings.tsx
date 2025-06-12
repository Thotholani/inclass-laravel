import AppNavigation from '@/components/app-navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Edit3 } from 'lucide-react';
import React from 'react';
import {
    RiCameraLine,
    RiContrast2Line,
    RiDeleteBinLine,
    RiErrorWarningLine,
    RiMoonLine,
    RiPaletteLine,
    RiShieldLine,
    RiSunLine,
    RiUserLine,
} from 'react-icons/ri';

export default function StudentSettingsPage() {
    return (
        <main className="mx-auto w-11/12 max-w-4xl py-8">
            {/* Heading */}
            <div className="mb-8">
                <h1 className="font-title text-3xl uppercase md:text-4xl">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences</p>
            </div>

            <div className="space-y-8">
                {/* ───────────────── Account Information ───────────────── */}
                <section>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiUserLine className="text-muted-foreground h-5 w-5" />
                        <h3 className="text-xl font-semibold">Account Information</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Profile Picture */}
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                                    <AvatarFallback className="bg-muted">TT</AvatarFallback>
                                </Avatar>
                                <Button size="sm" className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full">
                                    <RiCameraLine className="h-4 w-4" />
                                </Button>
                            </div>
                            <div>
                                <h4 className="font-semibold">Profile Picture</h4>
                                <p className="text-muted-foreground text-sm">Upload a new profile picture</p>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <div className="relative">
                                    <Input id="firstName" defaultValue="Thotholani" className="border-input bg-background focus-visible:ring-ring" />
                                    <Edit3 className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <div className="relative">
                                    <Input id="lastName" defaultValue="Student" className="border-input bg-background focus-visible:ring-ring" />
                                    <Edit3 className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue="thotholani@example.com"
                                    className="border-input bg-background focus-visible:ring-ring"
                                />
                                <Edit3 className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full md:w-fit">Save Changes</Button>
                        </div>
                    </div>
                </section>

                {/* ───────────────── Password & Security ───────────────── */}
                <section>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiShieldLine className="text-muted-foreground h-5 w-5" />
                        <h3 className="text-xl font-semibold">Password & Security</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                placeholder="Enter current password"
                                className="border-input bg-background focus-visible:ring-ring"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                className="border-input bg-background focus-visible:ring-ring"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                className="border-input bg-background focus-visible:ring-ring"
                            />
                        </div>

                        <div className="pt-2">
                            <Button className="w-full md:w-fit">Update Password</Button>
                        </div>
                    </div>
                </section>

                {/* ───────────────── Appearance ───────────────── */}
                <section>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiPaletteLine className="text-muted-foreground h-5 w-5" />
                        <h3 className="text-xl font-semibold">Appearance</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Label className="mb-3 block">Theme</Label>
                            <div className="grid grid-cols-3 gap-3">
                                {/* Light */}
                                <ThemeRadio id="light" label="Light" icon={<RiSunLine className="text-muted-foreground h-6 w-6" />} defaultChecked />
                                {/* Dark */}
                                <ThemeRadio id="dark" label="Dark" icon={<RiMoonLine className="text-muted-foreground h-6 w-6" />} />
                                {/* System */}
                                <ThemeRadio id="system" label="System" icon={<RiContrast2Line className="text-muted-foreground h-6 w-6" />} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ───────────────── Danger Zone ───────────────── */}
                <section>
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="bg-destructive/20 rounded-lg p-2">
                            <RiErrorWarningLine className="text-destructive h-5 w-5" />
                        </div>
                        <h3 className="text-destructive text-xl font-semibold">Danger Zone</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="border-destructive/30 bg-background rounded-lg border p-4">
                            <div>
                                <h4 className="text-destructive mb-2 font-semibold">Delete&nbsp;Account</h4>

                                <p className="text-destructive mb-3 text-sm">
                                    Permanently close your account. Your personal access will be removed, and any remaining wallet balance will be
                                    forfeited. Limited anonymised records may be kept for legal and audit purposes.{' '}
                                    <strong>This action cannot be undone.</strong>
                                </p>

                                <ul className="text-destructive mb-4 space-y-1 text-xs">
                                    <li>• You’ll lose all access immediately</li>
                                    <li>• Wallet funds become non-refundable</li>
                                    <li>• Some data is retained for compliance</li>
                                    <li>• This action is irreversible</li>
                                </ul>

                                <Button variant="destructive" className="w-full md:w-fit">
                                    <RiDeleteBinLine className="mr-2 h-4 w-4" />
                                    Delete Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

/* ------------------------ Helpers ------------------------ */
function ThemeRadio({ id, label, icon, defaultChecked }: { id: string; label: string; icon: React.ReactNode; defaultChecked?: boolean }) {
    return (
        <div className="relative">
            <input type="radio" id={id} name="theme" defaultChecked={defaultChecked} className="peer sr-only" />
            <label
                htmlFor={id}
                className="border-input bg-background peer-checked:border-primary/80 hover:border-border flex cursor-pointer flex-col items-center rounded-lg border-2 p-4"
            >
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </label>
            <Check className="text-primary absolute top-2 right-2 h-4 w-4 opacity-0 peer-checked:opacity-100" />
        </div>
    );
}

StudentSettingsPage.layout = (page: React.ReactNode) => <AppNavigation children={page} />;
