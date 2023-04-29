import Image from 'next/image';
import s from '@/styles/components/MainBanner.module.css';

export const MainBanner = ({ ...props }) => {
	return (
		<div className={s.main}>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
			<figure className={s.image}>
				<Image src={props.image.src} alt={props.image.alt} fill />
			</figure>
		</div>
	);
};
