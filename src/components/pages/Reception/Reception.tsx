import Link from 'next/link';

import { DoctorCardsList } from '@/components/base/DoctorCardsList';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { Burger } from '../../shared/Burger';
import { Header } from '../../shared/Header';

import cx from './index.module.scss';
import { useEffect } from 'react';

const TITLE = 'Услуги';
const BUTTON = 'Прейскурант';
const BUTTON_TEXT = 'Подробнее...';
const SERVICES_LIST = 'Ведущие специалисты';

export const Reception = ({ reception }: any) => {
	const { data } = reception;

	useEffect(() => {
		console.log(reception, '11');
	}, []);

	return (
		<>
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

					<Link
						href={{ pathname: '/service', query: { service: data?.id } }}
						className={cx('title__btn', 'button')}
					>
						{BUTTON}{' '}
						<span className={cx('title__btn-subtext')}>{BUTTON_TEXT}</span>
					</Link>
				</Region>
				{data.attributes.subcategory.data.attributes.doctors.data.length ? (
					<section className={cx('specialists')}>
						<h2 className={cx('title__head', 'specialists__head')}>
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
						<h2 className={cx('ServiceTitle')}>{TITLE}</h2>
						<ServicesList arr={data?.attributes?.subcategory.data} />
					</>
				) : (
					<></>
				)}
			</main>
		</>
	);
};
