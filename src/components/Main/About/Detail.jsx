import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFolder } from "react-icons/fa";

const Detail = ({ person }) => {
  return (
    <DetailStyle>
      <img src={person.image} alt={person.name}/>
      <div className='icons'>
        {person.portfolio && (
          <a href={person.portfolio} target='_blank' rel='noopener noreferrer' title='Portfolio'>
            <span className="hidden">Portfolio</span>
            <FaFolder />
          </a>
        )}
        {person.github && (
          <a href={person.github} target='_blank' rel='noopener noreferrer' title='Github'>
            <span className="hidden">Github</span>
            <FaGithub />
          </a>
        )}
        {person.linkedIn && (
          <a href={person.linkedIn} target='_blank' rel='noopener noreferrer' title='LinkedIn'>
            <span className="hidden">Github</span>
            <FaLinkedin />
          </a>
        )}
      </div>
      <h3>{person.name}</h3>
      <p>{person.role}</p>
      <p>{person.description}</p>
    </DetailStyle>
  )
} 

export default Detail;

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 80px;

  img {
    width: 150px;
    border-radius: 50%;
  }

  h3 {
    font-weight: 500;
    font-size: 1.8rem; 
  }

  p {
    font-weight: 500;
    font-size: 1.5rem; 
    margin: 1.5rem 0;
  }

  .icons {
    margin: 1.5rem 0
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    a {
      color: #3f3f3f;
      text-decoration: none;
      transition: all 300ms ease;
      margin: 0 18px
  
      &:hover {
        color: #1ad9c4;
      }
  
      svg {
        font-size: 2rem;
        color: #1ad9c4;
        transition: all 300ms ease;
  
        &:hover {
          color: #3f3f3f;
        }
      }
    }
  }
  
`