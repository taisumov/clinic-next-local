import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import cx from './index.module.scss';

export const Services = ({ subcategory }: any) => (
		<main className={cx('Root')}>
			<Region className={cx('title')}>
				<Heading className={cx('title__head')}>
					{subcategory
						? subcategory?.attributes?.category?.data.attributes.text
						: ''}
				</Heading>
				<Heading className={cx('title__head')}>
					{subcategory?.attributes?.text}
				</Heading>
				<hr className={cx('hr')} />
				<hr className={cx('hr')} />
			</Region>
			<ServicesList arr={subcategory} />
		</main>
	);
