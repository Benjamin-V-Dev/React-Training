'use client';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-slate-100'>
            {/* Navigation en mode desktop */}
            <nav
                aria-label='Global'
                className='mx-auto flex max-w-7xl items-center p-6 lg:px-8 justify-end'>
                <Link to='/' className='text-sm/6 font-semibold text-gray-900'>
                    Accueil <span aria-hidden='true'>&rarr;</span>
                </Link>
            </nav>
        </header>
    );
}
