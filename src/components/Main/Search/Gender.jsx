import React from "react";
import styled from "styled-components";
import Radio from "./Radio";

const Gender = () => {
  return (
    <ChooseGender>
      <h2>Please choose your gender</h2>
      <form>
        <Radio id="male" value="male" />
        <Radio id="female" value="female" />
      </form>
    </ChooseGender>
  );
};

export default Gender;

const ChooseGender = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;

  h2 {
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
