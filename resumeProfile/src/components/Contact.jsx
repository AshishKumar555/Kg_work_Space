import React from 'react';
import Section from './Section';
import { FiGlobe } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <Section icon={<FiGlobe />} sectionTitle="Contact & Social Media">
        <ul className='list-disc ml-5 list-inside'>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Section>
    </div>
  );
}

export default Contact;
