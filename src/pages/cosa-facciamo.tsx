import React from 'react';
import CosaHeroFramerComponent from '../framer/cosa-hero';
import CosaMissionFramerComponent from '../framer/cosa-mission';
import CosaStepsFramerComponent from '../framer/cosa-steps';
import CosaCtaFramerComponent from '../framer/cosa-cta';
import { cosa } from "../config/website";


const Contact: React.FC = () => {
  return (
    <div>
      <CosaHeroFramerComponent.Responsive className='!w-full'
      heroTitle={cosa.text.hero}
      heroSubheading={cosa.text.sub}
      />
      <CosaMissionFramerComponent.Responsive className='!w-full'
      tag={cosa.text.tag}
      title={cosa.text.MissionTitle}
      subheading={cosa.text.subheading}
      />
      <CosaStepsFramerComponent.Responsive className='!w-full'
      tag={cosa.text.stepstag}
      title={cosa.text.stepstitle}
      section1Tag={cosa.text.Stag1}
      section1Subtag={cosa.text.Subtag1}
      section1Title={cosa.text.Stitle1}
      section2Tag={cosa.text.Stag2}
      section2Subtag={cosa.text.Subtag1}
      section2Title={cosa.text.Stitle2}
      section3Tag={cosa.text.Stag3}
      section3Subtag={cosa.text.Subtag1}
      section3Title={cosa.text.Stitle3}
      />
      <CosaCtaFramerComponent.Responsive className='!w-full'/>
    </div>
  );
};

export default Contact;
