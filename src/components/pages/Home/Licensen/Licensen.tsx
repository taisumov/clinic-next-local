import { useKeenSlider } from 'keen-slider/react';
import {useCallback, useRef, useState} from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import {Swiper as SwiperComponentLicense, SwiperSlide, useSwiper} from 'swiper/react';

import { Heading } from '@/components/base/Heading';
import { Img } from '@/components/base/Img';
import { Region } from '@/components/base/Region';

import { getMediaUrl } from '@/lib/api/getUrl';

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
		// setCurrentSlide(prev => prev - Number(prev === licensen.length - 1))
		sliderRef.current.swiper.slidePrev();
	}, []);



	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		// setCurrentSlide(prev => prev + Number(prev === 0))
		sliderRef.current.swiper.slideNext();
	}, []);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const leftArr = useRef(null);
	const rightArr = useRef(null);

	// const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
	// 	{
	// 		// initial: 0,
	// 		// loop: true,
	// 		breakpoints: {
	// 			'(min-width: 400px)': {
	// 				slides: { perView: 2, spacing: 30 },
	// 			},
	// 			'(min-width: 530px)': {
	// 				slides: { perView: 3, spacing: 30 },
	// 			},
	// 			'(min-width: 900px)': {
	// 				slides: { perView: 5, spacing: 40 },
	// 			},
	// 		},
	// 		slides: { perView: 1 },
	// 		mode: 'snap',
	// 		slideChanged(slider) {
	// 			setCurrentSlide(slider.track.details.rel);
	// 		},
	// 		created() {
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
	//
	// 			function nextTimeout() {
	// 				clearTimeout(timeout);
	// 				if (mouseOver) return;
	// 				timeout = setTimeout(() => {
	// 					slider.next();
	// 				}, 3000);
	// 			}
	//
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
					breakpoints = {{
						550: {
							slidesPerView: 2, spaceBetween: 30,
						},
						700: {
							slidesPerView: 3, spaceBetween: 30,
						},
						900: {
							slidesPerView: 5, spaceBetween: 40,
						},
					}}
					// slidesPerView={5}
					// spaceBetween={60}
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
						<Arrow left onClick={handlePrev}/>
					</div>

					{/* {[...Array(licensen.length).keys()].map((idx) => ( */}
					{/*	<button */}
					{/*		key={idx} */}
					{/*		onClick={() => { */}
					{/*			console.log(sliderRef.current.swiper) */}
					{/*		}} */}
					{/*		className={cx('dot', { */}
					{/*			active: currentSlide === idx, */}
					{/*		})} */}
					{/*	></button> */}
					{/* ))} */}

					<div ref={rightArr}>
						<Arrow onClick={handleNext}/>
					</div>
				</div>
			</div>
			 {/* {loaded && instanceRef.current && ( */}
				{/* <div className={cx('dots')}> */}
				{/*	<Arrow */}
				{/*		left */}
				{/*		onClick={(e: any) => */}
				{/*			e.stopPropagation() || instanceRef.current?.prev() */}
				{/*		} */}
				{/*	/> */}
				{/*	{[ */}
				{/*		...Array(instanceRef.current.track.details.slides.length).keys(), */}
				{/*	].map((idx) => ( */}
				{/*		<button */}
				{/*			key={idx} */}
				{/*			onClick={() => { */}
				{/*				instanceRef.current?.moveToIdx(idx); */}
				{/*			}} */}
				{/*			className={cx('dot', { */}
				{/*				active: currentSlide === idx, */}
				{/*			})} */}
				{/*		></button> */}
				{/*	))} */}
				{/*	<Arrow */}
				{/*		onClick={(e: any) => */}
				{/*			e.stopPropagation() || instanceRef.current?.next() */}
				{/*		} */}
				{/*	/> */}
				{/* </div> */}
			 {/* )} */}
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
