import { PriceBlock } from '@/components/base/PriceBlock';
import { Region } from '@/components/base/Region';

import { Header } from '../../shared/Header';

import cx from './index.module.scss';

export const Service = ({ reception, applicationList }: any) => (
	<>
		<Header applicationList={applicationList} />
		<Region Tag="main" className={cx('Root')}>
			<section className={cx('title')}>
				<div className={cx('background')}>
					<h2 className={cx('title__head')}>
						{reception.subcategory.data.attributes.text}
					</h2>
					<hr className={cx('hr')} />
					<hr className={cx('hr')} />
					<p className={cx('title__desc')}>
						{reception.subcategory.data.attributes.description}
					</p>
				</div>
			</section>
			<section className={cx('price')}>
				<PriceBlock priceList={reception.price_lists.data} />
			</section>
		</Region>
	</>
);
