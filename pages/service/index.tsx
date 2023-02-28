import {type ParsedUrlQuery} from "querystring";

import { Service } from '@/components/pages/Service';

import { fetchApi } from '@/lib/api/fetchApi';

interface Query extends ParsedUrlQuery {
	service: string
}

const ServicePage = ({ reception }: any) => <Service reception={reception.data[0].attributes}/>;

ServicePage.getInitialProps = async ({ query }: any) => {
	const reception = await fetchApi(`/receptions?filters[id][$eq]=${(query as Query).service}&populate=*`);
	return { reception }
}

export default ServicePage;
