import React from 'react';
import Section from './Section';
import { MdCode } from "react-icons/md";
import Pill from './Pill';

const Skills = () => {

  const skillTitle=["javascript","React","Node.js","Python"," SQL","Git","AWS","Docker"]
  return (
    <div >
       <Section icon={<MdCode />} sectionTitle="Skills" >
        {
          skillTitle.map((title)=><Pill title={title} ></Pill>)
        }
       </Section>
    </div>
  );
}

export default Skills;
