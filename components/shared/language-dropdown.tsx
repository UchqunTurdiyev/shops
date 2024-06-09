'use client';
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { lngApi } from '@/api';
import Image from 'next/image';
import { Languages } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function LanguageDropdown() {
	const { lng } = useParams();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Languages className='cursor-pointer' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{lngApi.map(item => (
						<Link href={item.route} key={item.route}>
							<DropdownMenuItem className={cn('cursor-pointer', lng === item.route && 'bg-secondary')}>
								<Image src={`/assets/locales/${item.route}.png`} alt={item.route} width={30} height={30} />
								<span className='pl-3 font-marcellus'>{item.name}</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
