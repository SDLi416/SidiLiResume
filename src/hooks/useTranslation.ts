// hooks/useTranslation.js
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();

  const t = (id: any, values = {}, defaultMessage = '') => {
    return intl.formatMessage({ id, defaultMessage }, values);
  };

  return {
    t,
  };
}
