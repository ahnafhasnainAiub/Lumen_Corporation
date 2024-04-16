import React from 'react';
import '../Services/Services.css'

const Services = () => {
    return (
        <div className='services'>
          <h1>Our Services</h1>
          
          <div className='cen'>
            <div className='service'>
             <i className='fas-fa-anchor'></i>
             <h2>Offers</h2>
             <p>Competitive offers from reliable spinners</p>
            </div>
            <div className='service'>
             <i className='fas fa-apple-alt'></i>
             <h2>Quality</h2>
             <p>Selection of right suppliers ensuring right quality.</p>
            </div>
            <div className='service'>
             <i className='fab fa-angellist'></i>
             <h2>Updates</h2>
             <p>Market Information and regular updates for taking better decisons.</p>
            </div>
            <div className='service'>
             <i className='fas fa-archway'></i>
             <h2>Easy Access</h2>
             <p>Online login for easy access to all customers on their orders, shipment and sampling status.</p>
            </div>
            <div className='service'>
             <i className='fas-fa-angry'></i>
             <h2>Check Up</h2>
             <p>Physical inspection of goods before shipment.</p>
             
            </div>
            <div className='service'>
             <i className=''></i>
             <h2>Development</h2>
             <p>New product developments and strong sampling support.</p>
            </div>
            <div className='service'>
             <i className=''></i>
             <h2>Quick Support</h2>
             <p>Complete control on movement of goods and instant information to the customers.</p>
            </div>
            

          </div>
        </div>
    );
};

export default Services;

