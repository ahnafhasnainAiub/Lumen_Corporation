import React from 'react';

function Contact() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-1/2'>
        <div className='p-4'>
          <h2>Contact Us</h2>
          <input type="text" className='w-full my-2 p-2 border border-gray-300 rounded' placeholder='Enter your Name' />
          <input type="text" className='w-full my-2 p-2 border border-gray-300 rounded' placeholder='Enter your Email' />
          <input type="text" className='w-full my-2 p-2 border border-gray-300 rounded' placeholder='Enter your Phone' />
          <textarea className="w-full my-2 p-2 border border-gray-300 rounded" placeholder="Message" rows="5"></textarea>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Send</button>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='p-4'>
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.0474865621845!2d90.37422302628654!3d23.8721103093924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40ed3c3c18b%3A0x9521b4915bd8ee05!2sUttara%20Sector-12%20Society!5e0!3m2!1sen!2sbd!4v1700551842504!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='Our Location on Google Maps'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
