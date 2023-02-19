import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import cx from './index.module.scss';

export const Contacts = () => {
	const {
		contacts: { additionalSchedule, address, phones, workingHours },
	} = useDataContext();

	return (
		<Region id="contacts" className={cx('Root')} withContainer>
			<Heading>Контакты</Heading>
			<Region>
				<Heading>Наш адрес:</Heading>
				<p>{address}</p>
				<Heading>Телефоны:</Heading>
				{phones.map((el) => (
					<p key={el}>{el}</p>
				))}
				<Heading>Режим работы:</Heading>
				<p>Пн — Сб: {workingHours.monSat} </p>
				<p>Вс: {workingHours.sun} </p>
				<Heading hidden>Дополнительные режимы работы</Heading>
				{additionalSchedule.map((el) => (
					<p key={el}>{el}</p>
				))}
			</Region>
		</Region>
	);
};
