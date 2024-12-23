import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./Header";
import Hero from "./Hero";
import About from "./About"
import OurTeam from './OurTeam';
import Skill from "./Skill"
import Work from './Work';
import PractitionerSection from './PractitionerSection';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
  
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });
  
  
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <OurTeam />
        <Skill />
        <Work />
        <PractitionerSection />
        <Review />
        <Contact />
      </main>
      <Footer />
      </ReactLenis>
  );
};

export default App;
