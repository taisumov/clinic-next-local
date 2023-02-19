import cx from './index.module.scss';

interface CompanyNameProps {
	className?: string;
}

const CompanyName = ({ className }: CompanyNameProps) => (
	<p className={cx('Root', className)}>Диагностический медицинский центр</p>
);

export { CompanyName };
