import React, {useEffect, useState} from 'react';

interface Props {
	words: string[];
	interval?: number; // words change speed in ms
	showCursor?: boolean; // whether to show the blinker cursor
	showComma?: boolean; // whether to show comma at the end of the line
	textClassName?: string;
	commaClassName?: string;
	cursorClassName?: string;
	typingSpeed?: number;
}

export default function TypingAnimation({
	                                    words = [],
	                                    interval = 200,
	                                    showComma = true,
	                                    showCursor = true,
	                                    textClassName,
	                                    commaClassName,
	                                    cursorClassName,
	                                    typingSpeed = 300
                                    }: Props) {
	const [wordsToRotate] = useState<string[]>(words);
	const [loopNum, setLoopNum] = useState<number>(0);
	const [txt, setTxt] = useState<string>(` `);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [timing, setTiming] = useState<number>(typingSpeed - Math.random() * 100);

	function tick(): void {
		const i: number = loopNum % wordsToRotate.length;
		const fullTxt: string = wordsToRotate[i];

		if (isDeleting) {
			setTxt(fullTxt.substring(0, txt.length - 1));
		} else {
			setTxt(fullTxt.substring(0, txt.length + 1));
		}

		setTiming(typingSpeed - Math.random() * 100);
		if (isDeleting) {
			setTiming((prev) => prev / 2);
		}

		if (!isDeleting && txt === fullTxt) {
			setTiming(interval);
			setIsDeleting(true);
		} else if (isDeleting && txt === ``) {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setTiming(interval);
		}
	}

	useEffect(() => {
		setTimeout(tick, timing);
	}, [txt, isDeleting]);

	const textClass = textClassName && textClassName?.length > 0 ? textClassName : 'text';
	const commaClass = commaClassName && commaClassName?.length > 0 ? commaClassName : 'comma';
	const cursorClass = cursorClassName && cursorClassName?.length > 0 ? cursorClassName : 'cursor';
	return (
		<div>
            <span className={`${textClass} ${!showCursor ? 'hideCursor' : ''}`}>
            {txt}
	        {showCursor && <span className={cursorClass}></span>}
            </span>
			{showComma && <span className={commaClass}>,</span>}
			<style>
				{`.text {
					    display: inline-block;
					    position: relative;
					    color: #000000;
					    font-family: inherit;
					    font-size: 30px;
					    text-shadow: 0 5px 8px rgba(128, 64, 64, 0.17);
					}
					.cursor {
					    width: 3px;
					    height: 1em;
					    display: inline-block;
					    margin: 0 2px 0 5px;
					    background-color: rgba(0, 0, 0, 0.45);
					    animation: blink 0.5s linear infinite;
					}
					@keyframes blink {
					    0% {
					        opacity: 1;
					    }
					    49% {
					        opacity: 1;
					    }
					    50% {
					        opacity: 0;
					    }
					    100% {
					        opacity: 0;
					    }
					}
					.comma {
					    font-family: inherit;
					    color: #000000;
					    font-size: 30px;
					}
				`}
			</style>
		</div>
	);
}
