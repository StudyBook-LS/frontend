import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import countryList from "../../../utils/countryList";

const Countries = ({ handleChange, fromSearchPage }) => {
  return (
    <Select htmlFor="country" fromSearchPage={fromSearchPage}>
      <span className="hidden" role="definition">
        Country
      </span>
      <select name="country" id="country" onChange={e => handleChange(e)}>
        <option value='All' key='All'>All countries</option>
        {countryList.map(({ name, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </Select>
  );
};

export default Countries;

Countries.defaultProps = {
  fromSearchPage: false,
};

Countries.propTypes = {
  handleChange: PropTypes.func.isRequired,
  fromSearchPage: PropTypes.bool,
};

const Select = styled.label`
  width: ${({ fromSearchPage }) => (fromSearchPage ? "100%" : "30%")};

  select {
    border: 1px solid #969797;
    width: 100%;
    padding: 10px 27% 10px 15px;
    border-radius: 20px;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    appearance: none;
    transition-property: border, background-image;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    &:focus {
      background-image: linear-gradient(45deg, #1ad9c4 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, #1ad9c4 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      border-color: #1ad9c4;
      outline: 0;
    }
  }
`;
