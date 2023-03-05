import React from "react";
import NavBar from "../navBar/navBar";

const Header = () => {
    return (
        <header className="header--100 spacer__pb--xl">
           <div className="header__main">
               <NavBar />
               <div className="container header__main__content--wrapper">
                   <div className="header__main__content">
                       <h1 className="text--xl text--bold spacer__pb--md">Beautiful homes made for you</h1>
                       <p className="text--sm text--light">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
                   </div>
               </div>
               <div className="container header__main__box header__main__box--white">
                   <button className="button__primary button__primary--white">See all listings</button>
               </div>
           </div>
       </header>
    );
};

export default Header;