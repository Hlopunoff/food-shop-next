import Image from 'next/image';
import Link from 'next/link';

import s from './logo.module.scss';
import logo from '@/public/icons/logo.svg';

export const Logo = () => {
    return (
        <Link href="/" className={s['logo']}>
            <Image src={logo} alt='logo'/>
            <h1 className={s['logo__title']}>северяночка</h1>
        </Link>
    );
};