import Link from 'next/link';
import { useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/base/Dialog';

import { Content } from './partials/Content';

import cx from './index.module.scss';

export const MakeAnAppointmentDialog = ({
	className,
	applicationList,
	hide = true,
}: CNProp) => {
	const [vision, setVision] = useState<any>(false);
	return (
		<div className={cx('Root')}>
			<Dialog open={vision} onOpenChange={setVision}>
				<DialogTrigger asChild>
					<button className={cx('Button', hide ? 'hide' : '')}>
						Запись на прием
					</button>
				</DialogTrigger>
				<DialogContent className={cx(className)}>
					<Content applicationList={applicationList} setVision={setVision} />
				</DialogContent>
			</Dialog>
			<Link href="tel:+79256553328" className={cx('Phone')}>
				+7-925-655-33-28
			</Link>
		</div>
	);
};
