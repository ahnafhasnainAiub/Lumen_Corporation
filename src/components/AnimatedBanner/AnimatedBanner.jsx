import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AnimatedBanner = () => {
    const navItems = [
        { title: 'Contact Us', path: '/contact' },
      ];
    const backgroundUrl = 'https://images.pexels.com/photos/4614107/pexels-photo-4614107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    const animationSequence = [
        'Want to Buy YARN',
        1000,
        'Want to Buy Fabric',
        1000,
        'Want to Buy Garment',
        1000,
    ];

    const animationStyle = {
        fontSize: '3rem',
        color: 'white',
    };

    return (
        <div className="w-full">
          <div className="hero min-h-fit" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${backgroundUrl})`
          }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content flex justify-center items-center">
              <div className="max-w-2xl">
                <h1>
                  <TypeAnimation sequence={animationSequence} speed={50} style={animationStyle} repeat={Infinity} />
                </h1>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    //color="inherit"
                    component={Link}
                    to={item.path}
                    style={{ backgroundColor: '#39A78E' , color:'white', marginBottom: '10px' }}
                  >
                    {item.title}
                    
                  </Button>
                ))}
                {/* <button className="btn btn-primary my-5">Contact Us</button> */}
              </div>
            </div>
          </div>
        </div>
      );
      };
      
export default AnimatedBanner;
