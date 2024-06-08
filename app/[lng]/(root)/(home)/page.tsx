'use client';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Page() {
	const { lng } = useParams();
	const { t } = useTranslation(lng as string);
	return <div className=''>{t('home')}</div>;
}
