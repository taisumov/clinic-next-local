import { type Cards } from '@/components/pages/Services/constants';

import { Card } from '../Card';
import { Region } from '../Region';

import cx from './index.module.scss';

export const ServicesList = ({ arr }: any) => (
	<Region className={cx('services')}>
		<div className={cx('services__list')}>
			{arr?.attributes?.receptions.data.map((elem: any) => (
				<Card
					key={elem.id}
					href={`/reception?service=${Number(elem.id)}`}
					descr={elem.attributes.link}
				/>
			))}
		</div>
	</Region>
);
