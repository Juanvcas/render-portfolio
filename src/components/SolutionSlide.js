import Link from 'next/link';
import Image from 'next/image';
import s from '@/styles/components/SolutionSlide.module.css';

export const SolutionSlide = ({ ...props }) => {
	return (
		<Link href={props.link} className={s.main}>
			<h2>{props.title}</h2>
			<h3>{props.text}</h3>
			<figure className={s.image}>
				<Image src={props.image.src} alt={props.image.alt} fill />
			</figure>
		</Link>
	);
};
