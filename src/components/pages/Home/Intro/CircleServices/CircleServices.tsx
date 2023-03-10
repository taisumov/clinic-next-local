import { useEffect, useState } from 'react';

import { useDataContext } from '@/context/DataContext';

import { Circle, CircleWithIcon } from '../Circle';
import Image from 'next/image';
import logo from '../CircleServices/logo.png';
import circleImage from './circle.png';

import cx from './index.module.scss';

export const CircleServices = () => {
	const { categories } = useDataContext();
	const [uslugi, setUslugi] = useState(categories.data);
	const [selectedCategory, setSelectedCategory] = useState('');

	const deeep = (uuu: any) => {
		setUslugi(uuu);
		// setSelectedCategory(item.attributes.text);
	};

	return (
		<div className={cx('Root')}>
			<ul
				className={cx('circle')}
				style={
					selectedCategory !== ''
						? {
								backgroundImage: `url(${circleImage.src})`,
								backgroundPosition: 'bottom center',
								backgroundSize: 'contain',
						  }
						: {}
				}
			>
				{uslugi.map((item: any, index: number) => {
					if (item.attributes?.subcategories) {
						return (
							<Circle
								onClick={deeep}
								subItems={item.attributes.subcategories.data}
								key={item.id}
								imgSrc={item.attributes.bg.data.attributes.url}
								text={item.attributes.text}
								rightSide={index < 3}
								setSelectedCategory={setSelectedCategory}
							/>
						);
					}

					return (
						<CircleWithIcon
							href={'/services'}
							key={item.id}
							imgSrc={item.attributes.bg.data.attributes.url}
							text={item.attributes.text}
							rightSide={index < uslugi.length / 2}
						/>
					);
				})}
			</ul>
			<div
				className={cx('textContainer')}
				style={selectedCategory === '' ? { top: '25%', left: '38%' } : {}}
			>
				{selectedCategory !== '' ? (
					selectedCategory
				) : (
					<></>
					// <Image
					// 	layout={'intrinsic'}
					// 	src={logo}
					// 	alt="logo"
					// 	width={400}
					// 	height={400}
					// />
				)}
			</div>
		</div>
	);
};
