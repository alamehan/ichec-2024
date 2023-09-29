import { useState } from 'react';
import { Box3dFaq } from "../../assets/images/index.tsx";
import Accordion from './accordion.tsx'
import css from "../../assets/styles/general";
import "./index.less";

const index = () => {
  // Setup for Accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const data = [
    { title: "If I’m not a chemical engineering student, can I join the competition?", content: "It depends on the competition. \n PS: At least 1 (one) of the participants is majoring in the Process Engineering Department. \n PD: The competition is open for Process Engineering students only. \n BC: It is recommended to have at least 1 member studying in the process-related, environmental or life science major. \n ES: Any major is eligible to join." },
    { title: "What are the documents that we need to prepare?", content: "For registration process, you have to prepare a zip file consisting of: \n Scan of student ID of each participant (.jpeg/.jpg/.png) \n Formal photos of each participant (.jpeg/.jpg/.png) \n Twibbon screenshot of each participant (.jpeg/.jpg/.png) \n Proof of your registration payment (.jpeg/.jpg/.png). Please also prepare a Statement Letter from the major or faculty department stating each participant is currently enrolled as a student (for all competitions) and Official Letter from the faculty/lecturer stating his/her role as supervisor for the team (for Plant Design and Problem Solving Competition only). These documents would be mandatory if your team advances to the full paper stage." },
    { title: "When will I get the competition guidebook?", content: "The competition guidebook that consists of the case will be sent maximum 3x24 hours after you submit the registration form." },
    { title: "Am I allowed to join the competition without a lecturer as advisor or supervisor?", content: "The competitions that require a lecturer as advisor or supervisor are Problem Solving and Plant Design Competition only. You will be asked to submit a statement letter if you join one of those competitions if your team advances to the next stage." },
    { title: "What if at the final stage, I have graduated?", content: "Participants must be registered as undergraduate or vocational program (diploma) students throughout the whole competition timeline (November 2022 - April 2023). If you are no longer an undergraduate or diploma student, you will no longer be able to compete." },
    { title: "May a team consist of members from different batches, different universities, and different countries?", content: "Yes, it is allowed." },
    { title: "Am I allowed to join more than one competition?", content: "No, you can only join one competition in IChEC 2023." },
    { title: "Is it eligible for the previous year's finalists and/or winners to participate again in IChEC 2023?", content: "Yes, you are definitely eligible to participate as long as your team fulfills the T&R that can be found in each invitation booklet." },
    { title: "Will I receive a certificate if I do not win?", content: "All participants who submit their work for the first stage will get the certificate." },
    { title: "What if some form of plagiarism is detected in any of my submissions?", content: "You will be disqualified from the competition." },
    { title: "Can I join individually?", content: "Only Essay Competition allows you to participate individually. For further and more detailed information, please kindly check the invitation booklet for each competition." },
    { title: "I am currently joining the Indonesian Government Program Merdeka Belajar Kampus Merdeka. Would it be possible for me to join the competition?", content: "Yes, it is possible." },
  ];

  return (
    <>
      <div id="page-faq" className={`${css.rootPage}`}>

        {/* ---------------------------------- ROW 1 --------------------------------- */}

        <div className={`row1 ${css.marginSectionSM} ${css.widthFull} ${css.paddingToNavbarHNormal2}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row1-col1 ${css.txtCenterToCenter}`}>
                  <div className={`${css.imgCenterToCenter} mb-12`}>
                    <img src={Box3dFaq} alt="Box 3D FAQ" className="animate-swing" />
                  </div>
                  <div className={`${css.txtDisplay2} mb-6`}>Frequently Asked Questions</div>
                  <div className={`${css.txtHeadline1}`}>Find the answer to all of our most frequently asked questions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------- ROW 2 --------------------------------- */}

        <div className={`row2 ${css.marginSectionSM} ${css.widthFull}`}>
          <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
            <div className={`${css.contentContainer}`}>
              <div className={`${css.layout1Column}`}>
                <div className={`row2-col1 ${css.txtCenterToCenter}`}>
                  {data.map((item, index) => (
                    <Accordion key={index} title={item.title} content={item.content} isOpen={openIndex === index} setIsOpen={() => setOpenIndex(openIndex === index ? null : index)} />
                  ))}
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