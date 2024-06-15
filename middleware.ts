import { authMiddleware } from '@clerk/nextjs/server';

import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
	locales: ['en', 'ru', 'uz'],
	defaultLocale: 'en',
});

export default authMiddleware({
	beforeAuth: req => intlMiddleware(req),
	publicRoutes: ['/:lng'],
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
