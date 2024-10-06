import React from 'react';
import { FiBriefcase } from "react-icons/fi";
import Section from './Section';
const Projects = () => {
  return (
    <div>
        <Section icon={<FiBriefcase />} sectionTitle="Projects"> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat aut velit ipsa rerum similique doloribus! Eaque suscipit dolorem repellendus delectus consequuntur! Distinctio reprehenderit asperiores aut atque recusandae, obcaecati quisquam?</p>
        </Section>
    </div>
  );
}

export default Projects;
