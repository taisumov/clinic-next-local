import Link, { type LinkProps } from 'next/link';
import { type PropsWithChildren } from 'react';

interface LinkIntoViewProps extends LinkProps {
	className?: string;
}

const deleteFirsLetter = (str: any) => String(str).substring(1);

export const LinkIntoView = (props: PropsWithChildren<LinkIntoViewProps>) => {
	const handleClickScroll = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const element = document.getElementById(deleteFirsLetter(props.href));

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Link onClick={handleClickScroll} {...props}>
			{props.children}
		</Link>
	);
};
