import { Link } from 'react-router-dom';
import { Img3dUpcoming } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./index.less";

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
      <div id="page-upcoming" className={`${css.rootPage}`}>
        <div className={`row1 ${css.marginSectionMD} ${css.widthFull} ${css.paddingToNavbarH404}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column} ${css.verticalCenter}`}>
                <div className={`row1-col1 ${css.widthFull} ${css.txtCenterToCenter}`}>
                  <img src={Img3dUpcoming} alt="Image 3D Upcoming" className={`${css.imgReponsive} -mb-16 animate-gelatine`} />
                  <div className={`${css.txtBody} mb-8`}>Upcoming! Stay tune... 😊</div>
                  <div className="hover:animate-bounce">
                    <Link to="/" className="btn-gradient" onMouseOver={playSoundPop} onClick={playSoundClick}>Back to Homepage</Link>
                  </div>
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
