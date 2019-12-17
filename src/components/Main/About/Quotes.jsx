import React from 'react';
import styled from 'styled-components';

const Quotes = () => {
  const data = [
    {
      quote: 'If we can compress the time it takes to enroll a trial, we can get medicines to patients much faster.',
      name: 'Jeff Kasher',
      title: 'former VP of Clinical Innovation and Implementation at Eli Lilly'
    },
    {
      quote: 'What if we could put millions of people in the right clinical study at the right place and time?  People who\'ve had long term diseases or pain, with no therapy or treatment.  We would save countless lives and reduce untold suffering.',
      name: 'Stephen Goldner',
      title: 'Founder and CEO of CureLauncher'
    },
    {
      quote: 'The number one challenge to everyone in the industry is patient recruitment.  As technologists, one way we can immediately combat this problem is by making it easier for patients to join a clinical trial.',
      name: 'Willie Muehlhausen',
      title: 'Head of Innovation at CRO ICON'
    },
    {
      quote: 'The solution to this problem must maintain an openness around data, and must be broadly accessible to both patients and app developers.',
      name: 'Craig Lipset',
      title: 'Head of Clinical Innovation at Pfizer'
    }
  ]

  return (
    <QuotesStyle>
      {data.map(item => (
        <>
          <h2>"{item.quote}"</h2>
          <p>- {item.name}, {item.title}</p>
        </>
      ))}
    </QuotesStyle>
  )
}

export default Quotes;

const QuotesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 40px auto;
  line-height: 3;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem; 
    margin-bottom: 2rem;
  }

`