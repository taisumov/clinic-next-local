/* eslint-disable no-alert */
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Field } from '@/components/forms/Field';
import { Form } from '@/components/forms/Form';
import { Select } from '@/components/forms/Select';

import cx from './index.module.scss';

interface FormProps {
	className?: string;
	applicationList: any
}

const validationSchema = z.object({
	select: z.string().min(1, { message: 'Обязательное поле' }),
	data: z.string().min(1, { message: 'Обязательное поле' }),
	name: z.string().min(1, { message: 'Обязательное поле' }),
	phone: z.string().min(1, { message: 'Обязательное поле' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const AppointmentForm = ({ className, applicationList }: FormProps) => {
	const methods = useForm<ValidationSchema>({
		resolver: zodResolver(validationSchema),
	});

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
		alert(JSON.stringify(data));
	};

	// const Array = ['momo', 'katara', 'appa'];
	const Array = applicationList.data[0].attributes.bloki_uslugs.data.map((item: any) => item.attributes.link)

	// console.log('1222', applicationList.data[0].attributes.bloki_uslugs.data.map((item: any) => item.attributes.link));

	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			methods={methods}
			className={cx('Form')}
		>
			<Select options={Array} name="select" label="Выберите услугу" />
			<Field name="data" label="Выберите удобную дату" type="date" />
			<Field name="name" label="Ваше Имя" />
			<Field name="phone" label="Контактный телефон" type="numeric" />
			<button className={cx('Button')} type="submit">
				Записаться
			</button>
			<a className={cx('Link')} href="tel:+7-925-655-33-28">
				+7-925-655-33-28
			</a>
		</Form>
	);
};
