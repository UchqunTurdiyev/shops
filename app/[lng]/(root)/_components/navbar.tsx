import { navApi } from '@/api';
import DarkMood from '@/components/shared/dark-mood';
import LanguageDropdown from '@/components/shared/language-dropdown';
import Search from '@/components/shared/search';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaOpencart } from 'react-icons/fa';

export default function Navbar() {
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

					<Button size={'lg'} variant={'ghost'} className='rounded-xl'>
						Login
					</Button>
					<Button size={'lg'} className='rounded-xl'>
						Register
					</Button>
				</div>
			</nav>
		</div>
	);
}
