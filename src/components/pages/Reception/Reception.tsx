import parse from 'html-react-parser';
import Link from 'next/link';

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

export const Reception = () => (
	<main className={cx('main')}>
		<Region className={cx('title')}>
			<Heading className={cx('title__head')}>{HEADING.title}</Heading>
			<hr className={cx('hr')} />
			<hr className={cx('hr')} />
			<p className={cx('title__desc')}>{parse(HEADING.descr)}</p>

			<Link href="/service" className={cx('title__btn', 'button')}>
				{BUTTON} <span className={cx('title__btn-subtext')}>{BUTTON_TEXT}</span>
			</Link>
		</Region>

		<section className={cx('specialists')}>
			<h2 className={cx('title__head', 'specialists__head')}>
				{SERVICES_LIST}
			</h2>
			<DoctorCardsList />
		</section>
		<h2 className={cx('ServiceTitle')}>{TITLE}</h2>
		<ServicesList arr={SERVICES_LIST_SERVICE} />
	</main>
);
