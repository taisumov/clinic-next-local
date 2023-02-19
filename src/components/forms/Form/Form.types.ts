import {
	type FormEventHandler,
	type ReactElement,
	type ReactNode,
} from 'react';
import { type FieldValues, type UseFormReturn } from 'react-hook-form';

export interface FormProps<TFieldValues extends FieldValues> {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
	methods?: UseFormReturn<TFieldValues, any>;
	/** The contents of the Form. */
	children: ReactNode;
	action?: string;
	/**
	 * The enctype attribute specifies how the form-data should be encoded when submitting it to the server.
	 */
	encType?:
		| 'application/x-www-form-urlencoded'
		| 'multipart/form-data'
		| 'text/plain';
	/**
	 * The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").
	 */
	method?: 'get' | 'post';
	/**
	 * The target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
	 */
	target?: '_blank' | '_self' | '_parent' | '_top';
	/**
	 * Fired on form submission.
	 */
	onSubmit?: FormEventHandler;
	className?: string;
}
