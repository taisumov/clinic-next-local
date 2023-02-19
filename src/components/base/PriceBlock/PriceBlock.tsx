import { PRICE } from '@/components/pages/Service/constants';

import { PriceItem } from '../PriceItem';

import cx from './index.module.scss';

export const PriceBlock = () => (
	<div className={cx('price__block')}>
		{PRICE.map((el, i) => (
			<PriceItem key={i} {...el} />
		))}
	</div>
);
