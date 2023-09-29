import { Image } from 'antd';
import { Img3dAbout2, ImgFact1, ImgFact2, ImgDivParticipantMapBig, Box3dAbout, Box3dTheme, ImgDivGallery1, ImgDivGallery2, ImgDivGallery3, ImgDivGallery4, ImgDivGallery5, ImgDivGallery6, ImgDivGallery7, ImgDivGallery8 } from "../../assets/images/index.tsx";
import Gallery from '../carousel/gallery-without-transition.tsx';
import css from "../../assets/styles/general";
import "./index.less";

const index = () => {
  // Image for Carousel
  const carouselItems = [
    { image: ImgDivGallery1 },
    { image: ImgDivGallery2 },
    { image: ImgDivGallery3 },
    { image: ImgDivGallery4 },
    { image: ImgDivGallery5 },
    { image: ImgDivGallery6 },
    { image: ImgDivGallery7 },
    { image: ImgDivGallery8 },
  ];

  return (
    <>
      <div id="page-about" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionMD} ${css.widthFull} ${css.paddingToNavbarHNormal2}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.orderSwitch} ${css.txtCenterToStart}`}>
                  <div className={`${css.imgCenterToStart} mb-12`}>
                    <img src={Box3dAbout} alt="Box 3D About" className="animate-swing"/>
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>About IChEC</div>
                  <div className={`${css.txtBody} mb-6`}>Indonesia Chemical Engineering Challenge (IChEC) is the largest annual event organized by Chemical Engineering Students Association in Bandung Institute of Technology, in collaboration with Badan Koordinasi Kegiatan Mahasiswa Teknik Kimia Indonesia (BKKMTKI) and Chemical Engineering Department of ITB.</div>
                  <div className={`${css.txtBody} mb-6`}>IChEC is the oldest chemical engineering-based competition with a different theme every year. Previously, IChEC was known as Lomba Rancang Pabrik Tingkat Nasional (LRPTN) and Regional Future Energy Challenge (RFEC). Furthermore, since 2013, IChEC was not only opened for students from Indonesia, it was also opened for students from Southeast Asia.</div>
                  <div className={`${css.txtBody}`}>This year, IChEC 2024 is coming with the grand theme entitled “Enhancing Energy Transition to Obtain Net Zero Emission Towards Green Economy.” By bringing out this theme, we intend to successfully innovate greener process as a form of contribution for Indonesia.</div>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.marginMobileSM}`}>
                  <img src={Img3dAbout2} alt="Image 3D About" className={`${css.imgReponsive} -mt-12 hover:animate-gelatine`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div className={`row2 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} ${css.verticalCenter}`}>
                <div className={`row2-col1 ${css.widthFull} ${css.marginMobileSM}`}>
                  <img src={ImgFact1} alt="Image Fact 1" className={`${css.imgReponsive} -mt-20 hover:animate-gelatine`} />
                </div>
                <div className={`row2-col2 ${css.widthFull}`}>
                  <img src={ImgFact2} alt="Image Fact 2" className={`${css.imgReponsive} -mt-20 hover:animate-gelatine`} />
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
                <div className={`row3-col1 ${css.widthFull}`}>
                  <Image src={ImgDivParticipantMapBig} alt="Image Participant Map" className={`${css.imgReponsive}`} />
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
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dTheme} alt="Box 3D Theme" className="animate-swing"/>
                  </div>
                  <div className={`${css.txtHeadline1} mb-6`}>IChEC 2024 theme</div>
                  <div className={`${css.txtDisplay2}`}>Enhancing Energy Transition to Obtain Net Zero Emission Towards Green Economy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 5 --------------------------------- */}

        <div className={`row5 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer} box-here`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row5-col1 ${css.txtCenterToCenter} `}>
                  <Gallery items={carouselItems} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default index;
