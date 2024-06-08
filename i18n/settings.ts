export const fallbackLng = 'en';
export const languages = [fallbackLng, 'uz', 'ru'];

export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
	};
}
