import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import PropTypes from "prop-types";

import Progress from "./Progress";
import TentativeResults from "./TentativeResults";

import TravelDistance from "./TravelDistance";
import Age from "./Age";

const Search = ({ "*": step, navigate }) => {
  return (
    <SearchStyle>
      <Progress step={step} navigate={navigate} />
      <Router>
        <TravelDistance path="2" />
        <Age path="3" />
      </Router>
      <TentativeResults step={step} navigate={navigate} />
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.main`
  width: 75%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    width: 55%;
  }
`;

Search.defaultProps = {
  "*": "1",
  navigate: () => {},
};

Search.propTypes = {
  "*": PropTypes.string,
  navigate: PropTypes.func,
};
