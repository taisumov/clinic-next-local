import cn from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import cx from './index.module.scss';
import {useDataContext} from "@/context/DataContext";

export const CircleWithIcon = ({ imgSrc, text, rightSide, href }: any) => {

	const { about } = useDataContext();

	return (
		<li className={cx('Root')}>
			<Link href={{pathname: href, query: JSON.stringify(about)}}>
				<Image className={cx('image')} alt="picture" src={imgSrc} fill/>
				<p className={cx('text', rightSide ? 'right' : 'left')}>{text}</p>
			</Link>
		</li>
	);
}
