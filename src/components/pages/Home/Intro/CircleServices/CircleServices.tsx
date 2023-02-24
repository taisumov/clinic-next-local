import { useEffect, useState } from 'react';

import { useDataContext } from '@/context/DataContext';

import { Circle, CircleWithIcon } from '../Circle';
import { services } from '../constants';

import cx from './index.module.scss';

export const CircleServices = () => {
	const { categories } = useDataContext();
	const [uslugi, setUslugi] = useState(categories.data);

	const deeep = (uuu: any) => {
		setUslugi(uuu);
	};

	return (
		<div className={cx('Root')}>
			<ul className={cx('circle')}>
				{uslugi.map((item: any, index: number) => {
					if (item.attributes?.subcategories) {
						return (
							<Circle
								onClick={deeep}
								subItems={item.attributes.subcategories.data}
								key={item.id}
								imgSrc={item.attributes.bg.data.attributes.url}
								text={item.attributes.text}
								rightSide={index < uslugi.length / 2}
							/>
						);
					}

					return (
						<CircleWithIcon
							href={item.attributes.href}
							key={item.id}
							imgSrc={item.attributes.bg.data.attributes.url}
							text={item.attributes.text}
							rightSide={index < uslugi.length / 2}
						/>
					);
				})}
			</ul>
		</div>
	);
};
