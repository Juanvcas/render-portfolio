import { useEffect, useState } from 'react';
import { endpoints } from '@/services/api/endpoints';
import { useFetch } from '@/hooks/useFetch';
import Head from 'next/head';
import Link from 'next/link';
import { MainBanner } from '@/components/MainBanner';
import { SolutionSlide } from '@/components/SolutionSlide';
import { ProjectSlide } from '@/components/ProjectSlide';
import { LinkButton } from '@/components/global/Buttons';
import { ContactBanner } from '@/components/global/ContactBanner';
import s from '@/styles/pages/Home.module.css';

export default function Home() {
	const [projects, setProjects] = useState([]);
	useFetch(endpoints.projects.getAllProjects, setProjects);
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
							link={'/renderizacion'}
							title={'RENDERIZACIÓN'}
							text={'Imágenes de alta calidad con alta carga visual'}
							image={{
								src: 'https://i.postimg.cc/Pq4KXHVz/RC4p_005.jpg',
								alt: 'Imagen de cabaña glamping en medio del bosque',
							}}
						/>
						<SolutionSlide
							link={'/recorridos'}
							title={'RECORRIDOS'}
							text={'Videos promocionales del proyecto y diseño mobiliario'}
							image={{
								src: 'https://i.postimg.cc/W38vkSsL/Enscape-2020-08-07-14-30-35.jpg',
								alt: 'Imagen de una habitación con una cama y diferentes accesorios',
							}}
						/>
						<SolutionSlide
							link={'/modelado'}
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
						{projects.length
							? projects.slice(0, 5).map((project) => (
									<ProjectSlide
										key={project.id}
										link={`/proyectos/${project.id}`}
										title={project.title}
										image={{
											src: project.images[0].src,
											alt: project.images[0].alt,
										}}
									/>
							  ))
							: null}
					</div>
					<LinkButton
						href={'/proyectos'}
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
