import { useRouter } from 'next/router';

import { Service } from '@/components/pages/Service';

import { fetchApi } from '@/lib/api/fetchApi';

export const getStaticProps = async () => {
	try {
		const priceList = await fetchApi('/receptions', {
			urlParamsObject: { populate: 'deep' },
		});

		return {
			props: {
				priceList,
			},
			revalidate: 1,
		};
	} catch (e) {
		return {
			notFound: true
		}
	}
};

const ServicePage = ({ priceList }: any) => {
	const router = useRouter();
	return <Service priceList={priceList} path={router.query} />;
};

export default ServicePage;
