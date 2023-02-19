import { LinkIntoView } from '@/components/base/LinkIntoView';
import { LogoWithName } from '@/components/shared/LogoWithName';

import { MakeAnAppointmentDialog } from '../MakeAnAppointmentDialog';

import cx from './index.module.scss';

export const Header = () => (
	<header className={cx('Header')}>
		<LogoWithName />

		<LinkIntoView href="#promo" className={cx('News', 'hide')}>
			Новости и акции
		</LinkIntoView>

		<LinkIntoView href="#contacts" className={cx('Contacts', 'hide')}>
			Контакты
		</LinkIntoView>

		<MakeAnAppointmentDialog className={cx('hide')} />
	</header>
);
