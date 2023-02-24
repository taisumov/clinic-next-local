import { PRICE } from '@/components/pages/Service/constants';

import { PriceItem } from '../PriceItem';

import cx from './index.module.scss';

export const PriceBlock = ({ priceList }: any) => (
	<div className={cx('price__block')}>
		{priceList?.map((el: any) => (
			<PriceItem key={priceList.id} {...el.attributes} />
		))}
	</div>
);
