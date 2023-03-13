import React from 'react';
import AttractionToContent from '../../components/sections/attractionToContent';
import AttractionToContentFull from '../../components/sections/attractionToContentFull';
import CustomerOpinion from '../../components/sections/customerOpinion';
import ArticlesContainer from '../../components/articles/articlesContainer';

const Home = () => {
    return (
        <>
            <div className='container'>
                <AttractionToContent />
            </div>
            <div className='bg--grey spacer__pt--lg'>
                <div className='container'>
                    <ArticlesContainer />
                </div>
            </div>
            <AttractionToContentFull />
            <CustomerOpinion />
        </>
    );
}

export default Home;