import StudentNavigation from '@/components/student-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';
import { RiAddLine, RiArrowUpLine } from 'react-icons/ri';

export default function WalletPage() {
    return (
        <main className={'mx-auto mt-8 w-11/12 max-w-4xl space-y-16'}>
            <section className={'bg-primary text-primary-foreground flex items-center justify-between rounded-2xl p-8'}>
                <div className={'flex items-end gap-2'}>
                    <h1 className={'font-title text-3xl uppercase md:text-4xl'}>0.00</h1>
                    <p className={'font-medium'}>Kwacha</p>
                </div>

                <div className={'flex flex-col items-center gap-2'}>
                    <Button variant={'secondary'}>
                        <RiAddLine size={20} />
                    </Button>
                    <p className={'text-center text-sm font-medium'}>Recharge Wallet</p>
                </div>
            </section>

            <section className={'space-y-4'}>
                <p className={'font-medium'}>Transactions</p>

                <Link
                    className={
                        'border-muted-foreground/20 flex cursor-pointer justify-between rounded-2xl border-2 p-4 transition-all duration-300 hover:rounded-4xl'
                    }
                    href={'/student/wallet/1'}
                >
                    <div className={'flex items-center gap-2'}>
                        <div className={'bg-muted flex h-fit w-fit rounded-full p-4'}>
                            <RiArrowUpLine size={20} />
                        </div>

                        <div>
                            <h1 className={'text-lg font-semibold'}>Recharge</h1>
                            <p className={'text-sm font-medium'}>26 March 2025, 5:22PM</p>
                        </div>
                    </div>

                    <div>
                        <h1 className={'font-title text-2xl'}>500.00</h1>
                        <Badge>Completed</Badge>
                    </div>
                </Link>
            </section>
        </main>
    );
}

WalletPage.layout = (page: React.ReactNode) => <StudentNavigation children={page} />;
