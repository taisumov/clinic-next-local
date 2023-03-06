import {type ParsedUrlQuery} from "querystring";

import { Services } from '@/components/pages/Services/Services';

import { fetchApi } from '@/lib/api/fetchApi';

interface Query extends ParsedUrlQuery {
	category: string
}

const ServicesPage = ({ subcategory, applicationList }: any) =>
	<Services applicationList={applicationList} subcategory={subcategory.data[0]}/>

ServicesPage.getInitialProps = async ({query}: any) => {
	const subcategory =
		await fetchApi(`/subcategories?filters[text][$eq]=${(query as Query).category ?? ''}&populate=*`);

	const applicationList = await fetchApi<any>('/zapis-na-priems', {
			urlParamsObject: { populate: 'deep, 2' },
		})

	console.log(123, applicationList)

	return { subcategory, applicationList }
}

export default ServicesPage;
