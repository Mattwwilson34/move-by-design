import './Home.css';
import React from 'react';
import Section from '../../Components/Section';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import Brain from '../../Icons/brain-solid.svg';
import Bolt from '../../Icons/bolt-solid.svg';

const Home = () => {
  return (
    <div className='Home'>
      <Section
        className='Home__Hero__Section'
        height='90vh'
        width='100vw'
        color='rgb(40, 44, 52)'>
        <div className='Home__Hero__Section__Img'>Hero Image Here</div>
        <div className='Home__Hero__Section__TextContainer'>
          <h1>PERSONAL TRAINING IN DURHAM, NC</h1>
          <p>
            Helping athletes reach their full potential with bespoke training
            focused on strength, power, and functional symmetry
          </p>
          <Button label='START HERE' />
        </div>
      </Section>
      <Section
        className='Home__FirstStatement__Section'
        height='100vh'
        width='100vw'
        color='rgb(40, 44, 52)'>
        <div className='Home__FirstStatement__Section__TextContainer'>
          <h2>IT'S TIME TO REACH YOUR FULL POTENTIAL</h2>
          <p>
            Every athletic and fitness journey is unique. While you grow your
            athletic performance, mobility, strength, and power you will face a
            platter of challenges tailored to you and you alone. Your training
            should match that specificity.
          </p>
          <p>
            Click here to learn more about our mission and training philosophy
            here at Move By Design.
          </p>
          <Button label='ABOUT US' />
        </div>
      </Section>
      <Section
        className='Home__Cards__Section'
        height='100vh'
        width='100vw'
        color='#507dbc'>
        <Card
          className='Home__Cards__Section__Card'
          img={Bolt}
          header={'MEET YOUR PERSONAL TRAINER'}>
          <p className='Home__Cards__Section__Card__Details'>
            Dean Culver is a certified personal trainer and professional athlete
            with over 5 years experience helping athletes in a multitude of
            arenas recognize and reach their full athletic potential.
          </p>
        </Card>
        <Card
          className='Home__Cards__Section__Card'
          img={Brain}
          header={'1-ON-1 PERSONAL TRAINING'}>
          <p className='Home__Cards__Section__Card__Details'>
            All of Move by Design's programs and packages consist of one on one
            training sessions with currated sport specific periodization focused
            on helping you perform your best when it matters most.
          </p>
        </Card>
      </Section>
    </div>
  );
};

export default Home;
