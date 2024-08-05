import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const MyCarousel = () => {
  return (
            <Carousel showArrows={true} >
                <div>
                    <img src="public\flex.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="public\lasagna.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="public\mocha.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="public\abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="public\flex.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="public\hush-naidoo-jade-photography-vdstHslc9VQ-unsplash.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="public\kevin-kelly-PPneSBqfCCU-unsplash.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="public\jeff-covey-UQqe-Jv8eOk-unsplash.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="public\kimbap.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
  )
}

export default MyCarousel