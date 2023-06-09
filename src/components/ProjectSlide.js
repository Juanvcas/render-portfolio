import Link from 'next/link';
import Image from 'next/image';
import s from '@/styles/components/ProjectSlide.module.css';

export const ProjectSlide = ({ ...props }) => {
	return (
		<Link href={props.link} className={`${s.main} ${props.style}`}>
			<h3>{props.title.toUpperCase()}</h3>
			<figure className={s.image}>
				<Image src={props.image.src} alt={props.image.alt} fill />
			</figure>
		</Link>
	);
};
