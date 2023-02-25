import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import cx from './index.module.scss';

export const Contacts = () => {
	const { contacts } = useDataContext();

	return (
		<Region id="contacts" className={cx('Root')} withContainer>
			<Heading>Контакты</Heading>
			<Region>
				<Heading>Наш адрес:</Heading>
				<p>{contacts[0]?.attributes.address}</p>
				<Heading>Телефоны:</Heading>
				{contacts[0]?.attributes.phones.map((el: any) => (
					<p key={el}>{el}</p>
				))}
				<Heading>Режим работы:</Heading>
				<p>Пн — Сб: {contacts[0]?.attributes.workingHours} </p>
				<p>Вс: {contacts[0]?.attributes.workingHours} </p>
				<Heading hidden>Дополнительные режимы работы</Heading>
				{contacts[0]?.attributes.additionalSchedule.map((el: any) => (
					<p key={el}>{el}</p>
				))}
			</Region>
		</Region>
	);
};
