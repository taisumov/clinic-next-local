import cx from './index.module.scss';

interface CardProps {
	href: string;
	className?: string;
	descr: string;
}

export const Card = ({ href, className, descr }: CardProps) => (
	<a href={href} className={cx(className, 'item', 'link')}>
		{descr}
	</a>
);
