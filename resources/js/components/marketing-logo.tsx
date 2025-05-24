import { Link } from '@inertiajs/react';

export default function MarketingLogo() {
    return (
        <Link href={'/'}>
            <img src={'/logo-mark.svg'} height={20} width={30} className={'block md:hidden'} />
            <img height={20} width={120} src={'/logo-full.svg'} alt={'Inclass Logo'} className={'hidden md:block'} />
        </Link>
    );
}
