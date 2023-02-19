import { LinkIntoView } from '@/components/base/LinkIntoView';

import cx from './index.module.scss';

interface SidebarProp {
	email: string;
	password: string;
}

export const Sidebar = ({ isOpen, setOpen, setOpenModal }: any) => {
	const toggleSidebar = () => setOpen(false);
	const openModal = () => setOpenModal(true);

	return (
		<div className={cx('Sidebar', { SidebarActive: isOpen })}>
			<nav>
				<ul className={cx('SidebarMenu')}>
					<li className={cx('SidebarMenuItem')}>
						<LinkIntoView onClick={toggleSidebar} href="#promo">
							Новости и акции
						</LinkIntoView>
					</li>
					<li className={cx('SidebarMenuItem')}>
						<LinkIntoView onClick={toggleSidebar} href="#contacts">
							Контакты
						</LinkIntoView>
					</li>
				</ul>
			</nav>
			<div className={cx('SidebarBottom')}>
				<a href="tel:+79256553328">+7-925-655-33-28</a>
				<button onClick={openModal}>Запись на прием</button>
			</div>
		</div>
	);
};
