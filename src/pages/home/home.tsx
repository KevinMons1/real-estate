import React from "react";
import AttractionToContent from "../../components/sections/attractionToContent";
import ArticlesContainer from "../../components/articles/articlesContainer";

const Home = () => {
    return (
        <>
            <div className="container">
                <AttractionToContent />
            </div>
            <div className="section__home__articles--offset bg--grey spacer__pt--lg">
                <div className="container">
                    <ArticlesContainer />
                </div>
            </div>
        </>
    );
}

export default Home;