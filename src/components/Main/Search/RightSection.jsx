import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

import { Context } from "../../../context";

import { fetchData } from "../../../utils";

const RightSection = ({ step, navigate }) => {
  const { state, dispatch } = useContext(Context);

  const {
    condition,
    postalCode,
    country,
    gender,
    age,
    totalResults,
  } = state;

  const fetch = async (page) => {
    dispatch({ type: "DATA_FETCH_START" });
    const { status, studies, totalResults } = await fetchData(
      condition,
      postalCode,
      country,
      1,
      gender,
      age,
    );
    if (status === 200) {
      dispatch({
        type: "DATA_FETCH_SUCCESS",
        payload: { studies, totalResults },
      });
      navigate(`${page}`);
    } else {
      dispatch({
        type: "DATA_FETCH_FAILURE",
        payload: { studies, totalResults },
      });
    }
  };

  const handleClick = () => {
    const nextPage = Number(step) + 1;
    navigate(`${nextPage}`);
  };

  const handleKey = e => {
    if (e.key === "Enter") {
      const nextPage = Number(step) + 1;
      navigate(`${nextPage}`);
    } 
  };

  const handleLastKey = e => {
    if (e.key === "Enter") {
      const nextPage = Number(step) + 1;
      fetch(nextPage);
    } 
  }

  const handleLastClick = () => {
    const nextPage = Number(step) + 1;
    fetch(nextPage);
  }

  return (
    <Right>
      {step === "1" && condition && postalCode && country ? (
        <NavArrow
          onClick={() => handleClick()}
          onKeyPress={e => handleKey(e)}
          tabIndex="0"
        />
      ) : null}
      {step === "2" && gender ? (
        <NavArrow
          onClick={() => handleClick()}
          onKeyPress={e => handleKey(e)}
          tabIndex="0"
        />
      ) : null}
      {step === "3" && gender ? (
        <NavArrow
          onClick={() => handleLastClick()}
          onKeyPress={e => handleLastKey(e)}
          tabIndex="0"
        />
      ) : null}
    </Right>
  );
};

export default RightSection;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 30vh;
`;

const NavArrow = styled(FaAngleRight)`
  display: flex;
  font-size: 4rem;
  margin: 0 auto;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  color: #969797;
  transition: color 300ms ease;
  position: absolute;
  bottom: 20px;

  &:hover {
    color: #1ad9c4;
  }
`;

RightSection.propTypes = {
  step: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
