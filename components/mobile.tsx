'use client';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { AlignRight, ShoppingCart } from 'lucide-react';
import Search from './shared/search';
import DarkMood from './shared/dark-mood';
import { Button } from './ui/button';
import LanguageDropdown from './shared/language-dropdown';
import { navApi } from '@/api';
import Link from 'next/link';
import useTranslate from '@/hooks/use-translate';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import UserBox from './shared/user-box';

export default function Mobile() {
	const t = useTranslate();
	return (
		<Sheet>
			<SheetTrigger>
				<AlignRight />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<nav className='flex flex-col  justify-between space-y-4 border-b px-5  pb-4 pt-5'>
						<div className='flex flex-col items-end gap-5'>
							{navApi.map(item => (
								<Link href={item.route} key={item.id}>
									{t(item.nav)}
								</Link>
							))}
						</div>
					</nav>
					<div className='flex flex-wrap items-center gap-2'>
						<div className='flex flex-col  gap-4 py-4'>
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
						<div className='flex items-center gap-2 '>
							<Search />
							<DarkMood />
							<Button size={'icon'} variant={'ghost'}>
								<LanguageDropdown />
							</Button>
							<Button size={'icon'} variant={'ghost'}>
								<ShoppingCart />
							</Button>
						</div>
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
