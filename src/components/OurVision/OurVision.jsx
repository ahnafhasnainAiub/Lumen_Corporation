import img from "./image5.jpg"
const OurVison = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 justify-center items-center" style={{marginBottom:"100px"}}>

                <div data-aos="zoom-in-right" className="" style={{ border: "2px", marginLeft: '30px', marginRight: '30px'}}>
                    <img className='w-full mx-auto mb-20px rounded-tl-3xl rounded-tr-3xl rounded-br-3xl shadow-lg' src={img} alt="" />
                </div>

                <div className="text-center">
                    <h1 data-aos="zoom-in" style={{ color: '#39A78E',  fontFamily: 'Outfit, sans-serif', fontSize: '28px'  }} className='text-3xl md:text-5xl font-extrabold'>Our Vision</h1>
                    <p className='mt-5 text-justify' style={{ marginRight: '30px', marginLeft: '30px'}}>
                        To support and to service Bangladeshi textiles and footwear industry with necessary equipment and knowledge to ensure the sectors become competitive globally.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OurVison