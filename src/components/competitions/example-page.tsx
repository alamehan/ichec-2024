import { Timeline } from 'antd';
import { IconArrowScroll, IconDotTimeline, ImgPlaceholder4, ImgPlaceholder5, LogoPlaceholderSection, ImgUser1, ImgUser2, Box3dCompetitions, Box3dTimeLeft, Box3dRegistration, Box3dContact, OrnamentDashLine, Box3dTheme } from "../../assets/images/index.tsx";
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
  const targetDate = generateTargetDate(2024, 1, 1, 24); // <- Ubah disini

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
                <div className={`row1-col1 ${css.widthFull}`}>
                  <img src={LogoPlaceholderSection} alt="Image Placeholder" className={`${css.imgReponsive} mb-4 md:mb-12 hover:animate-gelatine`} />
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
                  <div className={`${css.txtBody} max-w-[768px] mx-auto`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
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
                  <div className={`${css.txtDisplay2White} mx-3 lg:mx-6`}>Theme here...</div>
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
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <Countdown targetDate={targetDate} />
                  </div>
                  <div className={`${css.txtHeadline1}`}>Until the registration deadline</div>
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
                  <img src={ImgPlaceholder4} alt="Image Placeholder" className={`${css.imgReponsive}`} />
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
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Early Bid Registration" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Regular Registration" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Submission Due Date" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Paper Submission" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Finalist Announcement" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Final Presentation" /> },
                      { dot: <img src={IconDotTimeline}></img>, children: <TimelineData date="00-00 January 2024" desc="Winner Announcement" /> },
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
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row8-col1 ${css.widthFull}`}>
                  <img src={ImgPlaceholder5} alt="Image Placeholder" className={`${css.imgReponsive}`} />
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
                  <ContactCard photo={ImgUser1} name="Name here" whatsapp="08XX-XXXX-XXXX" line="@LINE_username" />
                </div>
                <div className={`row10-col2 ${css.widthFull} pr-0 lg:pr-10 xl:pr-16`}>
                  <ContactCard photo={ImgUser2} name="Name here" whatsapp="08XX-XXXX-XXXX" line="@LINE_username" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default businessCase;
