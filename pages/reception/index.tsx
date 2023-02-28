import {type ParsedUrlQuery} from "querystring";

import { Reception } from '@/components/pages/Reception';

import { fetchApi } from '@/lib/api/fetchApi';

interface Query extends ParsedUrlQuery {
	service: string
}

const ReceptionPage = ({ reception }: any) => <Reception reception={reception}/>

ReceptionPage.getInitialProps = async ({query}: any) => {
	const reception = await fetchApi(`/receptions/${(query as Query).service ?? ''}`, {
			urlParamsObject: { populate: `deep, 4` },
	});
	return { reception }
}

export default ReceptionPage;
