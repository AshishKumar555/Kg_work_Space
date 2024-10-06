import React from 'react';
import passportimage from '../assets/image.jpg'

const Header = () => {
  return (
    <div>
        <header className='bg-blue-600 text-white rounded-xl p-10 flex justify-between items-center'>
            <div>
                <div className='font-bold text-3xl'>Ashish Kumar Maurya</div>
                <div className='text-2xl'>Full Stack Developer</div>
            </div>
            <img className='w-28 h-28 rounded-full' src={passportimage} alt="" />
        </header>

    </div>
  );
}

export default Header;
