import ProductRangeSlider from './ProductRangeSlider';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const OurProductDetails = () => {
    const navItems = [
        { title: 'See details', path: '/products' },
      ];
    return (
      
      <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center justify-center max-w-7xl m-auto">
            <div data-aos='zoom-in-left' className="">
                    <ProductRangeSlider />
                </div>
                <div data-aos="zoom-in" className="">
                    <h1 style={{ color: '#39A78E', fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginRight: "30px" }} className='text-3xl md:text-5xl text-center font-extrabold'>Our Product Details</h1>
        <div className='' style={{display:'flex',justifyContent:'center', marginRight: "30px" }}>
        {navItems.map((item) => (
        <Button
          key={item.title}
          color="inherit"
          component={Link}
          to={item.path}
          size='small'
          style={{
            backgroundImage: 'linear-gradient(to right, #4CAF50, #2196F3)',
            color: 'black',
            //border: '1px solid black',
            padding: '7px',
            borderRadius: '10px',
            marginTop: '50px'
          }}        >
          {item.title}
        </Button>
      ))}
        </div>
                </div>
                
            </div>
        </div>

    )
}

export default OurProductDetails