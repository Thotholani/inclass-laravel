import StudentNavigation from '@/components/student-navigation';
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
            <div className="mb-8">
                <h1 className={'font-title text-3xl uppercase md:text-4xl'}>Settings</h1>

                <p className="text-gray-600">Manage your account and preferences</p>
            </div>

            <div className="space-y-8">
                {/* Account Information */}
                <div>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiUserLine className="h-5 w-5 text-gray-600" />
                        <h3 className="text-xl font-semibold text-black">Account Information</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Profile Picture */}
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                                    <AvatarFallback className="bg-gray-200 text-xl text-gray-600">TT</AvatarFallback>
                                </Avatar>
                                <Button size="sm" className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full">
                                    <RiCameraLine className="h-4 w-4" />
                                </Button>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black">Profile Picture</h4>
                                <p className="text-sm text-gray-600">Upload a new profile picture</p>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-sm font-medium text-black">
                                    First Name
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="firstName"
                                        defaultValue="Thotholani"
                                        className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                                    />
                                    <Edit3 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-sm font-medium text-black">
                                    Last Name
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="lastName"
                                        defaultValue="Student"
                                        className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                                    />
                                    <Edit3 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-black">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue="thotholani@example.com"
                                    className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                                />
                                <Edit3 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full md:w-fit">Save Changes</Button>
                        </div>
                    </div>
                </div>

                {/* Password Management */}
                <div>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiShieldLine className="h-5 w-5 text-gray-600" />
                        <h3 className="text-xl font-semibold text-black">Password & Security</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentPassword" className="text-sm font-medium text-black">
                                Current Password
                            </Label>
                            <Input
                                id="currentPassword"
                                type="password"
                                placeholder="Enter current password"
                                className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="newPassword" className="text-sm font-medium text-black">
                                New Password
                            </Label>
                            <Input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-sm font-medium text-black">
                                Confirm New Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                className="border-gray-200 bg-white focus-visible:ring-1 focus-visible:ring-gray-300"
                            />
                        </div>
                        <div className="pt-2">
                            <Button className="w-full md:w-fit">Update Password</Button>
                        </div>
                    </div>
                </div>

                {/* Appearance Settings */}
                <div>
                    <div className="mb-6 flex items-center space-x-3">
                        <RiPaletteLine className="h-5 w-5 text-gray-600" />
                        <h3 className="text-xl font-semibold text-black">Appearance</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Label className="mb-3 block text-sm font-medium text-black">Theme</Label>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="relative">
                                    <input type="radio" id="light" name="theme" defaultChecked className="peer sr-only" />
                                    <label
                                        htmlFor="light"
                                        className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-4 peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-300"
                                    >
                                        <RiSunLine className="mb-2 h-6 w-6 text-gray-600" />
                                        <span className="text-sm font-medium text-black">Light</span>
                                    </label>
                                    <Check className="absolute top-2 right-2 h-4 w-4 text-black opacity-0 peer-checked:opacity-100" />
                                </div>
                                <div className="relative">
                                    <input type="radio" id="dark" name="theme" className="peer sr-only" />
                                    <label
                                        htmlFor="dark"
                                        className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-4 peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-300"
                                    >
                                        <RiMoonLine className="mb-2 h-6 w-6 text-gray-600" />
                                        <span className="text-sm font-medium text-black">Dark</span>
                                    </label>
                                    <Check className="absolute top-2 right-2 h-4 w-4 text-black opacity-0 peer-checked:opacity-100" />
                                </div>
                                <div className="relative">
                                    <input type="radio" id="system" name="theme" className="peer sr-only" />
                                    <label
                                        htmlFor="system"
                                        className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-4 peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-300"
                                    >
                                        <RiContrast2Line className="mb-2 h-6 w-6 text-gray-600" />
                                        <span className="text-sm font-medium text-black">System</span>
                                    </label>
                                    <Check className="absolute top-2 right-2 h-4 w-4 text-black opacity-0 peer-checked:opacity-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div>
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="rounded-lg bg-red-100 p-2">
                            <RiErrorWarningLine className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-red-900">Danger Zone</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-lg border border-red-200 bg-white p-4">
                            <div className="">
                                <div className="flex-1">
                                    <h4 className="mb-2 font-semibold text-red-900">Delete&nbsp;Account</h4>

                                    {/* Honest explanation */}
                                    <p className="mb-3 text-sm text-red-700">
                                        Permanently close your account. Your personal access will be removed, and any remaining wallet balance will be
                                        forfeited. Limited anonymised records may be kept for legal and audit purposes.
                                        <strong> This action cannot be undone.</strong>
                                    </p>

                                    <ul className="mb-4 space-y-1 text-xs text-red-600">
                                        <li>• You’ll lose all access immediately</li>
                                        <li>• Wallet funds become non-refundable</li>
                                        <li>• Some data is retained for compliance</li>
                                        <li>• This action is irreversible</li>
                                    </ul>
                                </div>

                                {/* Ideally wrap this in a confirm-modal component */}
                                <Button variant="destructive" className="w-full bg-red-600 text-white hover:bg-red-700 md:w-fit">
                                    <RiDeleteBinLine />
                                    Delete Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

StudentSettingsPage.layout = (page: React.ReactNode) => <StudentNavigation children={page} />;
