import React from "react";
import NavBar from "../navBar/navBar";

const Header = () => {
    return (
        <header className="header__main">
            <NavBar />
            <div className="container header__main__content--wrapper">
                <div className="header__main__content">
                    <h1 className="text--xl text--bold">Beautiful homes made for you</h1>
                    <p className="text--sm text--light">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
                </div>
            </div>
       </header>
    );
};

export default Header;