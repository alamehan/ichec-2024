import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import { IconArrowScroll, IconDotTimeline, ImgUser1, Box3dCompetitions, Box3dTimeLeft, Box3dRegistration, Box3dContact, OrnamentDashLine, Box3dTheme, ImgDivLogoBigBC } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import Countdown from '../countdown/countdown.tsx';
import ContactCard from './contact-card.tsx'
import css from "../../assets/styles/general";
import "./style.less";

/* ---------------------------- CUSTOM COMPONENT ---------------------------- */
function TimelineData(props: { date: any; desc: any }) {
  return (
    <div className="mx-3">
      <div className={`${css.txtBodyBoldBlue} ${css.timelineDateBox}`}>{props.date}</div>
      <div className={`${css.txtBodyBlack}`}>{props.desc}</div>
    </div>
  )
}
/* -------------------------------------------------------------------------- */

const businessCase = () => {
  // Atur tanggal disini
  function generateTargetDate(year: number, month: number, day: number, hour: number = 0): Date {
    return new Date(year, month - 1, day, hour);
  }
  const targetDate = generateTargetDate(2023, 11, 11, 24); // <- Ubah disini

  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <>
      <div id="page-competitions" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionMD} ${css.widthFull}`}>
          {/* relative dan overflow-hidden di atas dibutuhkan untuk menangani ornament dash line yang sebagiannya keluar dari layar*/}
          <img src={OrnamentDashLine} alt="Ornament Dash Line" className="absolute top-[-200px] left-[-200px] animate-rotate" />
          <div className={`${css.maxWidth} ${css.verticalCenter} h-[90vh] md:h-[95vh] lg:h-screen`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.txtCenterToCenter}`}>
                  <img src={ImgDivLogoBigBC} alt="Logo Business Case" className={`${css.imgReponsive} mb-8 md:mb-12 hover:animate-gelatine`} />
                  <div className='mb-12'>
                    <Link to="https://drive.google.com/file/d/19sKRAZXOlHku84OBOmRYuLT3PeN8kJj0/view?usp=sharing" target="_blank" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Invitation Booklet</Link>
                  </div>
                  <a href="#scroll-target" className={`${css.imgCenterToCenter}`}>
                    <img src={IconArrowScroll} alt="Icon Arrow Scroll" className="bounce cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="scroll-target"></div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div className={`row2 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row2-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dCompetitions} alt="Box 3D Competitions" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-8`}>Business Case Competition</div>
                  <div className={`${css.txtBody} max-w-[768px] mx-auto`}>The Business Case Competition challenges its participants to analyze and develop solutions for real-world business-related problems faced by an industrial-business entity.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 3 --------------------------------- */}

        <div className={`row3 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row3-col1 ${css.txtCenterToCenter} pt-16 pb-20`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dTheme} alt="Box 3D Theme" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-8`}>Theme</div>
                  <div className={`${css.txtDisplay2White} mx-3 lg:mx-6`}>Renewable Energy Solutions for Sustainable Industries: Paving the Way to a Green Economy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 4 --------------------------------- */}

        <div className={`row4 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row4-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-16`}>
                    <img src={Box3dTimeLeft} alt="Box 3D Time Left" className="animate-swing" />
                  </div>
                  <div className={`${css.imgCenterToCenter} mb-12 hidden`}>
                    <Countdown targetDate={targetDate} />
                  </div>
                  <div className={`${css.txtHeadline1} hidden`}>Until the registration deadline</div>
                  <div className={`${css.txtHeadline1}`}>Registration is closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <div className={`row5 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row5-col1 ${css.widthFull}`}>
                  <div className={`${css.imgReponsive} image-regis-flow`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 6 --------------------------------- */}

        <div className={`row6 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} my-16`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column} ${css.verticalCenter}`}>
                <div className={`row6-col1 ${css.widthFull} ${css.txtCenterToCenter}`}>
                  <div className={`${css.txtHeadline1} mb-16`}>Timeline</div>
                  <Timeline
                    mode="alternate"
                    items={[
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="11 November 2023" desc="Registration Deadline" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="2 December 2023" desc="Full Paper Submission Deadline" /> },
                      // { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="29 Nov - 01 Dec 2023" desc="Extended Full Paper Paper Submission Due Date" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="17 January 2024" desc="Finalist Announcement" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="13 February 2024" desc="Presentation Submission" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="17 February 2024" desc="Final Presentation" /> },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 7 --------------------------------- */}

        <div className={`row7 ${css.marginSectionSM} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row7-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dRegistration} alt="Box 3D Registration" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1}`}>Form Registration</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 8 --------------------------------- */}

        <div className={`row8 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row8-col1 ${css.txtCenterToCenter}`}>
                  <div className='hover:animate-bounce'>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScvvSBWVqAcxkWiWybPX0M8A5vqg3TbwMUKVRNDnIQpp5FliQ/viewform?usp=sharing" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 9 --------------------------------- */}

        <div className={`row9 ${css.marginSectionSM} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row9-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dContact} alt="Box 3D Contact" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1}`}>Contact Person</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------- ROW 10 --------------------------------- */}

        <div className={`row10 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout2Column} ${css.txtCenterToCenter} pt-32 pb-16`}>
                <div className={`row10-col1 ${css.widthFull} ${css.marginMobileContact} pl-0 lg:pl-10 xl:pl-16`}>
                  <ContactCard photo={ImgUser1} name="Saffanah Yumna" whatsapp="0821-1420-7030" line="@saffayumna" />
                </div>
                {/* <div className={`row10-col2 ${css.widthFull} pr-0 lg:pr-10 xl:pr-16`}>
                  <ContactCard photo={ImgUser2} name="Name here" whatsapp="08XX-XXXX-XXXX" line="@LINE_username" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default businessCase;
