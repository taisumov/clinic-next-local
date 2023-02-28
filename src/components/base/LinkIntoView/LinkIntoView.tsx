import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';

interface LinkIntoViewProps extends LinkProps {
	className?: string;
}

const deleteFirsLetter = (str: any) => String(str).substring(1);

export const LinkIntoView = (props: PropsWithChildren<LinkIntoViewProps>) => {
	const router = useRouter();
	const handleClickScroll = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const element = document.getElementById(deleteFirsLetter(props.href));

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		} else {
			void router.push('/');
		}
	};

	return (
		<Link onClick={handleClickScroll} {...props}>
			{props.children}
		</Link>
	);
};
