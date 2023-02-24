import React, { useEffect, useRef } from "react";
import MeetingImage from "../../assets/images/meeting.jpg";
import useImage from "../../hooks/useImage";

const Home = () => {
    const { imageToSideScreen } = useImage();
    const imageBlockRef = useRef(null);

    useEffect(() => {
        console.log(imageBlockRef.current)
        if (!imageBlockRef.current) return;
        imageToSideScreen(imageBlockRef.current, 'left');
    }, []);

    return (
        <>
            <section className="section grid grid--half grid--gap--lg">
                <div>
                   <div ref={imageBlockRef} className="image__wrapper--corner--right">
                       <img src={MeetingImage} alt="Meeting"/>
                   </div>
                </div>
                <div className="flex flex--center">
                    <div className="line__separator--gradient--normal">
                        <h3>You’re in good hands</h3>
                        <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                        <button className="button__primary--primary">Learn more</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;