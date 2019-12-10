import React, { useContext} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Context } from "../../../context";


const TentativeResults = ({ navigate }) => {
  const { state, dispatch } = useContext(Context);

  const { totalResults } = state;

  return (
    <ResultsStyle>
      <ResultsHeader>
        {totalResults}
        &nbsp;trials found
      </ResultsHeader>
      <StyledButton type="button" onClick={() => navigate("/results/1")}>
        See Results
      </StyledButton>
    </ResultsStyle>
  );
};

export default TentativeResults;

const ResultsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ResultsHeader = styled.h2`
  font-size: 2rem;
  padding: 20px 30px 20px 30px;
  border-bottom: 1px solid #d9d9d9;
  width: 400px;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 18%;
  min-width: 120px;
  font-size: 1.5rem;
  border-radius: 20px;
  background: #223547;
  padding: 10px;
  color: #fff;
  transition: all 300ms ease;
  margin-top: 2rem;

  @media (max-width: 800px) {
    position: static;
    width: 100%;
  }

  @media (max-width: 400px) {
  }

  &:hover {
    background: #1ad9c4;
  }
`

TentativeResults.propTypes = {
  navigate: PropTypes.func.isRequired,
};
