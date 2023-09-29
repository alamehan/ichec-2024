
import { IconArrowScroll, Box3dEvents, Box3dDate, ImgUser2, ImgDivLogoBigWS, ImgDivSpeakerValencia, ImgDivSpeakerBagas, ImgDivSpeakerLukman, ImgDivSpeakerHenry } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import SpeakerCardContainer from './speaker-card-container.tsx'
import SpeakerCard from './speaker-card.tsx'
import ContactCard from './contact-card.tsx'
import css from "../../assets/styles/general";
import "./style.less";

const workshop = () => {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <>
      <div id="page-events-workshop" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionMD} ${css.widthFull} ${css.paddingToNavbarHNormal2}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-[100%]`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.orderSwitch} ${css.txtCenterToStart}`}>
                  <div className={`${css.imgCenterToStart} mb-12`}>
                    <img src={Box3dEvents} alt="Box 3D Events" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>Workshop</div>
                  <div className={`${css.txtBody} mb-12`}>In order to get the word out to the potential competitors, the ICHeC 2024 will set multiple Pre-Events. They include fun interactions and some that can help the competitors in their journey. They include exposure to ICHEC and workshops that can help you!</div>
                  <a href="#scroll-target" className={`${css.imgCenterToStart}`}>
                    <img src={IconArrowScroll} alt="Icon Arrow Scroll" className="bounce cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                  </a>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.marginMobileXL}`}>
                  <img src={ImgDivLogoBigWS} alt="Logo Workshop" className={`${css.imgReponsive} hover:animate-gelatine`} />
                </div>
              </div>
              <div id="scroll-target"></div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <SpeakerCardContainer link="http://bit.ly/RegistrasiWorkshopIChEC2024" linkClass="" title="Workshop on Business Case & Problem Solving" subtitle="October 28th 2023, 13:30 - 17:00">
          <SpeakerCard photo={ImgDivSpeakerValencia} theme="Unlocking Success: Business Case Workshop" name="👩 Valencia Chandra" position="💼 Associate Intern at Altha Consulting" description="" />
          <SpeakerCard photo={ImgDivSpeakerBagas} theme="Unlocking Success: Problem-Solving Workshop" name="🧔 Bagas Cahyadi" position="💼 Process Engineer at PT Lotte Chemical Titan Nusantara" description="" />
          {/* <SpeakerCard photo={ImgDivSpeakerBagas} theme="Unlocking Success: Problem-Solving Workshop" name="🧔 Bagas Cahyadi" position="💼 Process Engineer at PT Lotte Chemical Titan Nusantara" description="A Vivacious partner who is deeply passionate in manufacturing process improvement, problem analytics, process development, convenient in fast paced environment, and also eager and quick to learn new things. Great in problem solving and glutton for work, and also swish in communication to stakeholder management in submission of management of change proposal. Actively in asking and attention to detail, also high integrity." /> */}
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 3 --------------------------------- */}

        <SpeakerCardContainer link="http://bit.ly/RegistrasiWorkshopIChEC2024" linkClass="" title="Workshop on Plant Design" subtitle="November 18th 2023, 13:30 - 17:00">
          <SpeakerCard photo={ImgDivSpeakerLukman} theme="Business Case Guidance" name="🧔 Lukman Hakim" position="💼 Process Engineer at PT Lotte Chemical Titan Nusantara" description="" />
          <SpeakerCard photo={ImgDivSpeakerHenry} theme="Business Case Guidance" name="🧔 Henry Susilo" position="💼 Simulation Engineer at Honeywell" description="" />
          {/* <SpeakerCard photo={ImgDivSpeakerHenry} theme="Business Case Guidance" name="🧔 Henry Susilo" position="💼 Simulation Engineer at Honeywell" description="Henry is a Chemical Engineer that have a really big passion in process modelling, simulation, and optimization. He actively shares his knowledge & experience in process simulation & optimization through various workshop and seminar sessions. He has been trusted to handle various projects in the chemical, petrochemical, EPC, and oil & gas industries. Non-academically, he has led an International Chemical Organization, namely AIChE ITB SC, which can show his strong leadership skill." /> */}
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 4 --------------------------------- */}

        <div className={`row4 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row2-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dDate} alt="Box 3D Date" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>Register Period</div>
                  <div className={`${css.txtDisplay2} mb-6`}>28 Sep 2023 - 28 Oct 2023</div>
                  <div className={`${css.txtBody}`}>Benefit: ✔️ Hands-on learning ✔️ Study case ✔️ E-certificate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <div className={`row5 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout2Column} ${css.txtCenterToCenter} pt-32 pb-16`}>
                <div className={`row10-col1 ${css.widthFull} ${css.marginMobileContact} pl-0 lg:pl-10 xl:pl-16`}>
                  <ContactCard photo={ImgUser2} name="Ahmad Alfardan" whatsapp="0878-0888-8852" />
                </div>
                <div className={`row10-col2 ${css.widthFull} pr-0 lg:pr-10 xl:pr-16`}>
                  <ContactCard photo={ImgUser2} name="Bryan Nimrod" whatsapp="0811-9997-911" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default workshop