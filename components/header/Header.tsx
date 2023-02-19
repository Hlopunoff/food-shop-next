import Image from 'next/image';
import Link from 'next/link';
import { 
    DownOutlined, 
    HeartOutlined, 
    InboxOutlined, 
    ShoppingCartOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Badge } from 'antd';
import { Logo } from '@/UI/logo/Logo';

import s from './header.module.scss';
import userAvatar from '@/public/img/avatar.png';

export const Header = () => {
    return (
        <header className={s['header']}>
            <div className="container">
                <nav className={s['header__nav']}>
                    <Logo/>
                    <button className={s['header__catalogBtn']}>
                        <MenuOutlined style={{fontSize: '24px'}}/>
                        <span className="header__catalogBtn_text">Каталог</span>
                    </button>
                    <div className={s['header__searchField']}>
                        <input 
                            type="text" 
                            className={s['header__search']} 
                            placeholder='Найти товар'
                        />
                    </div>
                    <div className={s['header__navWrap_mobile']}>
                        <ul className={s['header__icons']}>
                            <li data-catalog-mobile>
                                <Link href="/catalog/" className={s['header__icon']}>
                                    <Badge
                                        count={0}
                                        size="small"
                                    >
                                        <MenuOutlined style={{ fontSize: '24px' }} />
                                    </Badge>
                                    <span>Каталог</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/favorites/" className={s['header__icon']}>
                                    <Badge
                                        count={0}
                                        size="small"
                                    >
                                        <HeartOutlined style={{ fontSize: '24px' }} />
                                    </Badge>
                                    <span>Избранное</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders/" className={s['header__icon']}>
                                    <Badge
                                        count={0}
                                        size="small"
                                    >
                                        <InboxOutlined style={{ fontSize: '24px' }} />
                                    </Badge>
                                    <span>Заказы</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shopping-cart/" className={s['header__icon']}>
                                    <Badge
                                        count={1}
                                        size="small"
                                    >
                                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                                    </Badge>
                                    <span>Корзина</span>
                                </Link>
                            </li>
                        </ul>
                        <div className={s['header__profile']}>
                            <div className={s['profile__info']}>
                                <div className={s['profile__avatar']}>
                                    <Image 
                                        src={userAvatar} 
                                        alt='Фото пользователя' 
                                        className={s['avatar']}
                                    />
                                </div>
                                <span className={s['profile__name']}>Алексей</span>
                            </div>
                            <DownOutlined 
                                style={{ fontSize: '18px' }}
                                className="header__arrowDown"/>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}