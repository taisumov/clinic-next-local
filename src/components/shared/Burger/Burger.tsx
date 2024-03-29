import { forwardRef, type LegacyRef, useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/base/Dialog';
import { LinkIntoView } from '@/components/base/LinkIntoView';
import { LogoWithName } from '@/components/shared/LogoWithName';
import { MakeAnAppointmentDialog } from '@/components/shared/MakeAnAppointmentDialog';

import cx from './index.module.scss';

export const Burger = ({ applicationList }: any) => {
	const [vision, setVision] = useState(false);
	return (
		<Dialog open={vision} onOpenChange={setVision}>
			<DialogTrigger>
				<BurgerButton />
			</DialogTrigger>
			<DialogContent type="Burger">
				<Menu applicationList={applicationList} setVision={setVision} />
			</DialogContent>
		</Dialog>
	);
};

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

export const Menu = ({ applicationList, setVision }: any) => (
	<>
		<LogoWithName withoutText />

		<nav id="navigation">
			<ul className={cx('Menu')}>
				<li className={cx('MenuItem')}>
					<LinkIntoView href="#promo" setVision={setVision}>
						Новости и акции
					</LinkIntoView>
				</li>
				<li className={cx('MenuItem')}>
					<LinkIntoView href="#contacts" setVision={setVision}>
						Контакты
					</LinkIntoView>
				</li>
				<li className={cx('MenuItem', 'Button')}>
					<MakeAnAppointmentDialog
						hide={false}
						applicationList={applicationList}
					/>
				</li>
			</ul>
		</nav>
		{/* <ModalWithPhone /> */}
	</>
);
