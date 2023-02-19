import { useHookFormContext } from '../Form';

import cx from './index.module.scss';

interface SelectProps {
	className?: string;
	name: string;
	label: string;
	options: string[];
}

const Select = ({ className, options, name, label }: SelectProps) => {
	const { register } = useHookFormContext();
	return (
		<div className={cx('Root', className)}>
			<label htmlFor={name} className={cx('Label')}>
				{label}
			</label>

			<select
				defaultValue=""
				{...register(name)}
				id={name}
				className={cx('Select', 'classic')}
			>
				{options.map((el) => (
					<option key={el} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
};

export { Select };
