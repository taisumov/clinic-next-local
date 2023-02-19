import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Burger } from '../../shared/Burger';
import { Header } from '../../shared/Header';

import cx from './index.module.scss';

export function AppLayout({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	return (
		<>
			<Head>
				<title>Семья</title>
			</Head>

			<div className={cx('Root')} id="page-wrap">
				{/* <Burger /> */}
				<Header />
				{children}
			</div>
		</>
	);
}
