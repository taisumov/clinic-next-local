import { Service } from '@/components/pages/Service';
import { fetchApi } from '@/lib/api/fetchApi';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
	const priceList = await fetchApi('/receptions', {
		urlParamsObject: { populate: 'deep' },
	});

	return {
		props: {
			priceList,
		},
		revalidate: 1,
	};
};

const ServicePage = ({ priceList }: any) => {
	const router = useRouter();
	console.log('router', router.query);
	return <Service priceList={priceList} path={router.query} />;
};

export default ServicePage;
