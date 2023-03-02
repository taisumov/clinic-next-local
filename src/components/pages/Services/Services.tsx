import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { Burger } from '../../shared/Burger';
import { Header } from '../../shared/Header';

import cx from './index.module.scss';

export const Services = ({ subcategory }: any) => (
	<>
		<div className={cx('container')}>
			<main className={cx('Root')}>
				<div className={cx('headerBackground')}>
					<Header />
				</div>

				<Region className={cx('title')}>
					<Heading className={cx('title__head')}>
						{subcategory
							? subcategory?.attributes?.category?.data.attributes.text
							: ''}
					</Heading>
					<Heading className={cx('title__subhead')}>
						{subcategory?.attributes?.text}
					</Heading>
					<hr className={cx('hr')} />
					<hr className={cx('hr')} />
				</Region>
				<ServicesList arr={subcategory} />
			</main>
		</div>
	</>
);
