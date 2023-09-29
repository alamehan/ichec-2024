
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { Box3dMerchandise, ImgProduct, IconGifts } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./index.less";

/* ---------------------------- CUSTOM COMPONENT ---------------------------- */
function ProductCard(props: { image: any; name: any; price: any; }) {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <div className="flex flex-col">
      <div className='hover-style'>
        <Image src={props.image} alt="Image Product" className={`${css.imgReponsiveNoCenter} ${css.iconAndTextKeepIconSize}`} onMouseOver={playSoundPop} onClick={playSoundClick} />
      </div>
      <div className={`${css.iconAndTextLeft} mx-auto mt-6 mb-6`}>
        <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMarginLite} ${css.iconAndTextKeepIconSize}`}>
          <img src={IconGifts} alt="Icon Gifts" />
        </div>
        <div className={`${css.txtBodyBoldBlue}`}>{props.name}</div>
      </div>
      <div className='bg-slate-100 py-3 rounded-[12px]'>
        <div className={`${css.txtHeadline2Linear}`}>{props.price}</div>
      </div>
    </div>
  )
}
/* -------------------------------------------------------------------------- */


const index = () => {
  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

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
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                    <ProductCard image={ImgProduct} name="Name here..." price="Rp 999.999" />
                  </div>
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
                    <Link to="#" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Get Yours Here</Link>
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

export default index