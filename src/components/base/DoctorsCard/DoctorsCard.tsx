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
	grades,
	post,
	skills,
	methods,
	educations,
	age,
	name,
}: any) => (
	<div className={cx('cards__item')}>
		<div className={cx('cards__picture')}>
			<Image
				src={img.data.attributes.url}
				fill
				alt="doctor"
				className={cx('img')}
			/>
			<div className={cx('cards__picture-overlay')}></div>
		</div>
		<div className={cx('cards__text')}>
			<div className={cx('cards__text-blur')}></div>
			<p className={cx('cards__text-desc', 'cards__text-desc--heading')}>
				{grades.data[0].attributes.left}
				<span className={cx('whiteTextBold')}>{age}</span>{' '}
				{grades.data[0].attributes.right}
			</p>
			<p
				className={cx(
					'cards__text-desc',
					'cards__text-desc--subheading',
					'whiteText'
				)}
			>
				{post}
			</p>
			<p className={cx('cards__text-desc')}>{skills}</p>
			<p className={cx('cards__text-desc')}>{methods}</p>
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
				{educations.data.map((el: any) => (
					<li key={el.id} className={cx('cards__text-list-item')}>
						{el.attributes.descr}
					</li>
				))}
			</ul>
		</div>
	</div>
);
