
import { Link } from 'react-router-dom';
import { IconArrowScroll, Box3dSeminar, Box3dDate, LogoPlaceholderSection, ImgSpeaker } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import SpeakerCardContainer from './speaker-card-container.tsx'
import SpeakerCard from './speaker-card.tsx'
import css from "../../assets/styles/general";
import "./style.less";

const grandSeminar = () => {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <>
      <div id="page-events-grand-seminar" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionMD} ${css.widthFull} ${css.paddingToNavbarHNormal2}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-[100%]`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.orderSwitch} ${css.txtCenterToStart}`}>
                  <div className={`${css.imgCenterToStart} mb-12`}>
                    <img src={Box3dSeminar} alt="Box 3D Seminar" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>Grand Seminar</div>
                  <div className={`${css.txtBody} mb-12`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                  <a href="#scroll-target" className={`${css.imgCenterToStart}`}>
                    <img src={IconArrowScroll} alt="Icon Arrow Scroll" className="bounce cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                  </a>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.marginMobileXL}`}>
                  <img src={LogoPlaceholderSection} alt="Image Placeholder" className={`${css.imgReponsive} hover:animate-gelatine`} />
                </div>
              </div>
              <div id="scroll-target"></div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div className={`row2 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row2-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dDate} alt="Box 3D Date" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>The Date</div>
                  <div className={`${css.txtDisplay2}`}>XX Month 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 3 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="" subtitle="">
          <SpeakerCard photo={ImgSpeaker} theme="" name="" position="" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 4 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="" subtitle="">
          <SpeakerCard photo={ImgSpeaker} theme="" name="" position="" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="" subtitle="">
          <SpeakerCard photo={ImgSpeaker} theme="" name="" position="" description="" />
        </SpeakerCardContainer>

        {/* ------------------------------- ROW BUTTON ------------------------------- */}

        <div className={`row-button ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row-button-col1 ${css.txtCenterToCenter}`}>
                  <div className='hover:animate-bounce'>
                    <Link to="#" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default grandSeminar