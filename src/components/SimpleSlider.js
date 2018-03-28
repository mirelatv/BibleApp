import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };

  const SimpleSlider = ({ movies }) => (

    <Slider {...settings} className=''>
      {movies.map(obj =>
        <div className=" "
          key={obj.name}
        // onClick={() => setSelectedBank(bank)}
        >
          <img className=""
            src={obj.image}
            alt={obj.name}
          />

        </div>
      )}
    </Slider>

    )
    export default SimpleSlider;