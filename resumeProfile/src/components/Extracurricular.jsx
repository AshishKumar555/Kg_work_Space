import React from 'react';
import { GiRibbonMedal } from "react-icons/gi";
import Section from './Section';

const Extracurricular = () => {
  return (
    <div>
      <Section icon={<GiRibbonMedal />} sectionTitle="Extracurricular Activities">
        <ul className='list-disc ml-5 list-inside'>
          <li>Member of the university chess club</li>
          <li>3<sup>rd</sup>rank in class XII</li>
          <li>1<sup>st</sup> rank in class X</li>
        </ul>
      </Section>
    </div>
  );
}

export default Extracurricular;
