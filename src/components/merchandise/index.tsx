// import { Link } from "react-router-dom"
import { Image } from "antd"
import { Box3dMerchandise, IconGifts, ImgMerCalendar, ImgMerHandFan, ImgMerKeychain, ImgMerMug, ImgMerNotebookA6Front, ImgMerNotebookA6Back, ImgMerSticker, ImgMerTopi1, ImgMerTopi2 } from "../../assets/images/index.tsx"
import { soundPop, soundClick } from "../../assets/sounds/index.tsx"
import css from "../../assets/styles/general"
import "./index.less"

/* ---------------------------- CUSTOM COMPONENT ---------------------------- */
function ProductCard(props: { image: any; name: any; price: any }) {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

  return (
    <div className="flex flex-col">
      <div className="hover-style">
        <Image src={props.image} alt="Image Product" width={240} className={`${css.imgReponsiveNoCenter} ${css.iconAndTextKeepIconSize}`} onMouseOver={playSoundPop} onClick={playSoundClick} />
      </div>
      <div className={`${css.iconAndTextLeft} mx-auto mt-6 mb-6`}>
        <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMarginLite} ${css.iconAndTextKeepIconSize}`}>
          <img src={IconGifts} alt="Icon Gifts" />
        </div>
        <div className={`${css.txtBodyBoldBlue}`}>{props.name}</div>
      </div>
      <div className="bg-slate-100 py-3 rounded-[12px]">
        <div className={`${css.txtHeadline2Linear}`}>{props.price}</div>
      </div>
    </div>
  )
}
/* -------------------------------------------------------------------------- */

/* --------------------------- CUSTOM COMPONENT 2 --------------------------- */
function ProductCardMulti(props: { image1: any; image2: any; name: any; price: any }) {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

  return (
    <div className="flex flex-col">
      <div className="hover-style">
        <Image.PreviewGroup items={[props.image1, props.image2]} >
          <Image src={props.image1} alt="Image Product" width={240} className={`${css.imgReponsiveNoCenter} ${css.iconAndTextKeepIconSize}`} onMouseOver={playSoundPop} onClick={playSoundClick} />
        </Image.PreviewGroup>
      </div>
      <div className={`${css.iconAndTextLeft} mx-auto mt-6 mb-6`}>
        <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMarginLite} ${css.iconAndTextKeepIconSize}`}>
          <img src={IconGifts} alt="Icon Gifts" />
        </div>
        <div className={`${css.txtBodyBoldBlue}`}>{props.name}</div>
      </div>
      <div className="bg-slate-100 py-3 rounded-[12px]">
        <div className={`${css.txtHeadline2Linear}`}>{props.price}</div>
      </div>
    </div>
  )
}
/* -------------------------------------------------------------------------- */

const index = () => {
  // Play Sound Effect
  // function playSoundPop() {
  //   new Audio(soundPop).play()
  // }
  // function playSoundClick() {
  //   new Audio(soundClick).play()
  // }

  return (
    <>
      <div id="page-merchandise" className={`${css.rootPage}`}>
        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionSM} ${css.widthFull} ${css.paddingToNavbarHNormal2}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row1-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dMerchandise} alt="Box 3D Merchandise" className="animate-swing" />
                  </div>
                  <div className={`${css.txtDisplay2} mb-6`}>Merchandise</div>
                  <div className={`${css.txtHeadline1}`}>Get memories from our events.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div className={`row2 ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row2-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.logoListsCenter} gap-12 lg:gap-16 max-w-[960px] mx-auto`}>
                    <ProductCard image={ImgMerCalendar} name="Calendar" price="Rp 45.000" />
                    <ProductCard image={ImgMerHandFan} name="Hand Fan" price="Rp 15.000" />
                    <ProductCard image={ImgMerKeychain} name="Keychain" price="Rp 10.000" />
                    <ProductCard image={ImgMerMug} name="Mug" price="Rp 25.000" />
                    <ProductCardMulti image1={ImgMerNotebookA6Front} image2={ImgMerNotebookA6Back} name="Notebook A6" price="Rp 12.000" />
                    <ProductCard image={ImgMerSticker} name="Sticker" price="Rp 5.000" />
                    <ProductCard image={ImgMerTopi1} name="Topi 1" price="Rp 60.000" />
                    <ProductCard image={ImgMerTopi2} name="Topi 2" price="Rp 60.000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------- ROW BUTTON ------------------------------- */}

        {/* <div className={`row-button ${css.marginSectionMD} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row-button-col1 ${css.txtCenterToCenter}`}>
                  <div className="hover:animate-bounce">
                    <Link to="#" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>
                      Get Yours Here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default index
