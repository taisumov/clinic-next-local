import { useRouter } from 'next/router';

import { Services } from '@/components/pages/Services/Services';

import { fetchApi } from '@/lib/api/fetchApi';

import { About, type Categories } from '@/types/http/homePage.type';

export const getStaticProps = async () => {
	const categories = await fetchApi<Categories>('/categories', {
		urlParamsObject: { populate: 'deep' },
	});

	return {
		props: {
			categories,
		},
		revalidate: 1,
	};
};

const ServicesPage = ({ categories }: any) => {
	const router = useRouter();
	console.log('router', router.query);

	return <Services categories={categories} path={router.query} />;
};

export default ServicesPage;
