import type { Metadata } from 'next';
import { PT_Sans as PTSans, Marcellus } from 'next/font/google';
import './globals.css';
import { RootNode } from '@/types';
import { ThemeProvider } from '@/components/shared/theme.provider';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import { ClerkProvider } from '@clerk/nextjs';
import { localization } from '@/lib/utils';

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

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }));
}

interface Props extends RootNode {
	params: { lng: string };
}

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children, params: { lng } }: Props) {
	const local = localization(lng);
	return (
		<ClerkProvider localization={local}>
			<html lang={lng} suppressHydrationWarning dir={dir(lng)}>
				<body className={`${ptSans.variable} ${marcellus.variable}`}>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
