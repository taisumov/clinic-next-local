/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
	type FieldValues,
	FormProvider,
	useFormContext,
} from 'react-hook-form';

import { type FormProps } from './Form.types';
import { isEmpty } from './isEmpty';

import cx from './index.module.scss';

export function Form<TFieldValues extends FieldValues>({
	children,
	className,
	methods,
	...props
}: FormProps<TFieldValues>) {
	return (
		// @ts-expect-error
		<FormProvider {...methods}>
			<form className={cx('Root', className)} {...props}>
				{children}
			</form>
		</FormProvider>
	);
}

export function useHookFormContext() {
	const context = useFormContext();

	if (!context || isEmpty(context)) {
		throw new Error('Cannot call useFormContext outside a <FormProvider>.');
	}

	return context;
}
