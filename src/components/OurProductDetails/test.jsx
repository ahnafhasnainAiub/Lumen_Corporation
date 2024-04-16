import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import img1 from './pexels-david-bartus-297933.jpg';
import img2 from './pexels-los-muertos-crew-8030173.jpg';
import img3 from './pexels-thirdman-8483487.jpg';
import img4 from './pexels-mart-production-7679438.jpg';

const ProductRangeSlider = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto py-10">
                <Splide
                    aria-label="My Favorite Images"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    options={{
                        width: "100%",
                        height: "24rem"
                    }}
                >
                    <SplideSlide>
                        <img className='' src={img1} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={img2} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={img3} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src={img4} alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default ProductRangeSlider