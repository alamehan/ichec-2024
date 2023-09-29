import { Link } from 'react-router-dom';
import { Image } from 'antd';
// import { IconArrowScroll, Img3dHero, Img3dAbout, Img3dCompEvent, Box3dAbout, Box3dTheme, Box3dTestimonials, Box3dSponsors, Box3dPartners, LogoPlaceholderSponsor, OrnamentDashLine, ImgDivTotalPrize, ImgDivParticipantMap, ImgDivLogoBC, ImgDivLogoPD, ImgDivLogoES, ImgDivLogoPS, ImgDivLogoWS, ImgDivLogoGS, ImgDivLogoAN, ImgDivTestiBC, ImgDivTestiPD, ImgDivTestiES, ImgDivTestiPS } from "../../assets/images/index.tsx";
import { IconArrowScroll, Img3dHero, Img3dAbout, Img3dCompEvent, Box3dAbout, Box3dTheme, Box3dTestimonials, OrnamentDashLine, ImgDivTotalPrize, ImgDivParticipantMap, ImgDivLogoBC, ImgDivLogoPD, ImgDivLogoES, ImgDivLogoPS, ImgDivLogoWS, ImgDivLogoGS, ImgDivLogoAN, ImgDivTestiBC, ImgDivTestiPD, ImgDivTestiES, ImgDivTestiPS } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
// import Carousel from '../carousel/carousel-with-transition.tsx'; // ⚠️ Buka file dan baca catatannya ⚠️
import Carousel from '../carousel/carousel-without-transition.tsx'; // ⚠️ Kalau mau aman pakai ini saja ⚠️
import css from "../../assets/styles/general";
import "./index.less";

const index = () => {
  // Image for Carousel
  const carouselItems = [
    { image: ImgDivTestiBC, text_team: "Champion of Business Case", text_winner: "PUK ITB", text_quote: "With this opportunity, We had the experience of visiting the renewable potential in Indonesia. This knowledge profilerated when We did extensive research on IChEC. We wish the best for the whole committee and the subsequent team for the next IChEC event!" },
    { image: ImgDivTestiPD, text_team: "Champion of Plant Design", text_winner: "Kleeluc LAKIK", text_quote: "IChEC 2023 is going well as a place to compete and meet various finalists in Indonesia. This opportunity is an extraordinary experience to be able to contribute and become a winner in a Plant Design competition. Apart from that, this competition also provides a platform to get feedback from judges who are experts in their fields, thus helping us to develop." },
    { image: ImgDivTestiES, text_team: "Champion of Essay:", text_winner: "Agrifish", text_quote: "We felt our hearts pounding and our spirits burning throughout IChEC 2023 competition. This was the moment where all our hardwork and dedication was put to the test. However, with extraordinary teamwork, we were able to overcome every obstacle with confidence. Whether or not this competition is a success depends on the outcome, but we have learned so much from the process. We learned about teamwork, perseverance, creativity in solving problems, and of course, about the true meaning of competition. This experience will always remain in our memories and become the foundation for achieving greater achievements in the future." },
    { image: ImgDivTestiPS, text_team: "Champion of Problem Solving", text_winner: "DEA ITB", text_quote: "IChEC 2023 has surely been an extraordinary journey! Reflecting on our remarkable experience throughout the competition, we are thrilled to share that the experience has been nothing short of transformative. The knowledge we gained in problem-solving has proven to be invaluable; from dissecting the challenge, exploring unconventional approaches, and sculpting solutions that resonate with the ever-evolving landscape of the industry. We also became better at working together as a team. Undoubtedly, IChEC has left an unforgettable mark of journey, so don't miss the chance to join!" },
  ];

  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

  return (
    <>
      <div id="page-home" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionMD} ${css.widthFull} ${css.paddingToNavbarHScreen} relative overflow-hidden`}>
          {/* relative dan overflow-hidden di atas dibutuhkan untuk menangani ornament dash line yang sebagiannya keluar dari layar*/}
          <img src={OrnamentDashLine} alt="Ornament Dash Line" className="absolute top-[-100px] xxl:top-[-250px] right-[-200px] animate-rotate" />
          <div className={`${css.maxWidth} ${css.verticalCenter} h-screen`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.orderSwitch} ${css.txtCenterToStart}`}>
                  <div className={`${css.txtHeadline2} mb-6`}>Welcome to</div>
                  <div className={`${css.txtDisplay1} mb-6`}>IChEC 2024</div>
                  <div className={`${css.txtDisplay3} mb-12`}>Indonesia Chemical <br></br>Engineering Challenge 2024</div>
                  <div className={`${css.txtHeadline2} mb-2`}>#EnhanceOurEnergy</div>
                  <div className={`${css.txtHeadline2} mb-12`}>#AdaptingForTheBetter</div>
                  <a href="#scroll-target" className={`${css.imgCenterToStart}`}>
                    <img src={IconArrowScroll} alt="Icon Arrow Scroll" className="bounce cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                  </a>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.marginMobileXL}`}>
                  <img src={Img3dHero} alt="Image 3D Hero" className={`${css.imgReponsive} hover:animate-gelatine`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div id="scroll-target"></div>

        <div className={`row2 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row2-col2 ${css.widthFull} ${css.marginMobileMD}`}>
                  <img src={Img3dAbout} alt="Image 3D About" className={`${css.imgReponsive} -mt-12 hover:animate-gelatine`} />
                </div>
                <div className={`row2-col1 ${css.widthFull} ${css.txtCenterToStart}`}>
                  <div className={`${css.imgCenterToStart} mb-12`}>
                    <img src={Box3dAbout} alt="Box 3D About" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>About IChEC</div>
                  <div className={`${css.txtBody} mb-16`}>Indonesia Chemical Engineering Challenge 2024 is the biggest event of the year held by Chemical Engineering Students Association in Bandung Institute of Technology. Consists of several competitions and seminars, the event is brought to you in collaboration with.... </div>
                  <div className='mt-24 hover:animate-bounce'>
                    <Link to="/about" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>More About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 3 --------------------------------- */}

        <div className={`row3 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row3-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dTheme} alt="Box 3D Theme" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>IChEC 2024 theme</div>
                  <div className={`${css.txtDisplay2}`}>Enhancing Energy Transition to Obtain Net Zero Emission Towards Green Economy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 4 --------------------------------- */}

        <div className={`row4 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row4-col2 ${css.widthFull} ${css.marginMobileSM} px-0 lg:px-6`}>
                  <img src={ImgDivTotalPrize} alt="Image Total Prize" className={`${css.imgReponsive}`} />
                </div>
                <div className={`row4-col1 ${css.widthFull} px-0 lg:px-6`}>
                  <Image src={ImgDivParticipantMap} alt="Image Participant Map" className={`${css.imgReponsive}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <div className={`row5 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit min-h-[728px] max-h-[1233px] lg:h-screen my-16 xxl:my-0`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row5-col1 ${css.widthFull} ${css.orderSwitch} ${css.txtCenterToStart}`}>
                  <div className={`${css.txtHeadline1White} mb-8`}>Competitions</div>
                  <div className={`${css.logoListsLeft} gap-6 mb-12`}>
                    <Link to="business-case" ><img src={ImgDivLogoBC} alt="Business Case" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                    <Link to="plant-design" ><img src={ImgDivLogoPD} alt="Plan Design" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                    <Link to="essay" ><img src={ImgDivLogoES} alt="Essay" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                    <Link to="problem-solving" ><img src={ImgDivLogoPS} alt="Problem Solving" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                  </div>
                  <div className={`${css.txtHeadline1White} mb-8`}>Events</div>
                  <div className={`${css.logoListsLeft} gap-6 mb-12`}>
                    <Link to="workshop" ><img src={ImgDivLogoWS} alt="Workshop" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                    <Link to="grand-seminar" ><img src={ImgDivLogoGS} alt="Grand Seminar" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                    <Link to="awarding-night" ><img src={ImgDivLogoAN} alt="Awarding Night" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
                  </div>
                </div>
                <div className={`row5-col2 ${css.widthFull}`}>
                  <img src={Img3dCompEvent} alt="Image 3D Competitions & Events" className={`${css.imgReponsive} -mt-6 hover:animate-gelatine`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 6 --------------------------------- */}

        <div className={`row6 ${css.marginSectionSM} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row6-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dTestimonials} alt="Box 3D Testimonials" className="animate-swing" />
                  </div>
                  <div className={`${css.txtHeadline1}`}>Testimonials</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 7 --------------------------------- */}

        <div className={`row7 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row7-col1 ${css.txtCenterToCenter} `}>
                  <Carousel items={carouselItems} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 8 --------------------------------- */}

        {/* <div className={`row8 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter} gap-6`}>
                <div className={`row8-col1 ${css.widthFull} ${css.txtCenterToStart} ${css.marginMobileSM}`}>
                  <div className={`${css.iconAndTextLeft} mb-12`}>
                    <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMargin} ${css.iconAndTextKeepIconSize}`}>
                      <img src={Box3dSponsors} alt="Box 3D Sponsors" className="animate-swing" />
                    </div>
                    <div className={`${css.txtHeadline1}`}>Sponsors</div>
                  </div>
                  <div className={`${css.logoListsLeft} list-here gap-4`}>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                  </div>
                </div>
                <div className={`row8-col2 ${css.widthFull} ${css.txtCenterToEnd}`}>
                  <div className={`${css.iconAndTextRight} mb-12`}>
                    <div className={`${css.imgCenterToCenter} ${css.iconAndTextRightMargin} ${css.iconAndTextKeepIconSize}`}>
                      <img src={Box3dPartners} alt="Box 3D Partners" className="animate-swing" />
                    </div>
                    <div className={`${css.txtHeadline1}`}>Media Partners</div>
                  </div>
                  <div className={`${css.logoListsRight} list-here gap-4`}>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                    <div><img src={LogoPlaceholderSponsor} alt="Logo Placeholder" onMouseOver={playSoundPop} onClick={playSoundClick} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </>
  );
};

export default index;
