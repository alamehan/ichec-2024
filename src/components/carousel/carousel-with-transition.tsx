/* -------------------------------------------------------------------------- */
/*                        Carousel built using GPT-4 🤖                       */
/* -------------------------------------------------------------------------- */

import React, { useState, useRef, useEffect } from "react";
import { IconArrowCarouselLeft, IconArrowCarouselRight, IconQuote } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";

interface Item {
	image: string;
	text_team: string;
	text_winner: string;
	text_quote: string;
}

interface Props {
	items: Item[];
}

const Carousel: React.FC<Props> = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [height, setHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	// Play Sound Effect
	function playSoundPop() {
		new Audio(soundPop).play()
	}
	function playSoundClick() {
		new Audio(soundClick).play()
	}

	// Prev & Next Carousel
	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
	};
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		if (ref.current && ref.current.firstChild) {
			setHeight((ref.current.firstChild as HTMLElement).offsetHeight);
		}
	}, [currentIndex]);

	// Solusi untuk: Pada saat halaman website dibuka pertama kalinya height dari Carousel tidak sesuai dengan konten isinya.
	// Plus height Carousel akan diperbarui setiap kali ukuran window berubah, jadi tidak perlu reload lagi. ⚠️ Tetapi ada bug,
	// Jika saat coding, lalu project di save, maka terkadang outputnya malah layar putih kosong, harus reload terlebih dahulu
	// baru pagenya muncul. Juga pada saat pindah route, malah layar putih kosong, harus reload dulu barulah pagenya muncul ⚠️
	useEffect(() => {
		const updateHeight = () => {
			if (ref.current && ref.current.firstChild) {
				setHeight((ref.current.firstChild as HTMLElement).offsetHeight);
			}
		};
		// Update the height when a image finishes loading
		for (const img of Array.from(ref.current!.getElementsByTagName('img'))) {
			img.addEventListener('load', updateHeight);
		}
		// Update the height when the window size changes
		window.addEventListener('resize', updateHeight);
		return () => {
			Array.from(ref.current!.getElementsByTagName('img')).forEach(img => img.removeEventListener('load', updateHeight));
			window.removeEventListener('resize', updateHeight);
		};
	}, []);

	return (
		<div className="relative flex flex-col lg:flex-row h-full p-0 lg:p-4 overflow-hidden" style={{ height }}>
			{/* Carousel content */}
			<button onClick={prevSlide} className="absolute left-0 top-[50%] transform -translate-y-[50%] z-10 ml-0 md:ml-4">
				<img src={IconArrowCarouselLeft} alt="Prev" onMouseOver={playSoundPop} onClick={playSoundClick} />
			</button>
			<div ref={ref} className="flex w-full justify-center overflow-hidden">
				{items.map((item, idx) => (
					<div key={idx} style={{ transform: `translateX(${currentIndex === idx ? "0" : currentIndex > idx ? "100%" : "-100%"})`, transition: "transform .5s" }} className={`absolute w-full flex-none flex flex-col lg:flex-row pb-16`}>
						<img src={item.image} alt="Carousel Image" className="w-full md:w-1/2 object-cover mx-auto px-4 pt-4 pb-0 md:px-6 md:py-6" />
						<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-start p-4">
							<div className={`${css.txtHeadline1} mb-4`}>{item.text_team}</div>
							<div className={`${css.txtBodyBold} mb-8`}>{item.text_winner}</div>
							<div className="relative">
								<img src={IconQuote} alt="Quote" className="absolute top-[-24px] right-[24px] z-10" />
								<div className={`${css.txtBodyDark} glass-effect-1 rounded-[24px] p-8`}>{item.text_quote}</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={nextSlide} className="absolute right-0 top-[50%] transform -translate-y-[50%] z-10 mr-0 md:mr-4">
				<img src={IconArrowCarouselRight} alt="Next" onMouseOver={playSoundPop} onClick={playSoundClick} />
			</button>

			{/* Slide indicator */}
			<div className="absolute bottom-[24px] left-[50%] transform -translate-x-[50%] flex space-x-[10px]">
				{items.map((_, idx) => (
					<span key={idx} onMouseOver={playSoundPop} onClick={() => { setCurrentIndex(idx); playSoundClick(); }} style={{ cursor: "pointer" }} className={`inline-block w-[10px] h-[10px] rounded-full ${currentIndex === idx ? "bg-brand_brown" : "bg-white"} transition-colors`}></span>
				))}
			</div>
		</div>
	);
};

export default Carousel;
