import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ({movies}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Slider {...settings} className="col">
            {movies.estrenos.map(element => (
              <figure className="col" key={element.id} {...element}>
                <img src={element.image} alt={element.name}  />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SimpleSlider;