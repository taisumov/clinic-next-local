import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';

import { useHookFormContext } from '@/components/forms/Form';

import cx from './index.module.scss';

interface InputProps
	extends Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'id' | 'name'
	> {
	label?: string;
	name: string;
}

const Field = ({ className, label, name, ...rest }: InputProps) => {
	const { register } = useHookFormContext();

	return (
		<div className={cx('Root')}>
			<label htmlFor={name} className={cx('Label')}>
				{label}
			</label>
			<input {...register(name)} {...rest} id={name} className={cx('Input')} />
		</div>
	);
};

export { Field };
