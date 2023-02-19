import React, { useState } from 'react';

import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { AppointmentForm } from '../AppointmentForm';
import { CompanyName } from '../CompanyName';

import cx from './index.module.scss';

import Logo from '/public/icon/headerLogo.svg';

export const Content = () => (
	<Region className={cx('Region')}>
		<div className={cx('Header')}>
			<Logo className={cx('Logo')} alt="logo" />
			<CompanyName />
		</div>
		<Heading className={cx('Heading')}>Запись на прием</Heading>
		<AppointmentForm />
	</Region>
);

const SelectField = () => (
	<select name="hero">
		<option disabled>Выберите героя</option>
		<option value="Чебурашка">Чебурашка</option>
		<option selected value="Крокодил Гена">
			Крокодил Гена
		</option>
		<option value="Шапокляк">Шапокляк</option>
		<option value="Крыса Лариса">Крыса Лариса</option>
	</select>
);
