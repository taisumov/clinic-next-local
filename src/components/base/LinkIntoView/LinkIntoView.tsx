import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { type PropsWithChildren, useEffect } from 'react';

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
			void router.push(`/${props.href as string}`);
		}
	};

	useEffect(() => {
		console.log(props.href);
	}, []);

	return (
		<Link onClick={handleClickScroll} {...props}>
			{props.children}
		</Link>
	);
};
