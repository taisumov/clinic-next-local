import { type } from 'os';

import { type GenericResponse, type Images } from './generic.type';

export interface HomePageProps {
	contacts: Contacts;
	about: About;
	promotion: Promotion;
	licensen: Licensen;
	categories: Categories;
}

export interface Contacts {
	phones: string[];
	address: string;
	workingHours: {
		monSat: string;
		sun: string;
	};
	additionalSchedule: string[];
}

export interface ContactsResponse extends GenericResponse<Contacts> {}

export interface About {
	description: string;
}

export interface AboutResponse extends GenericResponse<About> {}

export interface Promotion {
	images: Images;
}

export interface PromotionResponse extends GenericResponse<Promotion> {}

export interface Licensen {
	images: Images;
}

export interface LicensenResponse extends GenericResponse<Licensen> {}

export interface Category {
	name: string;
	subItems: string[];
	id: number;
	bg: any; // TODO - сменить тип
	text: string;
	rightSide: boolean;
	href: string;
}

export interface Categories {
	categories: Category[];
}

export interface CategoriesResponse extends GenericResponse<Categories> {}
