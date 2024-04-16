import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ProductRangeSlider = () => {
    return (
        <div>
            <div className="" style={{
                        display: "flex",
                        //justifyContent: "center",
                        alignItems: "center",
                        border: "2px",
                        boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.3)", // box shadow
                        marginLeft: "30px",

                    }}>
                <Splide
                    aria-label="My Favorite Images">
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2012/07/29/21/42/dresses-53319_640.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' style={{display:"flex", alignItems: "center"}} src="https://cdn.pixabay.com/photo/2015/09/09/22/04/jeans-933682_640.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2018/08/24/02/00/yarn-3627212_640.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='' src="https://cdn.pixabay.com/photo/2022/09/19/18/45/thread-7466259_640.jpg" alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default ProductRangeSlider

/*import { Splide, SplideSlide } from '@splidejs/react-splide';
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
                        border: "2px",
                        boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)" // box shadow
                        
                        
                    }}
                        options={{
                            width: "100%",
                            height: "24rem",
                            border: "2px solid #000", // border
                            borderRadius: "25px", // border radius
                            
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

export default ProductRangeSlider*/