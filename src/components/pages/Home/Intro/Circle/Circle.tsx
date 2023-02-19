import Image from 'next/image';

import cx from './index.module.scss';

export const Circle = ({
	imgSrc,
	text,
	rightSide,
	onClick,
	subItems,
	href,
}: any) => (
	<li className={cx('root')} onClick={() => onClick(subItems)}>
		<Image className={cx('image')} alt="picture" src={imgSrc} fill />
		<p className={cx('text', rightSide ? 'right' : 'left')}>{text}</p>
	</li>
);
