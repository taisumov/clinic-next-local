import {type ParsedUrlQuery} from "querystring";

import { Services } from '@/components/pages/Services/Services';

import { fetchApi } from '@/lib/api/fetchApi';

interface Query extends ParsedUrlQuery {
	category: string
}

const ServicesPage = ({ subcategory }: any) => <Services subcategory={subcategory.data[0]} />

ServicesPage.getInitialProps = async ({query}: any) => {
	const subcategory =
		await fetchApi(`/subcategories?filters[text][$eq]=${(query as Query).category ?? ''}&populate=*`);
	return { subcategory }
}

export default ServicesPage;
