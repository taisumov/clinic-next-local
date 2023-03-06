import Link from 'next/link';
import { useRouter } from 'next/router';

const deleteFirsLetter = (str: any) => String(str).substring(1);

export const LinkIntoView = ({ setVision, ...props }: any) => {
	const router = useRouter();
	const handleClickScroll = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const element = document.getElementById(deleteFirsLetter(props.href));

		if (element) {
			void router.push(`${props.href as string}`);
		} else {
			void router.push(`/${props.href as string}`);
		}
	};

	return (
		<Link onClick={handleClickScroll} {...props}>
			{props.children}
		</Link>
	);
};
