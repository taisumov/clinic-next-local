import { useRouter } from 'next/router';

import { Services } from '@/components/pages/Services/Services';

import { fetchApi } from '@/lib/api/fetchApi';

import { type Categories } from '@/types/http/homePage.type';

export const getStaticProps = async () => {
	const categories = await fetchApi<Categories>('/subcategories', {
		urlParamsObject: { populate: `deep, 2` },
	});

	return {
		props: {
			categories,
		},
		revalidate: 1,
	};
};

const ServicesPage = ({ categories }: any) => {
	return <Services categories={categories} />;
};

export default ServicesPage;
