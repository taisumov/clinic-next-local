import ReactMarkdown from 'react-markdown';

import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import cx from './index.module.scss';

export const About = () => {
	const { about } = useDataContext();
	return (
		<Region className={cx('Root')} withContainer>
			<Heading>О нас</Heading>
			<ReactMarkdown>{about[0].attributes.description}</ReactMarkdown>
		</Region>
	);
};
