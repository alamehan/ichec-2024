import css from "../../assets/styles/general";
import "./style.less";

const speakerCard = (props: { photo: any; theme: any, name: any; position: any; description: any; }) => {
  return (
    <div id="component-card-speaker" className={`${css.cardSpeakerStyle}`}>
      <img src={props.photo} alt="Image Speaker" className={`${css.imgReponsiveNoCenter} ${css.iconAndTextKeepIconSize}`} />
      <div className={`${css.txtCenterToStart}`}>
        <div className={`${css.txtBodyBoldBlue} mb-4`}>{props.theme}</div>
        <div className={`${css.txtBodyBlack} mb-1`}>{props.name}</div>
        <div className={`${css.txtBodyBlack} mb-4`}>{props.position}</div>
        <div className={`${css.txtBodyDark}`}>{props.description}</div>
      </div>
    </div>
  )
}

export default speakerCard