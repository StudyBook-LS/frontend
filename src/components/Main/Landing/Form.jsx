import React, { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Context } from "../../../context";

import fetchData from "../../../utils/fetchData";

import Countries from "./Countries";

const Form = ({ navigate }) => {
  const { state, dispatch } = useContext(Context);
  const { condition, postalCode, country, isFetchingData } = state;
  const [error, setError] = useState('');

  const handleChange = e => {
    setError('');
    dispatch({
      type: "UPDATE_INPUT",
      payload: { name: e.target.id, value: e.target.value },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (condition && postalCode && country) {
      dispatch({ type: "DATA_FETCH_START" });
      const { status, studies, totalResults } = await fetchData(
        condition,
        postalCode,
        country,
        1,
      );
      if (status === 200) {
        dispatch({
          type: "DATA_FETCH_SUCCESS",
          payload: { studies, totalResults },
        });
        navigate("/search/2");
      } else {
        dispatch({
          type: "DATA_FETCH_FAILURE",
          payload: { studies, totalResults },
        });
      }
      
    } else {
      setError('All fields are required for search');
    }
  };

  return (
    <FormStyle onSubmit={e => handleSubmit(e)}>
      <label htmlFor="condition">
        <span className="hidden" role="definition">
          Medical Condition
        </span>
        <input
          type="text"
          placeholder="Medical Condition"
          id="condition"
          value={condition}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor="postal">
        <span className="hidden" role="definition">
          Postal Code
        </span>
        <input
          type="text"
          placeholder="Postal Code"
          id="postalCode"
          value={postalCode}
          onChange={e => handleChange(e)}
        />
      </label>
      <Countries handleChange={handleChange} />
      {error && <div>{error}</div>}
      {isFetchingData && <div>{isFetchingData}</div>}
      <button type="submit">Find a Trial</button>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.form`
  width: 65%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 75px;
  position: relative;

  @media (max-width: 400px) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 80%;
    margin: 0 auto;
  }

  label {
    font-size: 1.6rem;
    @media (max-width: 800px) {
      width: 45%;
      margin-bottom: 10px;
    }

    @media (max-width: 400px) {
      width: 100%;
    }

    &:first-of-type {
      width: 50%;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    &:nth-of-type(2) {
      width: 15%;
      min-width: 120px;
      @media (max-width: 800px) {
        width: 48%;
      }
      @media (max-width: 400px) {
        width: 100%;
      }
    }

    input {
      width: 100%;
      border: 1px solid #969797;
      border-radius: 20px;
      padding: 10px 0 10px 15px;
      transition: all 300ms ease;

      &:focus {
        border-color: #1ad9c4;
      }
    }
  }

  button {
    width: 18%;
    min-width: 120px;
    font-size: 1.5rem;
    text-transform: uppercase;
    border-radius: 20px;
    background: #223547;
    padding: 10px;
    color: #fff;
    transition: all 300ms ease;
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 800px) {
      position: static;
      width: 100%;
    }

    @media (max-width: 400px) {
    }

    &:hover {
      background: #1ad9c4;
    }
  }
`;

Form.defaultProps = {
  navigate: () => {},
};

Form.propTypes = {
  navigate: PropTypes.func,
};
