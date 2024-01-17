
import { Link } from 'react-router-dom';
import { IconArrowScroll, Box3dSeminar, Box3dDate, ImgUser2, ImgDivLogoBigGS, ImgDivGSeminarDadan, ImgDivGSeminarEniya, ImgDivGSeminarMaulana, ImgDivGSeminarEduward, ImgDivGSeminarEdi, ImgDivGSeminarCSRasendra } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import SpeakerCardContainer from './speaker-card-container.tsx'
import SpeakerCard from './speaker-card.tsx'
import ContactCard from './contact-card.tsx'
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
                  <div className={`${css.txtBody} mb-6`}>Experience the ultimate intellectual extravaganza at IChEC 2024 Grand Seminar! Brace yourself for three power-packed sessions that revolve around the most pressing global challenges - energy transition, net-zero emission, and the flourishing green economy.</div>
                  <div className={`${css.txtBody} mb-12`}>Engage with luminaries in the field and tap into their wealth of knowledge during the interactive sessions. Your curiosity will find its well-deserved haven through QnA and discussions with our esteemed keynote speakers and other awe-inspiring speakers. </div>
                  <a href="#scroll-target" className={`${css.imgCenterToStart}`}>
                    <img src={IconArrowScroll} alt="Icon Arrow Scroll" className="bounce cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                  </a>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.marginMobileXL}`}>
                  <img src={ImgDivLogoBigGS} alt="Image Placeholder" className={`${css.imgReponsive} hover:animate-gelatine`} />
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
                  <div className={`${css.txtDisplay2} mb-6`}>Sunday, 18th February 2024</div>
                  <div className={`${css.txtBodyBold} text-lg mb-3`}>9.30 AM – 3.25 PM (GMT+7) • Hybrid</div>
                  <div className={`${css.txtBody}`}>Ibis Budget Bandung Asia Afrika (Jl. Asia Afrika No.128, Paledang, Kec. Lengkong, Kota Bandung, Jawa Barat, 40261)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------- ROW BUTTON ------------------------------- */}

        <div className={`row-button ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row-button-col1 ${css.txtCenterToCenter}`}>
                  <div className='hover:animate-bounce'>
                    <Link to="https://forms.gle/GuuNYFxLW4RPCr4J9" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 3 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="Keynote Session Theme" subtitle="Managing the Shift to New and Renewable Resources in Indonesia's Energy Landscape">
          <SpeakerCard photo={ImgDivGSeminarDadan} theme="Keynote Speaker" name="🧔 Dr. Ir. Dadan Kusdiana, M.Sc" position="💼 General Secretary of Ministry for Energy and Mineral Resources (ESDM)" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 4 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="Special Seasson 1" subtitle="Harnessing Hydrogen: Pioneering Sustainable Growth and Innovation for the Future ">
          <SpeakerCard photo={ImgDivGSeminarEniya} theme="Speaker 1" name="👩 Prof. Dr. Eng. Eniya Listiani Dewi" position="💼 Professor of Electrochemical Process at National Research and Innovation Agency (BRIN)" description="" />
          <SpeakerCard photo={ImgDivGSeminarMaulana} theme="Speaker 2" name="🧔 Maulana Himawan" position="💼 Large Industries Business Line Director" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="Special Seasson 2" subtitle="Waste-Energy Synergy: Energizing Tomorrow through Waste-to-Power Innovations in the Industrial Sectors">
          <SpeakerCard photo={ImgDivGSeminarEduward} theme="Speaker 1" name="🧔 Eduward Ginting, M.Sc." position="💼 Chief Operations Officer PT Riau Andalan Pulp and Paper (APRIL)" description="" />
          <SpeakerCard photo={ImgDivGSeminarEdi} theme="Speaker 2" name="🧔 Edi Sarwono" position="💼 Plant General Manager of PT Solusi Bangun Indonesia (SBI) Cilacap" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 6 --------------------------------- */}

        <SpeakerCardContainer link="#" linkClass="hidden" title="" subtitle="">
          <SpeakerCard photo={ImgDivGSeminarCSRasendracl} theme="Moderator" name="🧔 Dr. Carolus Borromeus Rasrendra, S.T., M.T." position="💼 Lecturer and Researcher at Chemical Engineering ITB" description="" />
        </SpeakerCardContainer>

        {/* ---------------------------------- ROW 7 --------------------------------- */}

        <div className={`row7 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout2Column} ${css.txtCenterToCenter} pt-32 pb-16`}>
                <div className={`row7-col1 ${css.widthFull} ${css.marginMobileContact} pl-0 lg:pl-10 xl:pl-16`}>
                  <ContactCard photo={ImgUser2} name="Xandra" whatsapp="0812-1954-4340" />
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