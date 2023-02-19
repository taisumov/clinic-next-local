/* eslint-disable eqeqeq */
/* eslint-disable no-eq-null */
export const isEmpty = (val: any) =>
	val == null || !(Object.keys(val) || val).length;
