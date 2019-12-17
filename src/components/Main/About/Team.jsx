import React from 'react';
import styled from 'styled-components';

import connor from '../../../assets/img/connor.png';
import jacob from '../../../assets/img/jacob.png';
import kevin from '../../../assets/img/kevin.png';
import penny from '../../../assets/img/penny.jpg';
import Detail from './Detail';

const Team = () => {

  const data = [
    {
      name: 'Connor Hearty',
      github: 'https://github.com/connorpheraty',
      portfolio: 'http://connorheraty.com/',
      role: 'Data Scientist',
      description: '',
      image: connor
    },
    {
      name: 'Jacob Bartlett',
      portfolio: 'http://jkb.work/',
      role: 'UX Designer',
      description: '',
      image: jacob
    },
    {
      name: 'Kevin Smith',
      portfolio: 'https://www.iridigital.com/',
      github: 'https://github.com/keveightysev',
      linkedIn: 'https://www.linkedin.com/in/keveightysev',
      role: 'Front-end architect',
      description: '',
      image: kevin
    },
    {
      name: 'Penny Lee',
      portfolio: 'https://mochibot.netlify.com/',
      github: 'https://github.com/mochibot',
      role: 'Front-end architect',
      description: '',
      image: penny
    }
  ]

  return (
    <TeamStyle>
      <h2>Our Team</h2>
      <div>
        {data.map(item => <Detail key={item.name} person={item}/>)}
      </div>
    </TeamStyle>
  )
}

export default Team;

const TeamStyle = styled.div`
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin: 20px; 
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }
`