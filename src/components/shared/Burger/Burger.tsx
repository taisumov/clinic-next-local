import { forwardRef, type LegacyRef } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/base/Dialog';
import { LinkIntoView } from '@/components/base/LinkIntoView';
import { LogoWithName } from '@/components/shared/LogoWithName';
// import { ModalWithPhone } from '@/components/shared/ModalWithPhone';

import cx from './index.module.scss';

export const Burger = () => (
	<Dialog>
		<DialogTrigger>
			<BurgerButton />
		</DialogTrigger>
		<DialogContent type="Burger">
			<Menu />;
		</DialogContent>
	</Dialog>
);
export const BurgerButton = forwardRef(
	(props, ref: LegacyRef<HTMLButtonElement>) => (
		<button
			ref={ref}
			className={cx('Hamburger')}
			aria-label="Menu"
			aria-controls="navigation"
		>
			<span className={cx('Bar')}></span>
		</button>
	)
);

BurgerButton.displayName = 'BurgerButton';

export const Menu = () => (
	<>
		<LogoWithName />

		<nav id="navigation">
			<ul className={cx('Menu')}>
				<li className={cx('MenuItem')}>
					<LinkIntoView href="#promo">Новости и акции</LinkIntoView>
				</li>
				<li className={cx('MenuItem')}>
					<LinkIntoView href="#contacts">Контакты</LinkIntoView>
				</li>
				<button className={cx('Button')}>Запись на прием</button>
			</ul>
		</nav>
		{/* <ModalWithPhone /> */}
	</>
);
