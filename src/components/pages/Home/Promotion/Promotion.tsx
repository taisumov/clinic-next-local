import { useKeenSlider } from 'keen-slider/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Heading } from '@/components/base/Heading';
import { Img } from '@/components/base/Img';
import { Region } from '@/components/base/Region';

import { getMediaUrl } from '@/lib/api/getUrl';
import SolidArrowLeft from 'public/icon/solidArrowLeft.svg';

import { useDataContext } from '@/context/DataContext';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper as SwiperComponent, useSwiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cx from './index.module.scss';
// import Swiper from 'swiper';

export const Promotion = ({ data }: any) => {
	const { promotions } = useDataContext();
	let sliderRes: any;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(true);

	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const swiper = useRef<any>(null);

	const handleNext = useCallback(() => {
		if (!swiper.current) return;
		swiper.current.swiper.slideNext();
	}, []);

	const handlePrev = useCallback(() => {
		if (!swiper.current) return;
		swiper.current.swiper.slidePrev();
	}, []);

	return (
		<Region className={cx('promotion')} id="promo">
			<Heading className={cx('heading')}>Новости и акции</Heading>
			<div className={cx('navigationWrapper')}>
				{loaded ? (
					<SwiperComponent
						ref={swiper}
						loop
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
						}}
						navigation={{ prevEl: prevRef?.current, nextEl: nextRef?.current }}
						modules={[Autoplay, Pagination, Navigation]}
						className={cx('mySwiper')}
					>
						<>
							{promotions.map((promotion: any) => {
								console.log(data, '23');
								return (
									<SwiperSlide
										key={promotion?.id}
										className={cx('swiper-slide')}
									>
										<img
											src={`${promotion?.attributes.image.data[0].attributes.url}`}
											alt={''}
											style={{
												objectFit: 'cover',
												width: '100%',
												height: '100%',
											}}
											loading="lazy"
										/>
										<div className="swiper-lazy-preloader"></div>
									</SwiperSlide>
								);
							})}
						</>
						<div className={cx('swiper-pagination')}></div>
						<Arrow left ref={prevRef} onClick={(e: any) => handleNext()} />

						<Arrow ref={nextRef} onClick={(e: any) => handlePrev()} />
					</SwiperComponent>
				) : (
					<></>
				)}
			</div>
			{/* {loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
						/>
					</>
				)}
				{loaded && instanceRef.current && (
					<div className={cx('dots')}>
						{[
							...Array(instanceRef.current.track.details?.slides.length).keys(),
						].map((idx) => (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={cx('dot', {
									active: currentSlide === idx,
								})}
							></button>
						))}
					</div>
				)} */}
		</Region>
	);
};

function Arrow(props: { left?: boolean; onClick: (e: any) => void; ref: any }) {
	return (
		<span
			ref={props.ref}
			className={cx('arrowWrap', {
				arrowLeft: props.left,
				arrowRight: !props.left,
			})}
		>
			<svg
				onClick={props.onClick}
				className={cx('arrow')}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				{props.left && (
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				)}
				{!props.left && (
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				)}
			</svg>
		</span>
	);
}
