import React from 'react';
import { Button } from '../ui/button';
import { SearchIcon } from 'lucide-react';

export default function Search() {
	return (
		<Button size={'icon'} variant={'ghost'}>
			<SearchIcon />
		</Button>
	);
}
