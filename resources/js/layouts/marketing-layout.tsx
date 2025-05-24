import MarketingLogo from '@/components/marketing-logo';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import type React from 'react';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true);
    // const [atTop, setAtTop] = useState(true);

    const platformLinks = [
        { name: 'Find a Tutor', href: 'find-a-tutor' },
        { name: 'Become a Tutor', href: '/become-a-tutor' },
        { name: 'Help Center', href: '/help' },
        { name: 'Request a Feature', href: '/request-a-feature' },
    ];

    const resourceLinks = [
        { name: 'Blog', href: '/blog' },
        { name: 'Tutorials', href: '/tutorials' },
    ];

    const legalLinks = [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
    ];

    // // Handle scroll behavior
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.scrollY;
    //
    //         // Determine if we're at the top of the page
    //         setAtTop(currentScrollPos < 10);
    //
    //         // Determine scroll direction and visibility
    //         const isScrollingUp = prevScrollPos > currentScrollPos;
    //
    //         setPrevScrollPos(currentScrollPos);
    //
    //         // Only change visibility state if there's a significant scroll
    //         if (currentScrollPos < 10 || Math.abs(prevScrollPos - currentScrollPos) < 10) {
    //             return;
    //         }
    //
    //         setVisible(isScrollingUp);
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [prevScrollPos]);

    return (
        <div>
            <header className={`bg-background/80 fixed top-0 right-0 left-0 z-50 backdrop-blur-md transition-all duration-300`}>
                <div className="mx-auto my-4 w-11/12 max-w-7xl">
                    <nav className="flex items-center justify-between">
                        <MarketingLogo />

                        <div className="hidden gap-2 md:flex">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className={'bg-transparent'}>Links</NavigationMenuTrigger>
                                        <NavigationMenuContent className={'m-0 p-0'}>
                                            <div className={'w-96'}>
                                                <div className={'bg-muted p-6'}>
                                                    <Link href={'/become-a-tutor'}>
                                                        <>
                                                            <h1 className={'font-semibold'}>Become a Tutor</h1>
                                                            <p className={'text-muted-foreground'}>
                                                                Learn how you can get started tutoring on Inclass and earn side cash or go full-time
                                                            </p>
                                                        </>
                                                    </Link>
                                                </div>
                                                <div className={'flex flex-col space-y-4 p-6 font-semibold'}>
                                                    <Link href={'/find-a-tutor'}>Find a Tutor</Link>
                                                    <Link href={'/help'}>Help</Link>
                                                    <Link href={'/request-a-feature'}>Request a feature</Link>
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <Button size="lg" variant="ghost" asChild>
                                <Link href={'/login'}>Login</Link>
                            </Button>

                            <Button size="lg" asChild>
                                <Link href={'/register'}>Get started for Free</Link>
                            </Button>
                        </div>

                        <Sheet>
                            <SheetTrigger asChild className="md:hidden">
                                <Button size="icon" variant="secondary">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="h-full w-full" side="right">
                                <div className="mx-auto flex h-full w-11/12 flex-col pt-6 pb-6">
                                    <div className="flex flex-1 flex-col gap-6">
                                        <div className="space-y-4">
                                            <SheetClose>
                                                <MarketingLogo />
                                            </SheetClose>

                                            <ul className="mt-8 space-y-2">
                                                {platformLinks.map((link) => (
                                                    <li key={link.name}>
                                                        <Link
                                                            href={link.href}
                                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                                        >
                                                            <SheetClose>{link.name}</SheetClose>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex flex-col gap-4">
                                        <Link href={'/login'}>
                                            <SheetClose className={'w-full'}>
                                                <Button size="lg" className={'w-full'}>
                                                    Login
                                                </Button>
                                            </SheetClose>
                                        </Link>

                                        <Link href={'/register'}>
                                            <SheetClose className={'w-full'}>
                                                <Button size="lg" variant="secondary" className={'w-full'}>
                                                    Get started for Free
                                                </Button>
                                            </SheetClose>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </nav>
                </div>
            </header>

            {/* Add padding to account for fixed header */}
            <div className="pt-20">{children}</div>

            <footer className="bg-muted w-full">
                <div className="container mx-auto px-4 py-12 md:px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <MarketingLogo />
                            <p className="text-muted-foreground">An Unlikly Software product</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Platform</h3>
                            <ul className="space-y-2">
                                {platformLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Resources</h3>
                            <ul className="space-y-2">
                                {resourceLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Legal</h3>
                            <ul className="space-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-muted-foreground/20 mt-12 border-t pt-8">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Inclass. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
