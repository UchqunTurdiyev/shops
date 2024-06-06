import { RootNode } from '@/types';
import React from 'react';
import Navbar from './_components/navbar';

export default function Layout({ children }: RootNode) {
	return (
		<div>
			<Navbar />
			<main className='mx-auto max-w-7xl pt-24'>{children}</main>
		</div>
	);
}
