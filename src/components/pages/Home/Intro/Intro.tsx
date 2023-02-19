import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { CircleServices } from './CircleServices/CircleServices';

import cx from './index.module.scss';

export const Intro = () => (
	<Region className={cx('Intro')}>
		<Heading hidden>Каталог услуг</Heading>
		<CircleServices />
	</Region>
);
