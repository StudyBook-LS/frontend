import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaAngleLeft } from "react-icons/fa";

const Progress = ({ step, navigate }) => {
  const progressCircle = useRef(null);

  const setProgress = (percent, circumference) => {
    return circumference - (percent / 100) * circumference;
  };

  useEffect(() => {
    const progress = (Number(step) / 4) * 100;
    const circle = progressCircle.current;
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = setProgress(progress, circumference);
    circle.style.strokeDashoffset = offset;
  }, [step]);

  const handleClick = () => {
    const prevPage = Number(step) - 1;
    navigate(`${prevPage}`);
  };

  const handleKey = e => {
    if (e.key === "Enter") {
      const prevPage = Number(step) - 1;
      navigate(`${prevPage}`);
    }
  };

  return (
    <Left>
      <ProgressCircle>
        <circle r="49" cx="60" cy="60" />
        <circle
          r="48"
          cx="60"
          cy="60"
          strokeDashoffset={48 * 2 * Math.PI}
          stroke="#1ad9c4"
          strokeWidth="5px"
          ref={progressCircle}
        />
      </ProgressCircle>
      <p className='progress'>{(Number(step) / 4) * 100}%</p>
      {step !== "1" ? (
        <NavArrow
          onClick={() => handleClick()}
          onKeyPress={e => handleKey(e)}
          tabIndex="0"
        />
      ) : null}
    </Left>
  );
};

export default Progress;

const Left = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 30vh;

  .progress {
    position: absolute;
    top: 50px;
    font-size: 19px;
    color: #969797;
  }
`;

const ProgressCircle = styled.svg`
  width: 120px;
  height: 120px;

  circle {
    &:first-of-type {
      fill: transparent;
      stroke: #d9d9d9;
      stroke-width: 1px;
    }
    &:last-of-type {
      fill: transparent;
      transition: stroke-dashoffset 350ms;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
  }
`;

const NavArrow = styled(FaAngleLeft)`
  display: flex;
  font-size: 4rem;
  margin: 0 auto;
  align-items: center;
  cursor: pointer;
  color: #969797;
  transition: color 300ms ease;
  position: absolute;
  bottom: 20px;

  &:hover {
    color: #1ad9c4;
  }
`;

Progress.propTypes = {
  step: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
