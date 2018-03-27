import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const SimpleSlider = ({ movies }) => (

    <Slider {...settings}>
      {movies.map(obj =>
        <div className="col-12"
          key={obj.name}
        // onClick={() => setSelectedBank(bank)}
        >
          <img className="img-fluid"
            src={obj.image}
            alt={obj.name}
          />

        </div>
      )}
    </Slider>

    )
    export default SimpleSlider;