import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiAlignJustify, FiChevronDown } from 'react-icons/fi';
import s from '@/styles/components/global/Header.module.css';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [menu, setMenu] = useState(false);
	const [submenu, setSubmenu] = useState(false);
	const [menuLogo, setMenuLogo] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const header = document.querySelector('header');

		const style = () => {
			if (window.scrollY !== 0) {
				header.classList.add('header-back');
			} else {
				header.classList.remove('header-back');
			}
		};

		window.addEventListener('scroll', style);

		return () => window.removeEventListener('scroll', style);
	}, []);

	useEffect(() => {
		const setMenus = () => {
			if (window.innerWidth < 1024) {
				setMenu(false);
				setSubmenu(false);
			} else {
				setSubmenu(false);
			}
		};

		document.body.addEventListener('click', setMenus);

		return () => document.body.removeEventListener('click', setMenus);
	}, []);

	useEffect(() => {
		if (window.innerWidth >= 1024) {
			setMenuLogo(false);
			setMenu(true);
			setSubmenu(false);
		}

		const resize = () => {
			if (window.innerWidth >= 1024) {
				setMenuLogo(false);
				setMenu(true);
				setSubmenu(false);
			} else {
				setMenuLogo(true);
				setMenu(false);
				setSubmenu(false);
			}
		};

		window.addEventListener('resize', resize);

		return () => window.removeEventListener('resize', resize);
	}, []);

	useEffect(() => {
		router.events.on('routeChangeComplete', () => {
			if (window.innerWidth < 1024) {
				setMenu(false);
				setSubmenu(false);
			} else {
				setSubmenu(false);
			}
		});
	}, [router]);

	return (
		<header
			className={s.main}
			style={{
				backgroundColor:
					(menu && menuLogo) || submenu ? 'var(--background)' : null,
			}}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={s['main-cont']}>
				<section className={s.main_logo}>
					<Link href={'/'}>JV</Link>
				</section>
				<menu className={s.main_menu}>
					{menu ? (
						<ul className={s.menu_links}>
							<li>
								<div
									className={s['menu_links-button']}
									onClick={() => setSubmenu(!submenu)}
								>
									<p>Soluciones</p>
									<span>
										<FiChevronDown />
									</span>
								</div>
								{submenu ? (
									<ul className={s['menu_links-submenu']}>
										<li>
											<Link href={'/renderizacion'}>Renderización</Link>
										</li>
										<li>
											<Link href={'/recorridos'}>Recorridos</Link>
										</li>
										<li>
											<Link href={'/modelado'}>Modelado 3D</Link>
										</li>
									</ul>
								) : null}
							</li>
							<li>
								<Link href={'/proyectos'}>Proyectos</Link>
							</li>
							<li>
								<Link href={'/contacto'}>Contacto</Link>
							</li>
						</ul>
					) : null}
					{menuLogo ? (
						<span className={s.menu_logo} onClick={() => setMenu(!menu)}>
							<FiAlignJustify />
						</span>
					) : null}
				</menu>
			</div>
		</header>
	);
};
