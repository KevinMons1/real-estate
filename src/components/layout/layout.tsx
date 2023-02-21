import React from "react";

type PropsType = {
    children: JSX.Element
}

const Layout = ({ children }: PropsType) => {
    return (
        <>
            <div className="container">
                {children}
            </div>
        </>
    );
};

export default Layout;