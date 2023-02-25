import { useKeenSlider } from 'keen-slider/react';
import { useEffect, useState } from 'react';

import { Heading } from '@/components/base/Heading';
import { Img } from '@/components/base/Img';
import { Region } from '@/components/base/Region';

import { getMediaUrl } from '@/lib/api/getUrl';

import { useDataContext } from '@/context/DataContext';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper as SwiperComponent } from 'swiper/react';
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

	// const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
	// 	{
	// 		initial: 0,
	// 		loop: true,
	// 		slideChanged(slider) {
	// 			setCurrentSlide(slider.track.details.rel);
	// 		},
	// 		created(s) {
	// 			sliderRes = s;
	// 			setLoaded(true);
	// 		},
	// 	},
	// 	[
	// 		(slider) => {
	// 			let timeout: ReturnType<typeof setTimeout>;
	// 			let mouseOver = false;
	// 			function clearNextTimeout() {
	// 				clearTimeout(timeout);
	// 			}

	// 			function nextTimeout() {
	// 				clearTimeout(timeout);
	// 				if (mouseOver) return;
	// 				timeout = setTimeout(() => {
	// 					slider.next();
	// 				}, 3000);
	// 			}

	// 			slider.on('created', () => {
	// 				slider.container.addEventListener('mouseover', () => {
	// 					mouseOver = true;
	// 					clearNextTimeout();
	// 				});
	// 				slider.container.addEventListener('mouseout', () => {
	// 					mouseOver = false;
	// 					nextTimeout();
	// 				});
	// 				nextTimeout();
	// 			});
	// 			slider.on('dragStarted', clearNextTimeout);
	// 			slider.on('animationEnded', nextTimeout);
	// 			slider.on('updated', nextTimeout);
	// 		},
	// 	]
	// );

	return (
		<Region className={cx('promotion')} id="promo">
			<Heading className={cx('heading')}>Новости и акции</Heading>
			<div className={cx('navigationWrapper')}>
				{loaded ? (
					<SwiperComponent
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
						navigation={true}
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

// function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
// 	return (
// 		<span
// 			className={cx('arrowWrap', {
// 				arrowLeft: props.left,
// 				arrowRight: !props.left,
// 			})}
// 		>
// 			<svg
// 				onClick={props.onClick}
// 				className={cx('arrow')}
// 				xmlns="http://www.w3.org/2000/svg"
// 				viewBox="0 0 24 24"
// 			>
// 				{props.left && (
// 					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
// 				)}
// 				{!props.left && (
// 					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
// 				)}
// 			</svg>
// 		</span>
// 	);
// }
