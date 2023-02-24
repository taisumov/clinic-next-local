import parse from 'html-react-parser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { DoctorCardsList } from '@/components/base/DoctorCardsList';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { SERVICES_LIST_SERVICE } from '../Services/constants';

import { HEADING } from './constants/constants';

import cx from './index.module.scss';

const TITLE = 'Услуги гинекологии';
const BUTTON = 'Прескурант';
const BUTTON_TEXT = 'Подробнее...';
const SERVICES_LIST = 'Ведущие специалисты';

export const Reception = ({ receptions, path }: any) => {
	const data = receptions.data.find(
		(recept: any) => recept.id === Number(path.service)
	);
	console.log(data, '213');

	return (
		<main className={cx('main')}>
			<Region className={cx('title')}>
				<Heading className={cx('title__head')}>{data?.attributes.link}</Heading>
				<hr className={cx('hr')} />
				<hr className={cx('hr')} />
				<p className={cx('title__desc')}>
					{data?.attributes.subcategory.data.attributes.description}
				</p>

				<Link
					href={{ pathname: '/service', query: { service: data?.id } }}
					className={cx('title__btn', 'button')}
				>
					{BUTTON}{' '}
					<span className={cx('title__btn-subtext')}>{BUTTON_TEXT}</span>
				</Link>
			</Region>

			<section className={cx('specialists')}>
				<h2 className={cx('title__head', 'specialists__head')}>
					{SERVICES_LIST}
				</h2>
				<DoctorCardsList
					data={data?.attributes.subcategory.data.attributes.doctors.data}
				/>
			</section>
			<h2 className={cx('ServiceTitle')}>{TITLE}</h2>
			<ServicesList arr={data?.attributes.subcategory.data} />
		</main>
	);
};
