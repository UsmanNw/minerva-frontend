import React from 'react';

interface SectionWrapperProps {
  ul: string;
  slug: string;
  name: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ ul, slug, name, children }) => {
  // You can use the ul and slug values here to create a link or perform some other action
  // For example:
  // const href = `/${ul}${slug}`;

  return (
    <div id={slug.replace('#', '')} style={{position: 'relative'}}>
      {children}
    </div>
  );
};

export default SectionWrapper;
