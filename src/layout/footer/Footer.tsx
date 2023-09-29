import { LogoFooter, Box3dEmail, Box3dLocation, IconSosmedInstagram, IconSosmedLine, IconSosmedLinkedin } from "../../assets/images/index";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./style.less";

const Footer = () => {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

  return (
    <>
      <div id="footer" className={`${css.rootPage}`}>
        <div className={`row1 ${css.widthFull} py-24`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout2Column} gap-6`}> { /* Tidak pakai ${css.verticalCenter} */}
                <div className={`row1-col1 ${css.widthFull} ${css.txtCenterToStart} ${css.marginMobileSM}`}>
                  <div className={`flex flex-col h-full justify-between`}> { /* 2. Jadi bisa pakai h-full justifi-between */}
                    <img src={LogoFooter} alt="Logo Footer" className={`${css.imgReponsive} lg:ml-0 mb-12`} />
                    <div className={`${css.txtBodyWhite} mb-12`}>Indonesia Chemical Engineering Challenge 2024 is the biggest event of the year held by Chemical Engineering Students Association in Bandung Institute of Technology.</div>
                    <div className={`${css.txtBodyWhite}`}>© 2023-2024 IChEC - All rights reserved.</div>
                  </div>
                </div>
                <div className={`row1-col2 ${css.widthFull} ${css.txtCenterToEnd}`}>
                  <div className={`inline-flex flex-col h-full justify-between`}> { /* 3. Disini juga pakai h-full justifi-between */}
                    <div className={`${css.iconAndTextRight} mb-6`}>
                      <div className={`${css.imgCenterToCenter} ${css.iconAndTextRightMargin} ${css.iconAndTextKeepIconSize}`}>
                        <img src={Box3dEmail} alt="Box 3D Email" className="animate-swing"/>
                      </div>
                      <a href="mailto:ichec2024@gmail.com" target="_blank">
                        <div className={`${css.txtBodyWhite}`} onMouseOver={playSoundPop} onClick={playSoundClick}>ichec2024@gmail.com</div>
                      </a>
                    </div>
                    <div className={`${css.iconAndTextRight} mb-16`}>
                      <div className={`${css.imgCenterToCenter} ${css.iconAndTextRightMargin} ${css.iconAndTextKeepIconSize}`}>
                        <img src={Box3dLocation} alt="Box 3D Location" className="animate-swing2"/>
                      </div>
                      <a href="https://goo.gl/maps/NGUwko1Wv14BVbDC8" target="_blank">
                        <div className={`${css.txtBodyWhite}`} onMouseOver={playSoundPop} onClick={playSoundClick}>Chemical Engineering Department, Bandung Institute of Technology, Labtek X 2nd Floor, Jl. Ganesha, West Java 40132, Indonesia.</div>
                      </a>
                    </div>
                    <div>
                      <div className={`${css.iconSosmedFooter} list-here`}>
                        <div className={`${css.txtBodyBoldBlue} mb`}>Official Channels</div>
                        <div className="flex flex-row gap-2">
                          <a href="https://www.instagram.com/ichec2024/" target="_blank">
                            <img src={IconSosmedInstagram} alt="Icon Sosmed Instagram" className="w-[52px] cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                          </a>
                          <a href="https://lin.ee/AX4JAft" target="_blank">
                            <img src={IconSosmedLine} alt="Icon Sosmed Line" className="w-[52px] cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                          </a>
                          {/* <a href="#" target="_blank">
                            <img src={IconSosmedTiktok} alt="Icon Sosmed Tiktok" className="w-[52px] cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                          </a> */}
                          <a href="https://www.linkedin.com/company/ichec-itb/" target="_blank">
                            <img src={IconSosmedLinkedin} alt="Icon Sosmed Linkedin" className="w-[52px] cursor-pointer" onMouseOver={playSoundPop} onClick={playSoundClick} />
                          </a>
                        </div>
                      </div>
                    </div>
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

export default Footer