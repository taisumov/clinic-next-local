import { type GetStaticProps, type InferGetStaticPropsType } from 'next';

import { HomePage } from '@/components/pages/Home';

import { fetchApi } from '@/lib/api/fetchApi';

import { DataContext } from '@/context/DataContext';

import {
	type About,
	type Categories,
	type Contacts,
	type Licensen,
	type Promotion,
} from '@/types/http/homePage.type';

export const getStaticProps = (async () => {
	const [contacts, about, promotions, licensen, categories] = await Promise.all(
		[
			fetchApi<Contacts>('/contacts'),
			fetchApi<About>('/abouts'),
			fetchApi('/promotions', { urlParamsObject: { populate: '*' } }),
			fetchApi<Licensen>('/licensens', { urlParamsObject: { populate: '*' } }),
			fetchApi<Categories>('/categories', {
				urlParamsObject: { populate: 'deep' },
			}),
		]
	);

	return {
		props: {
			contacts,
			about,
			promotions,
			licensen,
			categories,
		},
		revalidate: 1,
	};
}) satisfies GetStaticProps;

const Home = ({
	contacts,
	about,
	promotions,
	licensen,
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<DataContext.Provider
		value={{
			contacts,
			about: about.data,
			promotions: promotions.data,
			licensen: licensen.data,
			categories,
		}}
	>
		<HomePage />
	</DataContext.Provider>
);

export default Home;
