import Link from 'next/link';

import { DoctorCardsList } from '@/components/base/DoctorCardsList';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { Burger } from '../../shared/Burger';
import { Header } from '../../shared/Header';

import cx from './index.module.scss';

const TITLE = 'Услуги';
const BUTTON = 'Прейскурант';
const BUTTON_TEXT = 'Подробнее...';
const SERVICES_LIST = 'Ведущие специалисты';

export const Reception = ({ reception }: any) => {
	const { data } = reception;

	return (
		<>
			<Header />
			<main className={cx('main')}>
				<Region className={cx('title')}>
					<Heading className={cx('title__head')}>
						{data?.attributes?.link}
					</Heading>
					<hr className={cx('hr')} />
					<hr className={cx('hr')} />
					<p className={cx('title__desc')}>
						{data?.attributes?.subcategory?.data.attributes.description}
					</p>

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

				<h2 className={cx('ServiceTitle')}>{TITLE}</h2>
				<ServicesList arr={data?.attributes?.subcategory.data} />
			</main>
		</>
	);
};
