import { authMiddleware } from '@clerk/nextjs/server';

import createMiddleware from 'next-intl/middleware';

const imtelMidlleware = createMiddleware({
	locales: ['en', 'uz', 'ru'],
	defaultLocale: 'en',
});

export default authMiddleware({
	beforeAuth: req => imtelMidlleware(req),
	publicRoutes: ['/:lng'],
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
