import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ProjectSlide } from '@/components/ProjectSlide';
import { ContactBanner } from '@/components/global/ContactBanner';
import s from '@/styles/pages/Solutions.module.css';

export default function Modeling() {
	const [projects, setProjects] = useState([]);
	useFetch(endpoints.projects.getAllProjects, setProjects);
	return (
		<>
			<Head>
				<title>Modelado 3D</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'MODELADO 3D'}
						subtitle={'Modelos técnicos para arquitectura, mobiliario y arte'}
						image={{
							src: 'https://i.postimg.cc/YCpCs7mh/Prueba-03.jpg',
							alt: 'Modelo de casa de campo con terreno y arboles sin materiales',
						}}
					/>
				</section>
				<section className={s.main_text}>
					<h2>MODELOS TÉCNICOS Y CREATIVOS</h2>
					<h3>
						Modelado para arquitectura, mobiliario e ilustraciones creativas
					</h3>
				</section>
				<section className={s.main_solutions}>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={
									'https://i.postimg.cc/CMv0Mvvb/Enscape_2020-08-08-18-50-30.jpg'
								}
								alt={
									'Casa de campo con mobiliario seccionada desde la vista superior'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>MODELADO ARQUITECTÓNICO</h3>
							<p>
								Modelado completo del proyecto utilizando programas como{' '}
								<b>SketchUp</b>, <b>Revit</b>, <b>Blender</b>, entre otros.
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/t41JGjzk/Musa-03.jpg'}
								alt={'Zoom del asiento de una poltrona color azul'}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>MODELADO DE PRODUCTOS</h3>
							<p>
								Modelado de productos industriales y de manufactura para
								contenido y marketing visual
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/DzXFHCCT/CA01-3.jpg'}
								alt={
									'Modelo artístico de multiples espejos dorados con cortinas oscuras'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>ARTE E ILUSTRACIÓN</h3>
							<p>
								Modelado de escenas e ilustraciones artísticas para contenido
								audiovisual
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
										link={`/projects/${project.id}`}
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
