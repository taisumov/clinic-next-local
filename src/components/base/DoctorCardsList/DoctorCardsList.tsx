import { DOCTORS } from '@/components/pages/Reception/constants/constants';

import { DoctorsCard } from '../DoctorsCard';

import cx from './index.module.scss';

export const DoctorCardsList = () => (
	<div className={cx('cards')}>
		{DOCTORS.map((el, i) => (
			<DoctorsCard key={i} {...el} />
		))}
	</div>
);
