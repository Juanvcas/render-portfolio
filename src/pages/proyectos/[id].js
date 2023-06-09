import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import { ImageSlider } from '@/components/ImageSlider';
import { Video } from '@/components/global/Video';
import s from '@/styles/pages/Project.module.css';
import { Viewer360 } from '@/components/global/Viewer360';

export default function Project() {
	const router = useRouter();
	const { id } = router.query;

	const [projects, setProjects] = useState([]);

	useFetch(endpoints.projects.getOneProject(id), setProjects);

	const project = projects[0];

	return project ? (
		<>
			<Head>
				<title>{project.title}</title>
				<meta name={'title'} content={project.title} />
				<meta
					name={'description'}
					content={`Proyecto de ${project?.type.title}. Imágenes, videos, recorridos 360 y modelado 3D.`}
				/>
				<meta
					name={'keywords'}
					content={
						'soluciones, render, renderización, modelado 3d, arquitectura, mobiliario, arte, proyecto'
					}
				/>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={project.title.toUpperCase()}
						subtitle={project?.type.title}
						image={{
							src: project.images[0].src,
							alt: project.images[0].alt,
						}}
					/>
				</section>
				<section className={s.main_text}>
					<h2>{project.subtitle.toUpperCase()}</h2>
					<p>{project.text}</p>
				</section>
				<span className='separator'></span>
				<section className={s.main_gallery}>
					<h2>GALERÍA</h2>
					<div className={s.gallery_images}>
						<ImageSlider images={project.images} />
					</div>
				</section>
				{project.video ? (
					<>
						<span className='separator'></span>
						<section className={s.main_video}>
							<h2>RECORRIDO</h2>
							<div className={s['video-cont']}>
								<Video url={project.video[0].src} />
							</div>
						</section>
					</>
				) : null}
				{project.walkthrough ? (
					<>
						<span className='separator'></span>
						<section className={s.main_walk}>
							<h2>RECORRIDO 360</h2>
							<div className={s['walk-cont']}>
								<Viewer360 images={project.walkthrough} />
							</div>
						</section>
					</>
				) : null}
				<span className='separator'></span>
				<section className={s.main_tech}>
					<h2>TECNOLOGÍAS</h2>
					<div className={s['text-cont']}>
						<div className={s.tech_text}>
							<h3>MODELADO:</h3>
							{project.technologies.model.map((text, index) => (
								<p key={index}>{text.title}</p>
							))}
						</div>
						<div className={s.tech_text}>
							<h3>RENDER:</h3>
							{project.technologies.render.map((text, index) => (
								<p key={index}>{text.title}</p>
							))}
						</div>
					</div>
				</section>
				<span className='separator'></span>
			</main>
		</>
	) : null;
}
