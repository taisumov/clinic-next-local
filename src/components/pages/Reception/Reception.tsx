import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DoctorCardsList } from '@/components/base/DoctorCardsList';
import { Heading } from '@/components/base/Heading';
import { PriceBlock } from '@/components/base/PriceBlock';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { Burger } from '../../shared/Burger';
import { Header } from '../../shared/Header';

import cx from './index.module.scss';

const TITLE = 'Услуги';
const BUTTON = 'Прейскурант';
const BUTTON_TEXT = 'Подробнее...';
const SERVICES_LIST = 'Ведущие специалисты';

export const Reception = ({ reception, priceList }: any) => {
	const { data } = reception;
	const [isPriceListVisible, setIsPriceListVisible] = useState<boolean>(false);

	useEffect(() => {
		console.log(priceList.data, '1231');
	}, []);

	return (
		<div className={cx('receptionPage')}>
			<Header />
			<main className={cx('main')}>
				<Region className={cx('title')}>
					<div className={cx('background')}>
						<h2 className={cx('title__head__sub')}>
							{data?.attributes?.subcategory?.data?.attributes.text}
						</h2>
						<Heading className={cx('title__head')}>
							{data?.attributes?.link}
						</Heading>
						<hr className={cx('hr')} />
						<hr className={cx('hr')} />
						<p className={cx('title__desc')}>
							{data?.attributes?.subcategory?.data.attributes.description}
						</p>
					</div>

					{/* <Link */}
					{/*	href={{ pathname: '/service', query: { service: data?.id } }} */}
					{/*	className={cx('reception_title__btn', 'reception_button')} */}
					{/* > */}
					{/*	{BUTTON}{' '} */}
					{/*	<span className={cx('reception_title__btn-subtext')}>{BUTTON_TEXT}</span> */}
					{/* </Link> */}
				</Region>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<div
						onClick={() => {
							setIsPriceListVisible((prev) => !prev);
						}}
						className={cx('reception_title__btn', 'reception_button')}
					>
						{BUTTON}{' '}
						<span className={cx('reception_title__btn-subtext')}>
							{BUTTON_TEXT}
						</span>
					</div>
				</div>

				{/* {isPriceListVisible && ( */}
				<Region
					Tag="main"
					className={isPriceListVisible ? cx('RootActive', 'Root') : cx('Root')}
				>
					<section className={cx('price')}>
						<PriceBlock
							priceList={priceList.data[0].attributes.price_lists?.data}
						/>
					</section>
				</Region>
				{/* )} */}

				{data.attributes.subcategory?.data.attributes.doctors?.data.length ? (
					<section className={cx('reception_specialists')}>
						<h2
							className={cx(
								'reception_title__head',
								'reception_specialists__head'
							)}
						>
							{SERVICES_LIST}
						</h2>
						<DoctorCardsList
							data={
								data?.attributes?.subcategory.data.attributes?.doctors?.data
							}
						/>
					</section>
				) : (
					<></>
				)}
				{data?.attributes?.subcategory.data.attributes?.receptions?.data
					.length > 1 ? (
					<>
						<h2 className={cx('reception_ServiceTitle')}>{TITLE}</h2>
						<ServicesList arr={data?.attributes?.subcategory.data} />
					</>
				) : (
					<></>
				)}
			</main>
		</div>
	);
};
