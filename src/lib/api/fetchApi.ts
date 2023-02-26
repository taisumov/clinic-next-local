import {getFullUrl} from './getUrl';

interface ApiOptionsObj {
	urlParamsObject?: Record<string, any>;
	options?: RequestInit;
	fullData?: boolean;
}

export async function fetchApi<TResponse>(
	path: string,
	init: ApiOptionsObj = {}
): Promise<any> {
	const { urlParamsObject, options, fullData } = init;

	const requestUrl = getFullUrl(path, urlParamsObject ?? {});
	const response = await fetch(requestUrl, options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	if (fullData) {
		return (await response.json()) as TResponse;
	}

	return (await response.json()) as {
		data: Array<Record<'attributes', TResponse>>;
	};
}
