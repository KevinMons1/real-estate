import React from 'react';
import BedIcon from '../../assets/icons/bed.svg';
import ShowerIcon from '../../assets/icons/shower.svg';
import SizeIcon from '../../assets/icons/size.svg';

const Card = () => {
    return (
        <article className='card__container card__default'>
            <div className='card__header image__wrapper'>
                <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg' alt='house'/>
            </div>
            <div className='card__content'>
                <p className='card__content__title'>Malto House</p>
            </div>
            <div className='card__footer grid grid__three grid__three--fix'>
                <div className='card__footer__content flex flex--center'>
                    <img src={BedIcon} alt='bed'/>
                    <span className='card__footer__content__number'>4</span>
                </div>
                <div className='card__footer__content flex flex--center'>
                    <img src={ShowerIcon} alt='shower'/>
                    <span className='card__footer__content__number'>2</span>
                </div>
                <div className='card__footer__content flex flex--center'>
                    <img src={SizeIcon} alt='size'/>
                    <span className='card__footer__content__number'>125m²</span>
                </div>
            </div>
        </article>
    )
}

export default Card;