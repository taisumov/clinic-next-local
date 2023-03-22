import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useDataContext } from '@/context/DataContext';

import { Circle, CircleWithIcon } from '../Circle';

import circleImage from './circle.png';
import back from './back.png';

import cx from './index.module.scss';

export const CircleServices = () => {
	const { categories } = useDataContext();
	const [currentLevel, setCurrentLevel] = useState(categories.data);
	const [selectedCategory, setSelectedCategory] = useState('');

	const handleChangeLevel = (circles: any) => {
		setCurrentLevel(circles);
	};

	return (
		<div className={cx('RootRoot')}>
			<div className={cx('Root')}>
				{currentLevel.length <= 6 && (
					<>
						<ul
							className={cx('circle')}
							style={
								selectedCategory.length
									? {
											backgroundImage: `url(${circleImage.src})`,
											backgroundPosition: 'bottom center',
											backgroundSize: 'contain',
									  }
									: {}
							}
						>
							{currentLevel.slice(0, 5).map((item: any, index: number) => {
								if (item.attributes?.subcategories) {
									return (
										<Circle
											onClick={handleChangeLevel}
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
										imgSrc={
											'https://res.cloudinary.com/dsrqil9aq/image/upload/v1677525509/Copy_Copy_Ellipse_49_587c156bd1.png?updated_at=2023-02-27T19:18:29.903Z'
										}
										text={item.attributes.text}
										rightSide={index < 3}
									/>
								);
							})}
						</ul>
						<div
							onClick={() => {
								setCurrentLevel(categories.data);
								setSelectedCategory('');
							}}
							className={cx('textContainer')}
							style={selectedCategory === '' ? { top: '25%', left: '38%' } : {}}
						>
							{selectedCategory.length ? selectedCategory : <></>}
						</div>
					</>
				)}
			</div>
			{currentLevel.length > 6 && (
				<div className={cx('extraItemsContainer')}>
					<div className={cx('extraItems')}>
						<Image
							src={back}
							alt="back"
							className={cx('arrow-back')}
							onClick={() => {
								setCurrentLevel(categories.data);
								setSelectedCategory('');
							}}
						/>
						{currentLevel.map((item: any) => (
							<Link
								key={item.attributes.text}
								href={{
									pathname: '/services',
									query: { category: item.attributes.text },
								}}
							>
								<div className={cx('extraItem')}>
									<div className={cx('extraImageContainer')}>
										<Image
											className={cx('extraImage')}
											alt="picture"
											src={
												'https://res.cloudinary.com/dsrqil9aq/image/upload/v1677525509/' +
												'Copy_Copy_Ellipse_49_587c156bd1.png?updated_at=2023-02-27T19:18:29.903Z'
											}
											fill
										/>
									</div>
									<div>{item.attributes.text}</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
