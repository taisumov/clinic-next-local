import footerBackgroundMax from 'public/bg/footerBackgroundMax.png';

import { BgImage } from '@/components/base/BgImage/BgImage';

import cx from './index.module.scss';

export const Footer = () => (
	<footer className={cx('footer')}>
		<BgImage src={footerBackgroundMax} alt="Синие фигуры" />

		<ul className={cx('list')}>
			<li className={cx('listItem')}>
				<a href="#contacts">Контакты</a>
			</li>
			<li className={cx('listItem')}>
				<a href="">Вакансии</a>
			</li>
			<li className={cx('listItem')}>
				<a href="">Запись на прием</a>
			</li>
		</ul>
	</footer>
);
