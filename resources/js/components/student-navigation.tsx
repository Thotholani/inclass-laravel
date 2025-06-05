import MarketingLogo from '@/components/marketing-logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon } from 'lucide-react';
import { RiCompass4Line, RiDoorOpenLine, RiQuestionLine, RiSettingsLine, RiShareForwardLine, RiVideoOnLine, RiWalletLine } from 'react-icons/ri';

export default function StudentNavigation({ children }: { children: React.ReactNode }) {
    const { url, component } = usePage();

    const navLinks = [
        {
            path: '/student/dashboard',
            label: 'Home',
            icon: <RiCompass4Line size={20} />,
        },
        {
            path: '/student/lessons',
            label: 'Lessons',
            icon: <RiVideoOnLine size={20} />,
        },
        {
            path: '/student/wallet',
            label: 'Wallet',
            icon: <RiWalletLine size={20} />,
        },
        {
            path: '/student/settings',
            label: 'Settings',
            icon: <RiSettingsLine size={20} />,
        },
    ];

    const otherLinks = [
        {
            path: '/student/refer',
            label: 'Refer to a friend',
            icon: <RiShareForwardLine size={20} />,
        },
        {
            path: '/help',
            label: 'Help',
            icon: <RiQuestionLine size={20} />,
        },
    ];

    return (
        <>
            <nav className={'mx-auto flex w-11/12 max-w-7xl items-center justify-between gap-2 py-4'}>
                <MarketingLogo />
                <Link href={'/student/find-a-tutor'} className={'mx-auto w-5/6 md:max-w-lg'}>
                    <Input className={'bg-muted border-none shadow-none outline-none active:outline-none'} placeholder={'Search for tutor'} />
                </Link>
                <div className={'hidden items-center gap-2 md:flex'}>
                    {navLinks.map((link) => (
                        <Button key={link.path} variant={url === link.path ? 'default' : 'ghost'} asChild>
                            <Link href={link.path} className={'flex gap-2 font-semibold'}>
                                {link.label}
                            </Link>
                        </Button>
                    ))}

                    <DropdownMenu>
                        <DropdownMenuTrigger className={'cursor-pointer'}>
                            <UserAvatar />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Thotholani Tembo</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Refer to a friend</DropdownMenuItem>
                            <DropdownMenuItem>Help</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className={'md:hidden'}>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={'secondary'}>
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className={'px-6 py-16'}>
                            <div className={'flex gap-4'}>
                                <UserAvatar />
                                <div>
                                    <h2 className={'font-medium'}>Thotholani Tembo</h2>
                                    <p className={'text-muted-foreground text-sm'}>tembothotholani@gmail.com</p>
                                </div>
                            </div>
                            <Separator />
                            {navLinks.map((link) => (
                                <Link key={link.path} href={link.path} className={'flex items-center gap-2 py-1 font-medium'}>
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                            <Separator />
                            {otherLinks.map((link, index) => (
                                <Link key={index} href={link.path} className="flex items-center gap-2 py-1 font-medium">
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                            <Link href={'#'} className={'text-destructive flex items-center gap-2 py-1 font-medium'}>
                                <RiDoorOpenLine size={20} />
                                Logout
                            </Link>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
            <>{children}</>
        </>
    );
}

function UserAvatar() {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={'/profile-image.jpg'} alt="@thotholani" className="object-cover" />
            <AvatarFallback>TT</AvatarFallback>
        </Avatar>
    );
}
