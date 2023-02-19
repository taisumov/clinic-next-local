import { useState } from 'react';

import { Circle, CircleWithIcon } from '../Circle';
import { services } from '../constants';

import cx from './index.module.scss';

export const CircleServices = () => {
	const [uslugi, setUslugi] = useState(services);

	const deeep = (uuu: any) => {
		setUslugi(uuu);
	};

	return (
		<div className={cx('Root')}>
			<ul className={cx('circle')}>
				{uslugi.map((item) => {
					if (item?.subItems) {
						return (
							<Circle
								onClick={deeep}
								subItems={item.subItems}
								key={item.id}
								imgSrc={item.bg}
								text={item.text}
								rightSide={item.rightSide}
							/>
						);
					}

					return (
						<CircleWithIcon
							href={item.href}
							key={item.id}
							imgSrc={item.bg}
							text={item.text}
							rightSide={item.rightSide}
						/>
					);
				})}
			</ul>
		</div>
	);
};
