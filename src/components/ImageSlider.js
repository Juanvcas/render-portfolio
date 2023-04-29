import { useState } from 'react';

import styles from '@/styles/components/ImageSlider.module.css';

const ImageSlider = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [translateX, setTranslateX] = useState(0);

	const nextSlide = () => {
		if (activeIndex === images.length - 1) {
			setActiveIndex(0);
			setTranslateX(0);
		} else {
			setActiveIndex(activeIndex + 1);
			setTranslateX(translateX - slideWidth());
		}
	};

	const prevSlide = () => {
		if (activeIndex === 0) {
			setActiveIndex(images.length - 1);
			setTranslateX(-slideWidth() * (images.length - 1));
		} else {
			setActiveIndex(activeIndex - 1);
			setTranslateX(translateX + slideWidth());
		}
	};

	const slideWidth = () => {
		return document.querySelector(`.${styles.slide}`).clientWidth;
	};

	return (
		<div className={styles.slider}>
			<div
				className={styles.sliderWrapper}
				style={{
					transform: `translateX(${translateX}px)`,
					transition: 'transform ease-out 0.45s',
				}}
			>
				{images.map((image, index) => (
					<div key={index} className={styles.slide}>
						<img src={image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>

			<button className={styles.buttonPrev} onClick={prevSlide}>
				Prev
			</button>
			<button className={styles.buttonNext} onClick={nextSlide}>
				Next
			</button>

			<div className={styles.dots}>
				{images.map((_, index) => (
					<div
						key={index}
						className={`${styles.dot} ${
							index === activeIndex && styles.activeDot
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
