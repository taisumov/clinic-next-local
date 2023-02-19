import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { Heading } from '@/components/base/Heading';
import { Img } from '@/components/base/Img';
import { Region } from '@/components/base/Region';

import { getMediaUrl } from '@/lib/api/getUrl';

import { useDataContext } from '@/context/DataContext';

import cx from './index.module.scss';

import SolidArrowLeft from 'public/icon/solidArrowLeft.svg';

export const Licensen = () => {
	const { licensen } = useDataContext();

	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			// initial: 0,
			// loop: true,
			breakpoints: {
				'(min-width: 400px)': {
					slides: { perView: 2, spacing: 30 },
				},
				'(min-width: 530px)': {
					slides: { perView: 3, spacing: 30 },
				},
				'(min-width: 900px)': {
					slides: { perView: 5, spacing: 40 },
				},
			},
			slides: { perView: 1 },
			mode: 'snap',
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}

				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 3000);
				}

				slider.on('created', () => {
					slider.container.addEventListener('mouseover', () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener('mouseout', () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on('dragStarted', clearNextTimeout);
				slider.on('animationEnded', nextTimeout);
				slider.on('updated', nextTimeout);
			},
		]
	);

	return (
		<Region className={cx('licensen')}>
			<Heading className={cx('heading')}>Лицензии</Heading>
			<div className={cx('navigationWrapper')}>
				<div ref={sliderRef} className="keen-slider">
					{licensen.map(({ id, attributes }) => (
						<div key={id} className="keen-slider__slide number-slide1">
							<Img
								src={getMediaUrl(attributes.url)}
								alt={attributes.alternativeText ?? ''}
								fill
								sizes="100vw"
								style={{
									objectFit: 'cover',
								}}
								priority
							/>
						</div>
					))}
				</div>
			</div>
			{loaded && instanceRef.current && (
				<div className={cx('dots')}>
					<Arrow
						left
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.prev()
						}
					/>
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
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
					<Arrow
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.next()
						}
					/>
				</div>
			)}
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
