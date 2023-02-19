import {FC, ReactNode} from 'react';
import { Header } from '../header/Header';

interface ILayoutProps {
    children: ReactNode;
}

export const Layout:FC<ILayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    );
};