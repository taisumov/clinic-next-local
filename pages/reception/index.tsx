import { type GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Reception } from '@/components/pages/Reception';

import { fetchApi } from '@/lib/api/fetchApi';

export const getStaticProps = (async () => {
	const [receptions] = await Promise.all([
		fetchApi('/receptions', {
			urlParamsObject: { populate: 'deep' },
		}), // найти reception по id
	]);

	return {
		props: {
			receptions,
		},
		revalidate: 1,
	};
}) satisfies GetStaticProps;

const ReseptionPage = ({ receptions }: any) => {
	const router = useRouter();
	return <Reception receptions={receptions} path={router.query} />;
};

export default ReseptionPage;
