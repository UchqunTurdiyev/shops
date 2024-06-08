import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { lngApi } from '@/api';
import Image from 'next/image';
import { Languages } from 'lucide-react';
import Link from 'next/link';

export default function LanguageDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Languages className='cursor-pointer' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{lngApi.map(lng => (
						<Link href={lng.route} key={lng.route}>
							<DropdownMenuItem className='cursor-pointer'>
								<Image src={`/assets/locales/${lng.route}.png`} alt={lng.route} width={30} height={30} />
								<span className='pl-3 font-marcellus'>{lng.name}</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
