import { DOCTORS } from '@/components/pages/Reception/constants/constants';

import { DoctorsCard } from '../DoctorsCard';

import cx from './index.module.scss';

export const DoctorCardsList = ({ data }: any) => (
	<div className={cx('cards')}>
		{data?.map((el: any, i: number) => (
			<DoctorsCard key={el.id} {...el.attributes} />
		))}
	</div>
);
