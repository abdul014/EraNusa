import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */

import SkillCard from './SkillCard';


const designTools = [
  { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design Tool' },
  { imgSrc: '/images/powerpoint.png', label: 'PowerPoint', desc: 'Presentation Design' },
  { imgSrc: '/images/diagramsnet.png', label: 'draw.io', desc: 'Flowchart & Algorithm Design' },
  { imgSrc: '/images/canva.png', label: 'Canva', desc: 'Graphic Design Tool' }
];

const developmentTools = [
  { imgSrc: '/images/github.svg', label: 'GitHub', desc: 'Version Control' },
  { imgSrc: '/images/vscode.svg', label: 'Visual Studio Code', desc: 'Code Editor' },
  { imgSrc: '/images/vercel.svg', label: 'Vercel/Netlify', desc: 'Deployment' },
  { imgSrc: '/images/docker.svg', label: 'Docker', desc: 'Containerization' },
  { imgSrc: '/images/postman.svg', label: 'Postman', desc: 'API Testing' },
  { imgSrc: '/images/pgadmin.png', label: 'pgAdmin4', desc: 'PostgreSQL Management' },
  { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
  { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
  { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
  { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
  { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
];

const dataAnalysisTools = [
  { imgSrc: '/images/python.svg', label: 'Python', desc: 'Programming Language' },
  { imgSrc: '/images/jupyter.svg', label: 'Jupyter Notebook', desc: 'Data Analysis' },
  { imgSrc: '/images/co.svg', label: 'Google Colab', desc: 'Collaborative ML' },
  { imgSrc: '/images/powerbi.svg', label: 'PowerBI', desc: 'Data Visualization' },
  { imgSrc: '/images/spss.png', label: 'SPSS', desc: 'Statistical Analysis' },
  { imgSrc: '/images/matlab.svg', label: 'MATLAB', desc: 'Numerical Computing' },
  { imgSrc: '/images/rstudio.png', label: 'R-Studio', desc: 'Statistical Analysis' },
  { imgSrc: '/images/sql.svg', label: 'SQL', desc: 'Database Query' },
  { imgSrc: '/images/shiny.svg', label: 'Shiny', desc: 'Interactive Web Apps' },
  { imgSrc: '/images/sas.svg', label: 'SAS', desc: 'Statistical Analysis' },
  { imgSrc: '/images/excel.png', label: 'Excel', desc: 'Data Analysis & Visualization' },
  { imgSrc: '/images/tableau.png', label: 'Tableau', desc: 'Data Visualization' }
];

const Skill = () => {
  return (
    <section className='section'>
      <div className='container'>

        {/* Section: Essential Tools */}
        <h2 className='headline-2 reveal-up'>Essential Tools We Use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50-ch] reveal-up'>
          Berbagai tools dan teknologi unggulan yang kami gunakan untuk mengubah data menjadi wawasan bermakna dan solusi nyata. 
          Dengan analisis mendalam, metode data sains mutakhir, serta aplikasi berbasis machine learning yang inovatif untuk mendukung masa depan yang lebih cerdas dan berdaya saing.
        </p>

        {/* Data Analysis Tools */}
        <h3 className='text-xl font-semibold mt-10 mb-4 reveal-up'>Data Analysis Tools</h3>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {dataAnalysisTools.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>

        {/* Development Tools */}
        <h3 className='text-xl font-semibold mt-10 mb-4 reveal-up'>Development Tools</h3>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {developmentTools.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>

        {/* Design Tools */}
        <h3 className='text-xl font-semibold mt-10 mb-4 reveal-up'>Design Tools</h3>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {designTools.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;