import { LinkIntoView } from '@/components/base/LinkIntoView';
import { Burger } from '@/components/shared/Burger';
import { LogoWithName } from '@/components/shared/LogoWithName';
import { useState } from 'react';

import { MakeAnAppointmentDialog } from '../MakeAnAppointmentDialog';

import cx from './index.module.scss';

export const Header = ({ isBackground, applicationList }: any) => {
	return (
		<header
			className={cx('Header')}
			style={isBackground ? { background: 'transparent' } : {}}
		>
			<LogoWithName />

			<Burger applicationList={applicationList} />

			<LinkIntoView href="#promo" className={cx('News', 'hide')}>
				Новости и акции
			</LinkIntoView>

			<LinkIntoView href="#contacts" className={cx('Contacts', 'hide')}>
				Контакты
			</LinkIntoView>

			<MakeAnAppointmentDialog
				className={cx('hide')}
				applicationList={applicationList}
			/>
		</header>
	);
};
