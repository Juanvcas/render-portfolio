import Image from 'next/image';
import { LinkButton } from './Buttons';
import s from '@/styles/components/global/ContactBanner.module.css';

export const ContactBanner = () => {
	return (
		<div className={s.main}>
			<h2>CONTACTO</h2>
			<p>Escríbeme para mas información y resolver todas tus dudas</p>
			<LinkButton href={'/contacto'} text={'Ir al Link'} style={s.link} />
			<figure className={s.main_image}>
				<Image
					src={'https://i.postimg.cc/xCH6JmrW/SS02-01.jpg'}
					alt={'Imagen de restaurante con sillas amarillas y mesas de madera'}
					fill
				/>
			</figure>
		</div>
	);
};
