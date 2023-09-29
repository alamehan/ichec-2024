import { IconContactWhatsapp, IconContactLine } from "../../assets/images/index.tsx";
import { soundBoing } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";

const contactCard = (props: { photo: any; name: any; whatsapp: any; line: any; }) => {
  function playSoundBoing() {
    new Audio(soundBoing).play();
  }

  return (
    <div className={`${css.cardContactStyle}`}>
      <img src={props.photo} alt="Image User" className={`${css.imgReponsive} hover:animate-gelatine mb-6 mt-[-112px]`} onMouseOver={playSoundBoing} />
      <div className={`${css.txtHeadline1} mb-6`}>{props.name}</div>
      <div className="flex flex-col">
        <div className={`${css.iconAndTextLeft} mb-3`}>
          <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMarginLite} ${css.iconAndTextKeepIconSize}`}>
            <img src={IconContactWhatsapp} alt="Icon Whatsapp" />
          </div>
          <div className={`${css.txtBodyBold}`}>{props.whatsapp}</div>
        </div>
        <div className={`${css.iconAndTextLeft}`}>
          <div className={`${css.imgCenterToCenter} ${css.iconAndTextLeftMarginLite} ${css.iconAndTextKeepIconSize}`}>
            <img src={IconContactLine} alt="Icon Line" />
          </div>
          <div className={`${css.txtBodyBold}`}>{props.line}</div>
        </div>
      </div>
    </div>
  )
}

export default contactCard