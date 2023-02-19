import { IBM_Plex_Sans, Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';

import { AppLayout } from '@/components/layout/AppLayout';

import '@/styles/main.scss';
import 'keen-slider/keen-slider.min.css';

const fontIBM = IBM_Plex_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic'],
});
const fontRoboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
});

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<style jsx global>{`
			:root {
				--IBM: ${fontIBM.style.fontFamily};
				--roboto: ${fontRoboto.style.fontFamily};
			}
		`}</style>
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	</>
);

export default App;
