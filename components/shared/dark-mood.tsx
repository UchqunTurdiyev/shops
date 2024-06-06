'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export default function DarkMood() {
	const [mount, setMount] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMount(true);
	}, []);

	return mount && resolvedTheme === 'dark' ? (
		<Button size={'icon'} variant={'outline'} onClick={() => setTheme('light')}>
			<Sun />
		</Button>
	) : (
		<Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
			<Moon />
		</Button>
	);
}
