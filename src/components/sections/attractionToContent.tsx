import React, { useEffect, useRef } from "react";
import MeetingImage from "../../assets/images/meeting.jpg";
import useImage from "../../hooks/useImage";

const AttractionToContent = () => {
    const { imageToSideScreen } = useImage();
    const imageBlockRef = useRef(null);
    const imageParentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleImageToSideScreen);
        handleImageToSideScreen();
    }, []);

    const handleImageToSideScreen = () => {
        if (!imageBlockRef.current || !containerRef.current || !imageParentRef.current) return;
        imageToSideScreen(imageBlockRef.current, imageParentRef.current, containerRef.current, 'left');
    };

    return (
        <>
            <section ref={containerRef} className="grid grid__half grid__gap--lg">
                <div ref={imageParentRef}>
                    <div ref={imageBlockRef} className="image__wrapper image__side-screen image__side-screen--left">
                        <img className="image__radius--bottom--right--lg" src={MeetingImage} alt="Meeting"/>
                    </div>
                </div>
                <div className="flex section__attraction-to-content spacer__pb--xxl spacer__pt--xl">
                    <div className="line__separator line__separator--gradient--normal spacer__mb--sm"></div>
                    <h3 className="text--bold text--lg spacer__pb--md">You’re in good hands</h3>
                    <p className="text--light text-sm spacer__pb--md">Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                    <button className="button__primary button__primary--primary">Learn more</button>
                </div>
            </section>
        </>
    );
}

export default AttractionToContent;