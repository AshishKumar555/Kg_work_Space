import React from 'react';
import Section from './Section';
import { FiHeart } from "react-icons/fi";

const Hobbies = () => {
  return (
    <div>
      <Section icon={<FiHeart />} sectionTitle="Hobbies & Interest"> 
      <div>
        <ul className='list-disc ml-5 list-inside' >
          <li>Photography</li>
          <li>Hiking</li>
          <li>Watching movie</li>
          <li>Travelling</li>
        </ul>

      </div>
      </Section>
    </div>
  );
}

export default Hobbies;
