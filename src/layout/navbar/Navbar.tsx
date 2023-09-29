/* -------------------------------------------------------------------------- */
/*                   Responsive Navbar built using GPT-4 🤖                   */
/* -------------------------------------------------------------------------- */

/*
⚠️ Source code dibawah ini works 100%, tetapi tidak efisien, karena jika misal
menambah sub menu lagi, maka harus kembali menduplikat useState() dst...
kedepannya cari cara agar source code lebih efisien lagi ⚠️

💡 Future solution: kembali gunakan GPT-4 dengan prompts sebagai berikut:
Pelajari potogan kode berikut. File Navbar.tsx: [copy paste source code here...]
Tulis ulang, dengan sub menu dan drawer menjadi komponen terpisah yang dipanggil
oleh komponen Navbar. Data di oper melalui props dan lainnya yang memang
dibutuhkan. Tulis kode seefisien mungkin, hindari duplikasi 💡
*/

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LogoNavbar } from "../../assets/images/index.tsx";
import { soundPop, soundClick } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./style.less";

const Navbar: React.FC = () => {

  // Play Sound Effect
  function playSoundPop() {
    new Audio(soundPop).play()
  }
  function playSoundClick() {
    new Audio(soundClick).play()
  }

  /* ------------------------------- Declaration ------------------------------ */

  const [isOpen, setIsOpen] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  const submenuButtonRef = useRef<HTMLButtonElement>(null);

  const [showEventsSubMenu, setShowEventsSubMenu] = useState(false);
  const [showMobileEventsSubMenu, setShowMobileEventsSubMenu] = useState(false);
  const eventsSubmenuButtonRef = useRef<HTMLButtonElement>(null);

  const drawerButtonRef = useRef<HTMLButtonElement>(null);

  /* ----------- Submenu tertutup saat user klik di sembarang tempat ---------- */

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (submenuButtonRef.current && submenuButtonRef.current.contains(targetElement)) {
        return;
      }
      if (showSubMenu && !targetElement.closest(".competitions-submenu")) {
        setShowSubMenu(false);
      }
    };
    document.addEventListener("click", closeMenu as any);
    return () => {
      document.removeEventListener("click", closeMenu as any);
    };
  }, [showSubMenu]);

  useEffect(() => {
    const closeEventsMenu = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (eventsSubmenuButtonRef.current && eventsSubmenuButtonRef.current.contains(targetElement)) {
        return;
      }
      if (showEventsSubMenu && !targetElement.closest(".events-submenu")) {
        setShowEventsSubMenu(false);
      }
    };
    document.addEventListener("click", closeEventsMenu as any);
    return () => {
      document.removeEventListener("click", closeEventsMenu as any);
    };
  }, [showEventsSubMenu]);

  /* ----------- Drawer tertutup saat user klik di sembarang tempat ----------- */

  useEffect(() => {
    const closeDrawer = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (drawerButtonRef.current && drawerButtonRef.current.contains(targetElement)) {
        return;
      }

      if (isOpen && !targetElement.closest(".drawer")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDrawer as any);
    return () => {
      document.removeEventListener("click", closeDrawer as any);
    };
  }, [isOpen]);

  /* ------------------------------ Main Section ------------------------------ */

  return (
    <div id="navbar">
      <nav className={`navbar ${css.widthFull} fixed top-0 z-20`}>
        <div className={`${css.maxWidth} ${css.verticalCenter} h-fit`}>
          <div className={`${css.contentContainer}`}>
            <div className={`${css.layoutNavbar} ${css.verticalCenter} px-8 py-3 md:py-4 lg:py-5 glass-effect-3 rounded-b-[24px]`}>
              {/* ------------------------------- Logo disini ------------------------------ */}
              <div className={`navbar-col1`}>
                <Link to="/" className={`${css.txtHeadline1}`}><img src={LogoNavbar} alt="Logo Navbar" onMouseOver={playSoundPop} onClick={playSoundClick} /></Link>
              </div>
              {/* ------------------------------- Menu disini ------------------------------ */}
              <div className={`navbar-col2`}>
                <div className="hidden lg:block">
                  <ul className="flex space-x-0">
                    <li><Link to="/" className={`${css.txtNavbarBold} menu-hover-style`} onMouseOver={playSoundPop} onClick={playSoundClick}>HOME</Link></li>
                    <li><Link to="/about" className={`${css.txtNavbarBold} menu-hover-style`} onMouseOver={playSoundPop} onClick={playSoundClick}>ABOUT</Link></li>
                    <li className="relative group px-3">
                      <button className={`${css.txtNavbarBold}`} ref={submenuButtonRef} onClick={() => { setShowSubMenu(!showSubMenu); playSoundClick(); }} onMouseOver={playSoundPop}>COMPETITIONS</button>
                      {showSubMenu && (
                        <div className="absolute left-[-20px] mt-8 w-[240px] bg-white p-2 rounded-[16px] shadow-lg competitions-submenu">
                          <ul>
                            <li><Link to="business-case" className={`${css.txtNavbar} block px-4 py-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>💼 BUSINESS CASE</Link></li>
                            <li><Link to="plant-design" className={`${css.txtNavbar} block px-4 pb-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>📝 PLANT DESIGN</Link></li>
                            <li><Link to="essay" className={`${css.txtNavbar} block px-4 pb-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>✍️ ESSAY</Link></li>
                            <li><Link to="problem-solving" className={`${css.txtNavbar} block px-4 pb-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>💡 PROBLEM SOLVING</Link></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li className="relative group px-3">
                      <button className={`${css.txtNavbarBold}`} ref={eventsSubmenuButtonRef} onClick={() => { setShowEventsSubMenu(!showEventsSubMenu); playSoundClick(); }} onMouseOver={playSoundPop}>EVENTS</button>
                      {showEventsSubMenu && (
                        <div className="absolute left-[-20px] mt-8 w-[240px] bg-white p-2 rounded-[16px] shadow-lg events-submenu">
                          <ul>
                            <li><Link to="workshop" className={`${css.txtNavbar} block px-4 py-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>📚 WORKSHOP</Link></li>
                            <li><Link to="grand-seminar" className={`${css.txtNavbar} block px-4 pb-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>🎤 GRAND SEMINAR</Link></li>
                            <li><Link to="awarding-night" className={`${css.txtNavbar} block px-4 pb-4`} onMouseOver={playSoundPop} onClick={playSoundClick}>🏆 AWARDING NIGHT</Link></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li><Link to="/merchandise" className={`${css.txtNavbarBold} menu-hover-style`} onMouseOver={playSoundPop} onClick={playSoundClick}>MERCHANDISE</Link></li>
                    <li><Link to="/faq" className={`${css.txtNavbarBold} menu-hover-style`} onMouseOver={playSoundPop} onClick={playSoundClick}>FAQ</Link></li>
                  </ul>
                </div>
                {/* --------------------------- Menu mobile disini --------------------------- */}
                <div className="lg:hidden">
                  <button onClick={() => setIsOpen(!isOpen)} ref={drawerButtonRef} className="text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ------------------------ Drawer menu mobile disini ----------------------- */}
      {isOpen && (
        <aside className="bg-blue-950 fixed top-0 left-0 h-full w-[320px] p-4 transition-transform transform drawer z-30">
          <button className="text-white pl-2 mt-2" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link to="/" className={`${css.txtHeadline1}`}><img src={LogoNavbar} alt="Logo Navbar" onMouseOver={playSoundPop} onClick={playSoundClick} className="ml-4 mt-6 mb-10" /></Link>
          <ul>
            <li className="mb-2"><Link to="/" className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li className="mb-2"><Link to="/about" className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li className="mb-2 relative">
              <button className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => { setShowMobileSubMenu(!showMobileSubMenu); setShowMobileEventsSubMenu(false); }}>COMPETITIONS</button>
              {showMobileSubMenu && (
                <ul className="pl-2 mt-4">
                  <li className="mb-3"><Link to="business-case" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>💼 BUSINESS CASE</Link></li>
                  <li className="mb-3"><Link to="plant-design" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>📝 PLANT DESIGN</Link></li>
                  <li className="mb-3"><Link to="essay" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>✍️ ESSAY</Link></li>
                  <li className="mb-3"><Link to="problem-solving" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>💡 PROBLEM SOLVING</Link></li>
                </ul>
              )}
            </li>
            <li className="mb-2 relative">
              <button className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => { setShowMobileEventsSubMenu(!showMobileEventsSubMenu); setShowMobileSubMenu(false); }}>EVENTS</button>
              {showMobileEventsSubMenu && (
                <ul className="pl-2 mt-4">
                  <li className="mb-3"><Link to="workshop" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>📚 WORKSHOP</Link></li>
                  <li className="mb-3"><Link to="grand-seminar" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>🎤 GRAND SEMINAR</Link></li>
                  <li className="mb-3"><Link to="awarding-night" className={`${css.txtBodyWhite} block pl-6 mb-6`} onClick={() => setIsOpen(false)}>🏆 AWARDING NIGHT</Link></li>
                </ul>
              )}
            </li>
            <li className="mb-2"><Link to="/merchandise" className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => setIsOpen(false)}>MERCHANDISE</Link></li>
            <li className="mb-2"><Link to="/faq" className={`${css.txtBodyWhite} block pl-4 mb-6`} onClick={() => setIsOpen(false)}>FAQ</Link></li>
          </ul>
        </aside>
      )}

      {/* --------------------- Backdrop saat drawer menu aktif -------------------- */}
      <div className={isOpen ? "fixed inset-0 bg-brand_blue opacity-75 transition-opacity z-[25]" : "hidden"} onClick={() => setIsOpen(false)}></div>
    </div>
  );
};

export default Navbar;
