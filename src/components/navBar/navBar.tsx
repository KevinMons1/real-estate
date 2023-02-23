import React from "react";
import LogoRealEstate from "../../assets/logos/logo-realEstate.svg";

const NavBar = () => {
    return (
        <nav className="nav-main">
            <div className="container">
                <div className="nav-main__content">
                    <div className="nav-main__left">
                        <img src={LogoRealEstate} alt="Logo of company"/>
                    </div>
                    <div className="nav-main__right">
                        <ul className="list--reset nav-main__list">
                            <li className="nav-main__item">
                                <a href="#" className="nav-main__link link--reset">Home</a>
                            </li>
                            <li className="nav-main__item">
                                <a href="#" className="nav-main__link link--reset">Nav Link</a>
                            </li>
                            <li className="nav-main__item">
                                <a href="#" className="nav-main__link link--reset">Nav Link</a>
                            </li>
                            <li className="nav-main__item">
                                <a href="#" className="nav-main__link link--reset">Nav Link</a>
                            </li>
                            <li className="nav-main__item--button">
                                <a href="#" className="link--reset button__primary button__primary--secondary">Word with us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;