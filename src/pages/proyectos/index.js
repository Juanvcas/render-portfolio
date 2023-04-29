import Head from 'next/head';
import { MainBanner } from '@/components/MainBanner';
import s from '@/styles/pages/Projects.module.css';

export default function Projects() {
	return (
		<>
			<Head>
				<title>Proyectos</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'PROYECTOS'}
						subtitle={'Todos los proyectos completados y entregados'}
						image={{
							src: 'https://i.postimg.cc/Qx2fS0W5/RC6_02.jpg',
							alt: 'Vista desde el segundo piso de una cabaña de madera',
						}}
					/>
				</section>
				<section className={s.main_filters}>
					<form id='filters'>
						<label>
							<span>Categoría:</span>
							<select name='category' id='category'>
								<option value={'abc'}>abc</option>
							</select>
						</label>
						<label>
							<span>Tipo:</span>
							<select name='type' id='type'>
								<option value={'abc'}>abc</option>
							</select>
						</label>
					</form>
					<form id='find'>
						<label>
							<input type={'search'} id='search' />
						</label>
					</form>
				</section>
			</main>
		</>
	);
}
