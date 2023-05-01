import Link from 'next/link';
import s from '@/styles/components/global/Footer.module.css';

export const Footer = () => {
	return (
		<footer className={s.main}>
			<section className={s.main_footer}>
				<div className={s.footer_title}>
					JUAN <br />
					VASQUEZ
				</div>
				<menu className={s.footer_menu}>
					<ul>
						<li>
							<Link href={'/renderizacion'}>Renderización</Link>
						</li>
						<li>
							<Link href={'/recorridos'}>Recorridos</Link>
						</li>
						<li>
							<Link href={'/modelado'}>Modelado 3D</Link>
						</li>
						<li>
							<Link href={'/proyectos'}>Proyectos</Link>
						</li>
						<li>
							<Link href={'/contacto'}>Contacto</Link>
						</li>
					</ul>
				</menu>
			</section>
			<span className={`${s.separator} separator`}></span>
			<section className={s.main_credits}>
				<p>
					Hecho por: <Link href={'https://juanvcas.com'}>Juan Vasquez</Link>
				</p>
				<p>Copyright © 2023 Juan Vasquez Todos los derechos reservados</p>
			</section>
		</footer>
	);
};
