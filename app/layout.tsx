import type { Metadata } from 'next';
import { PT_Sans as PTSans, Marcellus } from 'next/font/google';
import './globals.css';
import { RootNode } from '@/types';
import { ThemeProvider } from '@/components/shared/theme.provider';

const ptSans = PTSans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-ptSans',
});

const marcellus = Marcellus({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-marcellus',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: RootNode) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${ptSans.variable} ${marcellus.variable}`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
