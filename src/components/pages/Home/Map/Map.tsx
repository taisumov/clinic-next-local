import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import cx from './index.module.scss';

export const Map = () => (
	<Region className={cx('Map')}>
		<Heading hidden>Как добраться до нас</Heading>

		<iframe
			className={cx('Frame')}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2264.20558595797!2d37.76912981612451!3d55.4242079804667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa6a0d4d23bc1%3A0x7de8d81efb52de69!2z0KHQtdC80LXQudC90YvQuSDQnNC10LTQuNGG0LjQvdGB0LrQuNC5INCm0LXQvdGC0YAg0KHQu9Cw0LnQtA!5e0!3m2!1sru!2sfr!4v1664563364726!5m2!1sru!2sfr"
			loading="lazy"
		></iframe>
	</Region>
);
