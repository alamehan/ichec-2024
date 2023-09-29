/* -------------------------------------------------------------------------- */
/*                       Countdown built using GPT-4 🤖                       */
/* -------------------------------------------------------------------------- */

import React, { useState, useEffect } from "react";
import { soundBoing } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";

interface CountdownProps {
	targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
	// Play Sound Effect
	function playSoundBoing() {
		new Audio(soundBoing).play();
	}

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [targetDate]);

	return (
		<div className="flex flex-wrap gap-4 justify-center items-center max-w-[240px] md:max-w-none">
			<div className="flex flex-col items-center">
				<span className={`${css.txtDisplay3} ${css.countDownTimerBox} ${css.countDownTimerGradient} hover:animate-gelatine`} onMouseOver={playSoundBoing}>{timeLeft.days}</span>
				<span className={`${css.txtBody} text-xl mt-3`}>Days</span>
			</div>
			<div className="flex flex-col items-center">
				<span className={`${css.txtDisplay3} ${css.countDownTimerBox} ${css.countDownTimerGradient} hover:animate-gelatine`} onMouseOver={playSoundBoing}>{timeLeft.hours}</span>
				<span className={`${css.txtBody} text-xl mt-3`}>Hours</span>
			</div>
			<div className="flex flex-col items-center">
				<span className={`${css.txtDisplay3} ${css.countDownTimerBox} ${css.countDownTimerGradient} hover:animate-gelatine`} onMouseOver={playSoundBoing}>{timeLeft.minutes}</span>
				<span className={`${css.txtBody} text-xl mt-3`}>Minutes</span>
			</div>
			<div className="flex flex-col items-center">
				<span className={`${css.txtDisplay3} ${css.countDownTimerBox} ${css.countDownTimerGradient} hover:animate-gelatine`} onMouseOver={playSoundBoing}>{timeLeft.seconds}</span>
				<span className={`${css.txtBody} text-xl mt-3`}>Seconds</span>
			</div>
		</div>
	);
};

export default Countdown;
