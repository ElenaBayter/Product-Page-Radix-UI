import React, { useRef } from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

    return (
      <div className="image-slider" style={{width: '100%'}}>
        <Slider  ref={slider => {sliderRef = slider}} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className='Image' src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <div className='buttons-slider_box'>
            <button className="button-slider" onClick={previous}>Previous</button>
            <button className="button-slider" onClick={next}>Next</button>
        </div>
      </div>
    );
};
export default ImageSlider;  