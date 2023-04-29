import Head from 'next/head';
import Link from 'next/link';
import s from '@/styles/pages/Home.module.css';
import { MainBanner } from '@/components/MainBanner';
import { SolutionSlide } from '@/components/SolutionSlide';
import { ProjectSlide } from '@/components/ProjectSlide';
import { LinkButton } from '@/components/global/Buttons';
import { ContactBanner } from '@/components/global/ContactBanner';

const projects = [
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
	{
		link: '/',
		title: 'SAN JERÓNIMO',
		image: {
			src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
			alt: 'Imagen de casa de campo desde el patio trasero con piscina',
		},
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Juan Vasquez | Inicio</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'JUAN VASQUEZ'}
						subtitle={'Soluciones creativas para Arquitectura y Diseño'}
						image={{
							src: 'https://i.postimg.cc/JhgGQqNS/Enscape-2020-07-09-17-57-41.jpg',
							alt: 'Imagen de casa de campo desde el patio trasero con piscina',
						}}
					/>
				</section>
				<section className={s.main_solutions}>
					<div className={s.solutions_text}>
						<h2>SOLUCIONES</h2>
						<h3>
							Pensadas para resaltar la belleza y el contraste del diseño en
							todos sus aspectos
						</h3>
					</div>
					<div className={s.solutions_slides}>
						<SolutionSlide
							link={'/'}
							title={'RENDERIZACIÓN'}
							text={'Imágenes de alta calidad con alta carga visual'}
							image={{
								src: 'https://i.postimg.cc/Pq4KXHVz/RC4p_005.jpg',
								alt: 'Imagen de cabaña glamping en medio del bosque',
							}}
						/>
						<SolutionSlide
							link={'/'}
							title={'RECORRIDOS'}
							text={'Videos promocionales del proyecto y diseño mobiliario'}
							image={{
								src: 'https://i.postimg.cc/W38vkSsL/Enscape-2020-08-07-14-30-35.jpg',
								alt: 'Imagen de una habitación con una cama y diferentes accesorios',
							}}
						/>
						<SolutionSlide
							link={'/'}
							title={'MODELADO 3D'}
							text={
								'Modelado completo del proyecto y diseño mobiliario en multiples herramientas'
							}
							image={{
								src: 'https://i.postimg.cc/X7fYjKCW/0002.jpg',
								alt: 'Imagen de un modelo 3D de una cabaña hecho en Blender',
							}}
						/>
					</div>
				</section>
				<section className={s.main_projects}>
					<div className={s.projects_text}>
						<h2>PROYECTOS</h2>
						<h3>Soluciones completadas que satisficieron al cliente</h3>
					</div>
					<div className={s.projects_list}>
						{projects.map((project, index) => (
							<ProjectSlide
								key={index}
								link={project.link}
								title={project.title}
								image={{
									src: project.image.src,
									alt: project.image.alt,
								}}
							/>
						))}
					</div>
					<LinkButton
						href={'/'}
						text={'Ver Todos'}
						style={s['projects-link']}
					/>
				</section>
				<span className='separator'></span>
				<section className={s.main_contact}>
					<ContactBanner />
				</section>
				<span className='separator'></span>
			</main>
		</>
	);
}
