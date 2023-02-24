import { useRouter } from 'next/router';

import { PriceBlock } from '@/components/base/PriceBlock';
import { Region } from '@/components/base/Region';

import cx from './index.module.scss';

export const Service = ({ priceList, path }: any) => {
	const data = priceList?.data.find(
		(service: any) => service.id === Number(path.service)
	);

	return (
		<>
			<Region Tag="main" className={cx('Root')}>
				<section className={cx('title')}>
					<h2 className={cx('title__head')}>
						{data?.attributes.subcategory.data.attributes.text}
					</h2>
					<hr className={cx('hr')} />
					<hr className={cx('hr')} />
					<p className={cx('title__desc')}>
						{data?.attributes.subcategory.data.attributes.description}
					</p>
				</section>
				<section className={cx('price')}>
					{/* <div className={cx('price__content')}>
						<div className={cx('price__block')}>
							<div className={cx('price__item')}>
								<a href="#" className={cx('price__name')}>
									Гинекологический прием
								</a>
								<p className={cx('price__cost')}>2500 руб.</p>
							</div>
							<div className={cx('price__item')}>
								<a href="#" className={cx('price__name')}>
									Гинекологический прием
								</a>
								<p className={cx('price__cost')}>2500 руб.</p>
							</div>
							<div className={cx('price__item')}>
								<a href="#" className={cx('price__name')}>
									Гинекологический прием
								</a>
								<p className={cx('price__cost')}>2500 руб.</p>
							</div>
						</div>
					</div> */}
					<PriceBlock priceList={data?.attributes.price_lists.data} />
				</section>
			</Region>
		</>
	);
};
