import { type Cards } from '@/components/pages/Services/constants';

import { Card } from '../Card';
import { Region } from '../Region';

import cx from './index.module.scss';

export const ServicesList = ({ arr }: { arr: Cards }) => (
	<Region className={cx('services')}>
		<div className={cx('services__list')}>
			{arr.map((elem) => (
				<Card key={elem.href} href={elem.href} descr={elem.link} />
			))}
		</div>
	</Region>
);
