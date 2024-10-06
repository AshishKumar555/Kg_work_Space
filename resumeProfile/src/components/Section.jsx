import React from 'react';


const Section = ({icon,children,sectionTitle}) => {
  return (
    <div className='m-4 ml-5 mr-5 mx-auto '>
         <div className='font-bold text-black text-xl mb-5 flex pt-3 gap-3 items-center m-2'>
            {icon}
            <div>{sectionTitle}</div>
         </div>
         <div>
         {children}
         </div>
    </div>
  );
}

export default Section;
