import { Link } from 'react-router-dom';
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./style.less";

const speakerCardContainer = (props: { children: any; link: any; linkClass: any; title: any, subtitle: any}) => {
  function playSoundPop() {
    new Audio(soundPop).play();
  }
  function playSoundClick() {
    new Audio(soundClick).play();
  }

  return (
    <div id="component-card-speaker-container" className={`row1 ${css.marginSectionMD} ${css.widthFull}`}>
      <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
        <div className={`${css.contentContainer}`}>
          <div className={`${css.layout1Column}`}>
            <div className={`row1-col1 ${css.txtCenterToCenter} pt-16 pb-20 box-here`}>
              <div className={`${css.txtHeadline1} mb-8`}>{props.title}</div>
              <div className={`${css.txtBodyBoldBrown} mb-16`}>{props.subtitle}</div>
              <div className="space-y-12">
                {props.children}
              </div>
              <div className={`${props.linkClass} mt-24 hover:animate-bounce`}>
                <Link to={props.link} className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Register Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default speakerCardContainer