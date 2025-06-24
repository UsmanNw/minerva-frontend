import React from 'react';
import ContactHeroFramerComponent from '../framer/contact-hero';
import ContactBodyFramerComponent from '../framer/contact-body';

const Contact: React.FC = () => {
  return (
    <div>
      <ContactHeroFramerComponent.Responsive className="!w-full" />
      <ContactBodyFramerComponent.Responsive className="!w-full"
      emailLink1={"mailto:vittorio.ramella@minervadigitalintelligence.com"}
      emailLink2={"mailto:giacomo.cavallini@minervadigitalintelligence.com"}
      telLink1={"tel: +393474120780"}
      telLink2={"tel: +393454722756"}
      />
    </div>
  );
};

export default Contact;
