'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const easy = [
    {
        name: 'Counter',
        description: "Réalisation d'une todolist avec React",
        href: '/projet1',
        level: 'Easy',
    },
    {
        name: 'ContactForm',
        description: 'Gérer un input avec useState',
        href: '/projet2',
        level: 'Easy',
    }
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-slate-100'>
            {/* Navigation en mode desktop */}
            <nav
                aria-label='Global'
                className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
                <div className='flex lg:flex-1'>
                    <Link to='/' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Your Company</span>
                        <img
                            alt=''
                            src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                            className='h-8 w-auto'
                        />
                    </Link>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon aria-hidden='true' className='size-6' />
                    </button>
                </div>
                <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
                    <Popover className='relative'>
                        <PopoverButton className='flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 px-4 py-2'>
                            Projets
                            <ChevronDownIcon
                                aria-hidden='true'
                                className='size-5 flex-none text-gray-400'
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
                            <div className='p-4'>
                                {easy.map((item) => (
                                    <div
                                        key={item.name}
                                        className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50'>
                                        <div
                                            className={`flex size-16 flex-none items-center justify-center rounded-lg ${
                                                item.level == 'Easy'
                                                    ? 'bg-green-400'
                                                    : ''
                                            } ${
                                                item.level == 'Medium'
                                                    ? 'bg-blue-400'
                                                    : ''
                                            } ${
                                                item.level == 'Hard'
                                                    ? 'bg-red-400'
                                                    : ''
                                            }`}>
                                            <p>{item.level}</p>
                                        </div>
                                        <div className='flex-auto'>
                                            <Link
                                                to={item.href}
                                                className='block font-semibold text-gray-900'>
                                                {item.name}
                                                <span className='absolute inset-0' />
                                            </Link>
                                            <p className='mt-1 text-gray-600'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <Link
                        to='/'
                        className='text-sm/6 font-semibold text-gray-900'>
                        Accueil <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </div>
            </nav>

            {/* Navigation en mode mobile */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className='lg:hidden'>
                <div className='fixed inset-0 z-10' />
                <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link href='/' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Your Company</span>
                            <img
                                alt=''
                                src='https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600'
                                className='h-8 w-auto'
                            />
                        </Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'>
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon aria-hidden='true' className='size-6' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Disclosure as='div' className='-mx-3'>
                                    <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>
                                        Product
                                        <ChevronDownIcon
                                            aria-hidden='true'
                                            className='size-5 flex-none group-data-[open]:rotate-180'
                                        />
                                    </DisclosureButton>
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
