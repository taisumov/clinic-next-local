import Link from 'next/link';
import { useRef, useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/base/Dialog';

import { Content } from './partials/Content';

import cx from './index.module.scss';

export const MakeAnAppointmentDialog = ({ className }: CNProp) => (
	<div className={cx('Root')}>
		<Dialog>
			<DialogTrigger asChild>
				<button className={cx('Button', 'hide')}>Запись на прием</button>
			</DialogTrigger>
			<DialogContent className={cx(className)}>
				<Content />
			</DialogContent>
		</Dialog>
		<Link href="tel:+79256553328" className={cx('Phone')}>
			+7-925-655-33-28
		</Link>
	</div>
);
