import React from 'react';
import { LiaUserSolid } from "react-icons/lia";
import Section from './Section';

const AboutMe = () => {
  return (
   <>
     <Section icon={<LiaUserSolid />} sectionTitle='About Me'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eaque dolorum impedit mollitia ipsum, in vitae, laboriosam debitis, vel quam suscipit animi quisquam. Distinctio corrupti necessitatibus maxime aliquam quo magnam.</p>
     </Section>
   </>
  );
}

export default AboutMe;
