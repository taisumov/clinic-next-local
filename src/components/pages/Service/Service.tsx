import { PriceBlock } from '@/components/base/PriceBlock';
import { Region } from '@/components/base/Region';

import cx from './index.module.scss';

export const Service = () => (
	<>
		<Region Tag="main" className={cx('Root')}>
			<section className={cx('title')}>
				<h2 className={cx('title__head')}>Гинекология</h2>
				<hr className={cx('hr')} />
				<hr className={cx('hr')} />
				<p className={cx('title__desc')}>
					Гинекология — важнейшее направление медицинских услуг, которое
					включает первичный осмотр пациентки, консультацию, сдачу анализов и
					изучение анамнеза. Кроме того, данный вид услуг включает
					ультразвуковую диагностику, проведение квалифицированных лабораторных
					исследований, проведение гистероскопии и кольпоскопия. Важнейшая цель
					гинекологических процедур — предотвращение патологий, раннее лечение
					заболеваний, связанной с гормональными расстройствами и лечением
					бесплодия. Требуется прохождение исследования не реже 2 раз в год.
				</p>
			</section>
			<section className={cx('price')}>
				{/* <div className={cx('price__content')}>
					<div className={cx('price__block')}>
						<div className={cx('price__item')}>
							<a href="#" className={cx('price__name')}>
								Гинекологический прием
							</a>
							<p className={cx('price__cost')}>2500 руб.</p>
						</div>
						<div className={cx('price__item')}>
							<a href="#" className={cx('price__name')}>
								Гинекологический прием
							</a>
							<p className={cx('price__cost')}>2500 руб.</p>
						</div>
						<div className={cx('price__item')}>
							<a href="#" className={cx('price__name')}>
								Гинекологический прием
							</a>
							<p className={cx('price__cost')}>2500 руб.</p>
						</div>
					</div>
				</div> */}
				<PriceBlock />
			</section>
		</Region>
	</>
);
