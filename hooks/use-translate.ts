
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function useTranslate() {
  const {lng} = useParams()
  const { t } = useTranslation(lng);
  return t
}
