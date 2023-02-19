import Link from 'next/link';

import cx from './index.module.scss';

import Logo from '/public/icon/headerLogo.svg';

export const LogoWithName = () => (
	<Link href="/" className={cx('LogoLink')}>
		<Logo className={cx('LogoPicture')} alt="logo" />

		<p className={cx('LogoText')}>Медицинский центр</p>
		<p className={cx('LogoTextMob')}>Диагностический медицинский центр</p>
	</Link>
);
