import React, { useEffect, useRef } from "react";
import MeetingImage from "../../assets/images/meeting.jpg";
import useImage from "../../hooks/useImage";

const Home = () => {
    const { imageToSideScreen } = useImage();
    const imageBlockRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleImageToSideScreen);
        handleImageToSideScreen();
    }, []);

    const handleImageToSideScreen = () => {
        if (!imageBlockRef.current) return;
        imageToSideScreen(imageBlockRef.current, 'left');
    };

    return (
        <>
            <section className="grid grid--half">
                <div>
                   <div ref={imageBlockRef} className="image__wrapper">
                       <img className="image__radius--bottom--right--lg" src={MeetingImage} alt="Meeting"/>
                   </div>
                </div>
                <div className="flex section__home__about">
                    <div className="line__separator line__separator--gradient--normal spacer__m--bottom--sm"></div>
                    <h3 className="text--bold text--lg spacer__p--bottom--md">You’re in good hands</h3>
                    <p className="text--light text-sm spacer__p--bottom--md">Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                    <button className="button__primary button__primary--primary">Learn more</button>
                </div>
            </section>
        </>
    );
}

export default Home;