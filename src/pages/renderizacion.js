import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ProjectSlide } from '@/components/ProjectSlide';
import { ContactBanner } from '@/components/global/ContactBanner';
import s from '@/styles/pages/Solutions.module.css';

export default function Rendering() {
	const [projects, setProjects] = useState([]);
	const [category, setCategory] = useState();
	const [type, setType] = useState();
	useFilter(
		endpoints.projects.filterProject(JSON.stringify({ category, type })),
		setProjects,
		category,
		type
	);
	useEffect(() => {
		setCategory('Renderización');
		setType('false');
	}, []);
	return (
		<>
			<Head>
				<title>Renderización</title>
				<meta name={'title'} content={'Renderización'} />
				<meta
					name={'description'}
					content={
						'Soluciones en renderización de proyectos de arquitectura, mobiliario y arte 3D para tu empresa y marca personal. Imágenes e imágenes 360.'
					}
				/>
				<meta
					name={'keywords'}
					content={
						'soluciones, render, renderización, imagen, imágenes, arquitectura, mobiliario, arte'
					}
				/>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'RENDERIZACIÓN'}
						subtitle={
							'Imágenes de alta calidad para Arquitectura, Diseño y Arte'
						}
						image={{
							src: 'https://i.postimg.cc/cJ2g331M/Exterior-05-2-Post.jpg',
							alt: 'Casa de campo de concreto y ladrillo con pergola negra de metal',
						}}
					/>
				</section>
				<section className={s.main_text}>
					<h2>IMÁGENES PARA TU PROYECTO O DISEÑO</h2>
					<h3>
						Siempre pensadas para reflejar la esencia del diseño, estructura y
						composición
					</h3>
				</section>
				<section className={s.main_solutions}>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={
									'https://i.postimg.cc/Wb6qP0VJ/Enscape-2020-07-09-19-13-02.jpg'
								}
								alt={
									'Casa de campo de dos niveles con piscina desde vista lateral'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>ARQUITECTURA</h3>
							<p>
								Renderización de exteriores e interiores arquitectónicos
								completamente amueblados y en multiples escenas para mayor
								apreciación del proyecto
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/BvdmZNyx/Bois-Portada02.jpg'}
								alt={
									'Silla de madera de espaldas en frente de un escritorio de madera'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>MOBILIARIO</h3>
							<p>
								Renderización de diseños de mobiliario de todo tipo, siempre
								resaltando los mejores aspectos y luciendo la mejor faceta
							</p>
						</div>
					</div>
					<span className='separator'></span>
					<div className={s.solutions_slide}>
						<figure className={s.slide_image}>
							<Image
								src={'https://i.postimg.cc/BQRWP5dn/Mesa-Auxiliar-02.jpg'}
								alt={
									'Dos mesas auxiliares de color azul y amarillos con accesorios encima'
								}
								fill
							/>
						</figure>
						<div className={s.slide_text}>
							<h3>PRODUCTOS</h3>
							<p>
								Renderización de productos industriales y de manufactura,
								enfocado en el marketing visual y la marca del producto
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
							? projects?.slice(0, 3).map((project) => (
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
