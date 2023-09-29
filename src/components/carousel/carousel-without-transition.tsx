/* -------------------------------------------------------------------------- */
/*                        Carousel built using GPT-4 🤖                       */
/* -------------------------------------------------------------------------- */

import React, { useState, useEffect } from "react";
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

  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

	// Auto-play feature
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
		}, 5000); // Change slide every x seconds

		return () => clearInterval(timer);
	}, [items]);

	return (
		<div className="relative flex flex-col lg:flex-row h-full p-0 lg:px-4 lg:py-4">
			{/* Carousel content */}
			<div className="relative w-full flex flex-col lg:flex-row pb-16 lg:pb-8">
				<button onClick={() => setCurrentIndex(currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1)} className="absolute left-0 top-[50%] transform -translate-y-[50%] z-10 ml-0 md:ml-4">
					<img src={IconArrowCarouselLeft} alt="Prev" onMouseOver={playSoundPop} onClick={playSoundClick}/>
				</button>
				<img src={items[currentIndex].image} alt="Carousel Image" className="w-full md:w-1/2 object-cover mx-auto px-4 pt-4 pb-0 md:px-6 md:py-6" />
				<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-start p-4">
					<div className={`${css.txtHeadline1} mb-4`}>{items[currentIndex].text_team}</div>
					<div className={`${css.txtBodyBold} mb-8`}>{items[currentIndex].text_winner}</div>
					<div className="relative">
						<img src={IconQuote} alt="Quote" className="absolute top-[-24px] right-[24px] z-10" />
						<div className={`${css.txtBodyDark} glass-effect-1 rounded-[24px] p-8`}>{items[currentIndex].text_quote}</div>
					</div>
				</div>
				<button onClick={() => setCurrentIndex(currentIndex + 1 >= items.length ? 0 : currentIndex + 1)} className="absolute right-0 top-[50%] transform -translate-y-[50%] z-10 mr-0 md:mr-4">
					<img src={IconArrowCarouselRight} alt="Next" onMouseOver={playSoundPop} onClick={playSoundClick}/>
				</button>
			</div>

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
