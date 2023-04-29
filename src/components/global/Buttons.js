import Link from 'next/link';
import s from '@/styles/components/global/Buttons.module.css';

export const LinkButton = ({ href, text, style }) => {
	return (
		<Link href={href} className={`${s.LinkButton} ${style}`}>
			{text}
		</Link>
	);
};
