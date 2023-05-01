import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import s from '@/styles/components/ImageSlider.module.css';

export const ImageSlider = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(0);

	const nextSlide = () => {
		const newIndex = currentImage + 1;
		if (newIndex === images.length) {
			setCurrentImage(0);
		} else {
			setCurrentImage(newIndex);
		}
	};

	const prevSlide = () => {
		const newIndex = currentImage - 1;
		if (newIndex < 0) {
			setCurrentImage(images.length - 1);
		} else {
			setCurrentImage(newIndex);
		}
	};

	return (
		<div className={s.main}>
			<div className={s['main-cont']}>
				{images.map((image, index) => (
					<Image
						key={index}
						src={image.src}
						alt={image.alt}
						className={
							index === currentImage
								? `${s.main_slide} ${s['active-slide']}`
								: s.main_slide
						}
						width={1280}
						height={1280}
					/>
				))}
				{images.length > 1 ? (
					<>
						<button className={s['main_btn-prev']} onClick={prevSlide}>
							<MdArrowBackIos />
						</button>
						<button className={s['main_btn-next']} onClick={nextSlide}>
							<MdArrowForwardIos />
						</button>
						<ul className={s.main_dots}>
							{images.map((sld, index) => (
								<li
									key={index}
									className={
										index === currentImage
											? `${s.dot} ${s['dot-active']}`
											: s.dot
									}
									onClick={() => setCurrentImage(index)}
								></li>
							))}
						</ul>
					</>
				) : null}
			</div>
		</div>
	);
};
