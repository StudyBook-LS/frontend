import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../../../context";

const Age = () => {
  const { state, dispatch } = useContext(Context);

  const { age } = state;

  const handleChange = e => {
    const value = e.target.value ? Number(e.target.value) : "";
    dispatch({
      type: "UPDATE_INPUT",
      payload: { name: e.target.id, value },
    });
  };

  return (
    <AgeStyle htmlFor="age">
      How old are you?
      <div>
        <input
          type="number"
          id="age"
          value={age}
          onChange={e => handleChange(e)}
        />
      </div>
    </AgeStyle>
  );
};

export default Age;

const AgeStyle = styled.label`
  font-size: 1.8rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 20px;
    position: relative;

    &:after {
      content: "years";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      font-size: 1.3rem;
      color: #b2b2b2;
    }
  }

  input {
    font-size: 1.6rem;
    border: 1px solid #969797;
    border-radius: 20px;
    padding: 10px 0 10px 15px;
    width: 100%;

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
