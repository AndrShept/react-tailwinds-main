import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import { Button } from '../button';

export const MainSection = () => {
  return (
    <section className='w-full flex mt-6 h-screen justify-between  '>
      <div className=' relative text-left mt-12 bg-violet-100 p-3 rounded-md drop-shadow-md mb-4'>
        <h1 className='text-8xl font-medium mt-6 whitespace-pre-line drop-shadow-lg'>{`Make\n remote work`}</h1>
        <p className='text-medium-gray text-lg my-12 whitespace-pre-line  '>
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
        </p>
        <Button isFilled={true}>Learn More</Button>

        <div className='flex justify-around absolute  w-full bottom-1'>
          <Databiz />
          <Audiophile fill='red'/>
          <Meet />
          <Maker />
        </div>
      </div>
      <div className='flex w-2/4 m-10 drop-shadow-lg ' >
        <img src={MenImage} alt="man" />
      </div>
    </section>
  );
};
