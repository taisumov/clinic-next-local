import cx from './index.module.scss';

interface PriceItemProps {
	href: string;
	text: string;
	cost: string;
}

export const PriceItem = ({ href, text, cost }: PriceItemProps) => (
	<div className={cx('price__item')}>
		<a href={href} className={cx('price__name')}>
			{text}
		</a>
		<p className={cx('price__cost')}>{cost}</p>
	</div>
);
