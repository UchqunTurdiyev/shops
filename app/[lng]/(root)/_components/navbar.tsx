/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import { navApi } from '@/api';
import DarkMood from '@/components/shared/dark-mood';
import LanguageDropdown from '@/components/shared/language-dropdown';
import Search from '@/components/shared/search';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedOut, SignedIn } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import UserBox from '@/components/shared/user-box';
import useTranslate from '@/hooks/use-translate';
import Mobile from '@/components/mobile';

export default function Navbar() {
	const t = useTranslate();
	return (
		<>
			<div className='fixed inset-0 z-40 h-16 w-full border-b bg-background'>
				<div className='mx-auto flex h-14 max-w-7xl items-center justify-between max-2xl:px-4'>
					<div className='flex items-center gap-2'>
						<FaOpencart size={'45px'} />
						<span className='text-2xl'>Fruits</span>
					</div>

					<div className='flex items-center gap-2'>
						<div className='hidden items-center gap-2 sm:flex '>
							<Search />
							<DarkMood />
							<Button size={'icon'} variant={'ghost'}>
								<LanguageDropdown />
							</Button>
							<Button size={'icon'} variant={'ghost'}>
								<ShoppingCart />
							</Button>
						</div>
						<div className='md:hidden  '>
							<Mobile />
						</div>
					</div>
				</div>
			</div>
			<div className='hidden w-full pt-14 sm:block'>
				<nav className=' mx-auto flex h-20 max-w-7xl items-center justify-between border-b  px-5 max-2xl:px-4'>
					<div className='flex items-center gap-5'>
						{navApi.map(item => (
							<Link href={item.route} key={item.id}>
								{t(item.nav)}
							</Link>
						))}
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2 border-r px-4'></div>
						<SignedIn>
							<UserBox />
						</SignedIn>

						<SignedOut>
							<SignInButton mode={'modal'}>
								<Button size={'lg'} variant={'ghost'} className='rounded-xl'>
									Login
								</Button>
							</SignInButton>
							<SignUpButton mode={'modal'}>
								<Button size={'lg'} className='rounded-xl'>
									Register
								</Button>
							</SignUpButton>
						</SignedOut>
					</div>
				</nav>
			</div>
		</>
	);
}
