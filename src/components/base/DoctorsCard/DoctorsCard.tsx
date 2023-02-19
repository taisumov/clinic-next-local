import parse from 'html-react-parser';
import Image from 'next/image';

import cx from './index.module.scss';

interface DoctorsCardProps {
	img: string;
	grade: {
		right: string;
		left: string;
	};
	age: number;
	post: string;
	skills: string;
	methods: string;
	education: Array<{
		descr: string;
	}>;
}

export const DoctorsCard = ({
	img,
	grade,
	post,
	skills,
	methods,
	education,
	age,
}: DoctorsCardProps) => (
	<div className={cx('cards__item')}>
		<div className={cx('cards__picture')}>
			<Image src={img} fill alt="doctor" className={cx('img')} />
			<div className={cx('cards__picture-overlay')}></div>
		</div>
		<div className={cx('cards__text')}>
			<div className={cx('cards__text-blur')}></div>
			<p className={cx('cards__text-desc', 'cards__text-desc--heading')}>
				{parse(grade.left)}
				<span className={cx('whiteTextBold')}>{age}</span> {parse(grade.right)}
			</p>
			<p
				className={cx(
					'cards__text-desc',
					'cards__text-desc--subheading',
					'whiteText'
				)}
			>
				{parse(post)}
			</p>
			<p className={cx('cards__text-desc')}>{parse(skills)}</p>
			<p className={cx('cards__text-desc')}>{parse(methods)}</p>
			<p
				className={cx(
					'cards__text-desc',
					'cards__text-desc--education',
					'whiteText'
				)}
			>
				Образование:
			</p>
			<ul className="cards__text-list">
				{education.map((el) => (
					<li key={el.descr} className={cx('cards__text-list-item')}>
						{parse(el.descr)}
					</li>
				))}
			</ul>
		</div>
	</div>
);
