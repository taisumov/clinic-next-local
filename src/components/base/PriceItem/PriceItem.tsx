import cx from './index.module.scss';

interface PriceItemProps {
	name: string;
	price: string;
}

export const PriceItem = ({ name, price }: PriceItemProps) => (
	<div className={cx('price__item')}>
		<div className={cx('price__name')}>{name}</div>
		<p className={cx('price__cost')}>{price}</p>
	</div>
);
