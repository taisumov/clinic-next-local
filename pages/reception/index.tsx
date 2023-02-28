import { type GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Reception } from '@/components/pages/Reception';

import { fetchApi } from '@/lib/api/fetchApi';

export const getStaticProps = (async () => {
	try {
		const receptions = await fetchApi('/receptions', {
			urlParamsObject: { populate: `deep, 4` },
		});

		return {
			props: {
				receptions,
			},
			revalidate: 1,
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}) satisfies GetStaticProps;

const ReceptionPage = ({ receptions }: any) => {
	const router = useRouter();
	return <Reception receptions={receptions} path={router.query} />;
};

export default ReceptionPage;
