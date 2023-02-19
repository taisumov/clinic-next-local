/* eslint-disable no-negated-condition */
/* eslint-disable guard-for-in */

import { chain } from './chain';

type Props = Record<string, any>;

// taken from: https://stackoverflow.com/questions/51603250/typescript-3-parameter-list-intersection-type/51604379#51604379
type TupleTypes<T> = { [P in keyof T]: T[P] } extends Record<number, infer V>
	? V
	: never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;

/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, and ids are deduplicated - different ids
 * will trigger a side-effect and re-render components hooked up with `useId`.
 * For all other props, the last prop object overrides all previous ones.
 * @param args - Multiple sets of props to merge together.
 */
export function mergeProps<T extends Props[]>(
	...args: T
): UnionToIntersection<TupleTypes<T>> {
	// Start with a base clone of the first argument. This is a lot faster than starting
	// with an empty object and adding properties as we go.
	const result: Props = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		const props = args[i];
		for (const key in props) {
			const a = result[key];
			const b = props[key];

			// Chain events
			if (
				typeof a === 'function' &&
				typeof b === 'function' &&
				// This is a lot faster than a regex.
				key.startsWith('o') &&
				key[1] === 'n' &&
				key.charCodeAt(2) >= /* 'A' */ 65 &&
				key.charCodeAt(2) <= /* 'Z' */ 90
			) {
				result[key] = chain(a, b);
			} else {
				result[key] = b !== undefined ? b : a;
			}
		}
	}

	return result as UnionToIntersection<TupleTypes<T>>;
}
