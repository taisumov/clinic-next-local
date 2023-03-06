import {type ParsedUrlQuery} from "querystring";

import { Reception } from '@/components/pages/Reception';

import { fetchApi } from '@/lib/api/fetchApi';

interface Query extends ParsedUrlQuery {
	service: string
}

const ReceptionPage = ({ reception, priceList, applicationList }: any) =>
	<Reception applicationList={applicationList} reception={reception} priceList={priceList}/>

ReceptionPage.getInitialProps = async ({query}: any) => {
	const reception = await fetchApi(`/receptions/${(query as Query).service ?? ''}`, {
			urlParamsObject: { populate: `deep, 4` },
	});
	const priceList = await fetchApi(`/receptions?filters[id][$eq]=${(query as Query).service}&populate=*`);

	const applicationList = await fetchApi<any>('/zapis-na-priems', {
		urlParamsObject: { populate: 'deep, 2' },
	})
	return { reception, priceList, applicationList }
}

export default ReceptionPage;
