import { useKeenSlider } from 'keen-slider/react';
import { useCallback, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper as SwiperComponentLicense, SwiperSlide } from 'swiper/react';

import { Heading } from '@/components/base/Heading';
import { Img } from '@/components/base/Img';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import cx from './index.module.scss';

import SolidArrowLeft from 'public/icon/solidArrowLeft.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const Licensen = () => {
	const { licensen } = useDataContext();

	const sliderRef = useRef<any>(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const leftArr = useRef(null);
	const rightArr = useRef(null);

	return (
		<Region className={cx('licensen')}>
			<Heading className={cx('heading')}>Лицензии</Heading>
			<div className={cx('navigationWrapper')}>
				<SwiperComponentLicense
					ref={sliderRef}
					modules={[Pagination, Navigation]}
					navigation={{
						prevEl: leftArr.current,
						nextEl: rightArr.current,
					}}
					breakpoints={{
						550: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						700: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						900: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1300: {
							slidesPerView: 5,
							spaceBetween: 60,
						},
					}}
					pagination={{ clickable: true }}
					className={cx('myLicense')}
				>
					{licensen.map((license: any) => (
						<SwiperSlide key={license.id} className={cx('swiperSlide')}>
							<Img
								src={license.attributes.images.data[0].attributes.url}
								alt={''}
								fill
								sizes="100vh"
								style={{
									objectFit: 'cover',
								}}
								priority
							/>
						</SwiperSlide>
					))}
				</SwiperComponentLicense>
			</div>
			<div className={cx('swiperNavbar')}>
				<div className={cx('dots')}>
					<div ref={leftArr}>
						<Arrow left onClick={handlePrev} />
					</div>

					<div ref={rightArr}>
						<Arrow onClick={handleNext} />
					</div>
				</div>
			</div>
		</Region>
	);
};

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
	return (
		<SolidArrowLeft
			onClick={props.onClick}
			className={cx('arrow', {
				arrowLeft: props.left,
				arrowRight: !props.left,
			})}
		/>
	);
}
