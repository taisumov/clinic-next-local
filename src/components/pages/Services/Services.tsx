import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { SERVICES_LIST, TITLE } from './constants';

import cx from './index.module.scss';

export const Services = ({ categories, path }: any) => {
	const router = useRouter();
	let findedData: any;
	const data = categories.data.map(
		// eslint-disable-next-line no-return-assign
		(category: any) =>
			(findedData = category.attributes.subcategories.data.find(
				(subcategory: any) => subcategory.attributes.text === path.category
			))
	);

	useEffect(() => {
		console.log(findedData, 'finded');
		console.log(categories);
	}, [findedData]);

	console.log(categories);

	return (
		<main className={cx('Root')}>
			<Region className={cx('title')}>
				<Heading className={cx('title__head')}>
					{findedData
						? findedData?.attributes.category?.data.attributes.text
						: ''}
				</Heading>
				<Heading className={cx('title__head')}>
					{findedData?.attributes.text}
				</Heading>
				<hr className={cx('hr')} />
				<hr className={cx('hr')} />
			</Region>
			<ServicesList arr={findedData} />
		</main>
	);
};
