import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { About } from './About';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Intro } from './Intro';
import { Licensen } from './Licensen';
import { Map } from './Map';
import { Promotion } from './Promotion';

const HomePage = () => (
	<>
		<Region Tag="main">
			<Heading hidden>Главная страница</Heading>
			<Intro />
			<Promotion />
			<About />
			<Licensen />
			<Contacts />
			<Map />
		</Region>
		<Footer />
	</>
);

export { HomePage };
