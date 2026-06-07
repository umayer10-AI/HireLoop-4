import Banner1 from '@/component/Banner1';
import Banner2 from '@/component/Banner2';
import Section1 from '@/component/Section1';
import Section2 from '@/component/Section2';
import Section3 from '@/component/Section3';
import Section4 from '@/component/Section4';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="bg-[url('../../public/globe.png')] bg-cover bg-center bg-no-repeat">
        <Banner1></Banner1>
        <Banner2></Banner2>
        <Section1></Section1>
      </div>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
};

export default page;