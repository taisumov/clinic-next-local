import { getFullUrl } from './getUrl';

interface ApiOptionsObj {
	urlParamsObject?: Record<string, any>;
	options?: RequestInit;
	fullData?: boolean;
}

interface Api {
	path: string;
	options?: ApiOptionsObj;
}

export async function fetchApi<TResponse>(
	path: string,
	init: ApiOptionsObj = {}
): Promise<TResponse> {
	const { urlParamsObject, options, fullData } = init;

	const requestUrl = getFullUrl(path, urlParamsObject ?? {});

	const response = await fetch(requestUrl, options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	if (fullData) {
		const data = (await response.json()) as TResponse;
		return data;
	}

	const data = (await response.json()) as {
		data: Array<Record<'attributes', TResponse>>;
	};

	return data.data[0].attributes;
}
