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
	const [contacts, about, promotion, licensen, categories] = await Promise.all([
		fetchApi<Contacts>('/contacts'),
		fetchApi<About>('/abouts'),
		fetchApi<Promotion>('/promotions', { urlParamsObject: { populate: '*' } }),
		fetchApi<Licensen>('/licensens', { urlParamsObject: { populate: '*' } }),
		fetchApi<Categories>('/categories', {
			urlParamsObject: { populate: 'deep' },
		}),
	]);

	console.log(promotion, '2');

	return {
		props: {
			contacts,
			about,
			promotion,
			licensen,
			categories,
		},
		revalidate: 1,
	};
}) satisfies GetStaticProps;

const Home = ({
	contacts,
	about,
	promotion,
	licensen,
	categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<DataContext.Provider
		value={{
			contacts,
			about,
			promotion: promotion.data,
			licensen: licensen.data,
			categories,
		}}
	>
		<HomePage />
	</DataContext.Provider>
);

export default Home;
