import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ProjectSlide } from '@/components/ProjectSlide';
import { ContactBanner } from '@/components/global/ContactBanner';
import s from '@/styles/pages/Solutions.module.css';

export default function Walkthrough() {
	const [projects, setProjects] = useState([]);
	useFetch(endpoints.projects.getAllProjects, setProjects);
	return (
		<>
			<Head>
				<title>Recorridos</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'RECORRIDOS'}
						subtitle={'Videos y recorridos 360 para Arquitectura y Diseño'}
						image={{
							src: 'https://i.postimg.cc/pdDx2R7d/Enscape_2020-08-07-14-16-46.jpg',
							alt: 'Casa de campo de concreto con pergola de madera en vista lateral',
						}}
					/>
				</section>
				<section className={s.main_text}>
					<h2>VIDEOS Y RECORRIDOS 360</h2>
					<h3>
						Visualización completa del proyecto, diseño de interiores y
						construcción del proyecto
					</h3>
				</section>
				<section className={s.main_solutions}>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/MZbGtV3K/07.jpg'}
								alt={
									'Casa de campo de dos niveles de concreto y ladrillo con ventanal de dos niveles'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>RECORRIDOS EN VIDEO</h3>
							<p>
								Renderización de videos arquitectónicos, visualizando cada parte
								del proyecto y resaltando sus mejores aspectos
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={
									'https://i.postimg.cc/D08BSpvd/Enscape-2020-07-07-13-15-45.jpg'
								}
								alt={
									'Sala comedor estilo industrial con grandes ventanas, muebles grises y comedor de madera'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>RECORRIDOS 360</h3>
							<p>
								Recorridos virtuales en 360, ofreciendo una experiencia mas
								realista e inmersiva simulando estar dentro del proyecto
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/Kz3ccxXZ/2023-04-26-2.jpg'}
								alt={'Silla de madera con estructura metálica en fondo beige'}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>VIDEOS DE PRODUCTOS</h3>
							<p>
								Visualización completa del producto, mostrando cada una de sus
								características y funcionalidades en el espacio objetivo
							</p>
						</div>
					</div>
				</section>
				<span className='separator'></span>
				<section className={s.main_projects}>
					<div className={s.projects_text}>
						<h2>PROYECTOS RELACIONADOS</h2>
						<p>Soluciones que satisficieron las necesidades del cliente</p>
					</div>
					<div className={s.projects_list}>
						{projects.length
							? projects?.slice(0, 2).map((project) => (
									<ProjectSlide
										key={project.id}
										link={`/proyectos/${project.id}`}
										title={project.title}
										image={{
											src: project.images[0].src,
											alt: project.images[0].alt,
										}}
										style={s.projects_slide}
									/>
							  ))
							: null}
					</div>
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
