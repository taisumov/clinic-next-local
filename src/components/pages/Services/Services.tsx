import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { SERVICES_LIST, TITLE } from './constants';

import cx from './index.module.scss';
import {useRouter} from "next/router";

export const Services = () => {

	const router = useRouter();
	const about = router.query;

	console.log(JSON.stringify(about))

	return (
		<main className={cx('Root')}>
			<Region className={cx('title')}>
				<Heading className={cx('title__head')}> {TITLE.first}</Heading>
				<Heading className={cx('title__head')}> {TITLE.second}</Heading>
				<hr className={cx('hr')}/>
				<hr className={cx('hr')}/>
			</Region>
			<ServicesList arr={SERVICES_LIST}/>
		</main>
	)
}
