import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import {useDataContext} from "@/context/DataContext";

import { Header } from '../../shared/Header';

import { About } from './About';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Intro } from './Intro';
import { Licensen } from './Licensen';
import { Map } from './Map';
import { Promotion } from './Promotion';


const HomePage = () => {
	const { applicationList } = useDataContext();
	return (
	<>
		<Region Tag="main">
			<Header isBackground={true} applicationList={applicationList}/>
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
);}

export { HomePage };
