import cn from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import cx from './index.module.scss';

export const CircleWithIcon = ({ imgSrc, text, rightSide, href }: any) => (
	<li className={cx('Root')}>
		<Link href={{ pathname: href, query: { category: text } }}>
			<Image className={cx('image')} alt="picture" src={imgSrc} fill />
			<p className={cx('text', rightSide ? 'right' : 'left')}>{text}</p>
		</Link>
	</li>
);
