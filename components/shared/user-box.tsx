'use client';

import { SignOutButton, useUser } from '@clerk/nextjs';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarImage } from '../ui/avatar';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../ui/dropdown-menu';
import Link from 'next/link';

export default function UserBox() {
	const { user } = useUser();
	console.log(user?.imageUrl);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 cursor-pointer'>
					<AvatarImage src={user?.imageUrl} />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-80' align='start' alignOffset={11} forceMount>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='font-marcellus text-xs font-medium leading-none text-muted-foreground'>
						{user?.emailAddresses[0].emailAddress}
					</p>
					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary p-1'>
							<Avatar className='size-8'>
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>
						<div className='space-y-1'>
							<p className='line-clamp-1 font-marcellus text-sm'>{user?.fullName}</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />
				<Link href={'/user-profile'}>
					<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>Manage account</DropdownMenuItem>
				</Link>
				<DropdownMenuItem asChild className='w-full cursor-pointer text-muted-foreground'>
					<SignOutButton>Log Out</SignOutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
