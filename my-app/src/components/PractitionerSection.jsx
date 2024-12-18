import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TeamCard from './TeamCard';

const teamData = [
  {
    imgSrc: '/images/abede.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/tadulako.png', '/images/ipb.svg'],
    name: 'Abd. Rahman',
    position: 'CEO & CTO at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Machine Learning, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg','/images/jupyter.svg',
        '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/ade.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Scientist.png',
    rightLogo: ['/images/tadulako.png', '/images/akardaya.png'],
    name: 'Ade Hendrawan Krisdianto',
    position: 'Consultant Data Analysis at EraNusaData',
    company: 'Working at PT Akar Daya Palu',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/sas.svg', '/images/tableau.png'
    ],
  },
  {
    imgSrc: '/images/agung.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Designer.png',
    rightLogo: ['/images/tadulako.png'],
    name: 'Agung Rifaldo',
    position: 'Consultant Data Analysis at EraNusaData',
    company: 'Desainer & Marketing at EraNusaData',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/sas.svg'
    ],
  },
  {
    imgSrc: '/images/meisya.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/andalas.svg', '/images/ipb.svg'],
    name: 'Meisyatul Ilma',
    position: 'Business Development, Strategy at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg', 
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/windy.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uinriau.png','/images/ipb.svg'],
    name: 'Windy Ayu Pratiwi',
    position: 'Database Management at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/jabbar.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Developer.png',
    rightLogo: ['/images/posindonesia.png', '/images/multipolar.webp'],
    name: 'Abd. Jabbar',
    position: 'Consultan IT Solution at EraNusaData',
    company: 'Working at PT Multipolar Technology Tbk Jakarta',
    pastCompanies: ['/images/python.svg', '/images/co.svg', '/images/jupyter.svg', '/images/sql.svg', '/images/pgadmin.png', 
        '/images/vscode.svg','/images/mongodb.svg', '/images/postman.svg'
    ],
  },
  {
    imgSrc: '/images/morina.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/tadulako.png', '/images/its.svg'],
    name: 'Morina Fattan',
    position: 'Researcher at EraNusaData',
    company: 'Data Analyst & Lecturer at Universitas Tadulako',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg', 
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg'
    ],
  },
  {
    imgSrc: '/images/monica.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uii.png', '/images/ipb.svg'],
    name: 'Monica',
    position: 'Database Management at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/yus.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/ipb.svg'],
    name: 'Uswatun Hasanah',
    position: 'Database Management at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/dwi.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/sriwijaya.png','/images/ipb.svg'],
    name: 'Dwi Fitrianti',
    position: 'Database Management at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  {
    imgSrc: '/images/caca.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/ipb.svg'],
    name: 'Siti Hafsah',
    position: 'Database Management at EraNusaData, Student Magister IPB University',
    company: 'Data Scientist, Predictive Modeler, Researcher',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg',
        '/images/matlab.svg', '/images/sas.svg', '/images/shiny.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg'
    ],
  },
  
];
const PractitionerSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center">Top Practitioners</h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="practitioner-swiper"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                imgSrc={member.imgSrc}
                name={member.name}
                position={member.position}
                company={member.company}
                pastCompanies={member.pastCompanies}
                mainLogo={member.mainLogo}
                roleLogo={member.roleLogo}
                rightLogo={member.rightLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PractitionerSection;
