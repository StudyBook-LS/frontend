import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

import { Context } from "../../../context";

import { fetchData } from "../../../utils";

const TentativeResults = ({ step, navigate }) => {
  const { state, dispatch } = useContext(Context);

  const {
    condition,
    postalCode,
    country,
    gender,
    age,
    totalResults: results,
  } = state;

  useEffect(() => {
    const fetch = async () => {
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
      } else {
        dispatch({
          type: "DATA_FETCH_FAILURE",
          payload: { studies, totalResults },
        });
      }
    };
    fetch();
  }, [condition, postalCode, country, gender, age, dispatch]);

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
  return (
    <Right>
      <ResultsHeader>
        {results}
        &nbsp;trials found
      </ResultsHeader>
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
      {step === "3" && condition && postalCode && country && gender && age && (
        <button type="button" onClick={() => navigate("../results/1")}>
          See Results
        </button>
      )}
    </Right>
  );
};

export default TentativeResults;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 30vh;
`;

const ResultsHeader = styled.h2`
  font-size: 2rem;
  padding: 20px 30px 30px;
  border-bottom: 1px solid #d9d9d9;
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

TentativeResults.propTypes = {
  step: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
