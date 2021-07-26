import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'images/falling-cards-book.jpg',
    'images/falling-cards-general.jpg',
    'images/multiple-daily-planner-mint.jpg',
    'images/multiple-notepad-pastel-pink.jpg',
    'images/single-notepad-pastel-purple.jpg',
    'images/single-weekly-planner.jpeg',
];

const Slideshow = () => {
    return (
        <div className="p-grid p-m-2">
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slideshow;