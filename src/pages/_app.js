import '@/styles/globals.css';
import { MainTemplate } from '@/templates/MainTemplate';

export default function App({ Component, pageProps }) {
	return (
		<MainTemplate>
			<Component {...pageProps} />
		</MainTemplate>
	);
}
