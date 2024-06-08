import { ReactNode } from 'react';

export interface RootNode {
	children: ReactNode;
}

export interface LngParams {
	params: { lng: string };
}
