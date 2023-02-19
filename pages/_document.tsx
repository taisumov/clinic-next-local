import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html style={{ height: '100%', scrollBehavior: 'smooth' }}>
			<Head />
			<body style={{ height: '100%' }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
