import { Footer } from '@/components/global/Footer';
import { Header } from '@/components/global/Header';

export const MainTemplate = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
