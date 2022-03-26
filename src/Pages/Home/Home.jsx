import './Home.css';
import React from 'react';
import Section from '../../Components/Section';

const Home = () => {
  return (
    <div className='Home'>
      <Section
        className='Home__Hero__Section'
        height='90vh'
        width='100vw'
        color='rgb(40, 44, 52)'>
        <div>HERO</div>
      </Section>
    </div>
  );
};

export default Home;
