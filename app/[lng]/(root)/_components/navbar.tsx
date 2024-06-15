'use client';
import { navApi } from '@/api';
import DarkMood from '@/components/shared/dark-mood';
import LanguageDropdown from '@/components/shared/language-dropdown';
import Search from '@/components/shared/search';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedOut, UserButton, SignedIn } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { dark } from '@clerk/themes';
import UserBox from '@/components/shared/user-box';

export default function Navbar() {
	const { resolvedTheme } = useTheme();
	return (
		<div className='fixed inset-0 z-40 h-20 w-full '>
			<nav className='mx-auto flex h-20 max-w-7xl items-center justify-between  border-b px-5 md:px-0'>
				<div className='flex items-center gap-5'>
					<div className='flex items-center gap-2'>
						<FaOpencart size={'45px'} />
						<span className='text-2xl'>Fruits</span>
					</div>
					{navApi.map(item => (
						<Link href={item.route} key={item.id}>
							{item.nav}
						</Link>
					))}
				</div>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2 border-r px-4'>
						<Search />
						<DarkMood />
						<Button size={'icon'} variant={'ghost'}>
							<LanguageDropdown />
						</Button>

						<Button size={'icon'} variant={'ghost'}>
							<ShoppingCart />
						</Button>
					</div>
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
	);
}
