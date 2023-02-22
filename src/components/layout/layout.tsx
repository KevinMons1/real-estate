import React from "react";
import Header from "../header/header";

type PropsType = {
    children: JSX.Element
}

const Layout = ({ children }: PropsType) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
        </>
    );
};

export default Layout;