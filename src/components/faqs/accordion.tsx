/* -------------------------------------------------------------------------- */
/*                       Accordion built using GPT-4 🤖                       */
/* -------------------------------------------------------------------------- */

import React from 'react';
import { IconChevronTop, IconChevronBottom } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./index.less";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, setIsOpen }) => {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <div className="w-full mx-auto mb-4 rounded-[24px] box-here-accordion">
      <div className="px-2 py-2 overflow-hidden" onClick={playSoundClick}>
        <button onClick={setIsOpen} className="w-full px-4 py-2 text-left flex justify-between items-center" onMouseOver={playSoundPop}>
          <div className={`${css.txtHeadline2}`}>{title}</div>
          {isOpen ? <img src={IconChevronTop} alt="Icon Chevron Top" /> : <img src={IconChevronBottom} alt="Icon Chevron Bottom" />}
        </button>
        {isOpen && (
          <div className="text-start mx-4 my-3 p-4 rounded-[12px] glass-effect-1">
            <div className={`${css.txtBodyWhite}`}>{content}</div>
          </div>
        )}
      </div>
    </div >
  );
};

export default Accordion;
