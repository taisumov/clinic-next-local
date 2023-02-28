import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import cx from './index.module.scss';

export const Services = ({ categories }: any) => {
	const router = useRouter();
	const [findedData, setFindedData]: any = useState({});

	useEffect(() => {
		if (router.isReady) {
			setFindedData(
				categories.data.find(
					(subcategory: any) =>
						subcategory.attributes.text === router.query.category
				)
			);
		}
	}, [router]);

	return (
		<main className={cx('Root')}>
			<Region className={cx('title')}>
				<Heading className={cx('title__head')}>
					{findedData
						? findedData?.attributes?.category?.data.attributes.text
						: ''}
				</Heading>
				<Heading className={cx('title__head')}>
					{findedData?.attributes?.text}
				</Heading>
				<hr className={cx('hr')} />
				<hr className={cx('hr')} />
			</Region>
			<ServicesList arr={findedData} />
		</main>
	);
};
