import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";

import { Context } from "../../../context";

import Status from "./Status";
import Requirements from "./Requirements";

const Study = ({ id, navigate, location }) => {
  const { state } = useContext(Context);
  const { data } = state;
  const [study, setStudy] = useState({});

  useEffect(() => {
    const thisStudy = data.find(stud => stud.gov_id === id);
    setStudy(() => thisStudy);
  }, [id, data]);

  useEffect(() => {
    console.log(location);
  }, [])

  return (
    <StudyPage>
      {study && (
        <>
          <Status status={study.overall_status} />
          <h2>{study.condition}</h2>
          <h1>{study && study.brief_title}</h1>
          <a href={study.url} target="_blank" rel="noopener noreferrer">
            ClinicalTrials.gov -&nbsp;
            {study.gov_id}
            &nbsp;
            <FaExternalLinkAlt />
          </a>
          <h2>Study Purpose</h2>
          <p>{study.brief_summary}</p>
          <Requirements eligibility={study.eligibility} />
          <button>
            Back to listings
          </button>
        </>
      )}
    </StudyPage>
  );
};

export default Study;

Study.defaultProps = {
  id: "1",
};

Study.propTypes = {
  id: PropTypes.string,
};

const StudyPage = styled.section`
  width: 95%;
  min-height: calc(100vh - 211px);
  max-width: 1500px;
  margin: 20px auto 0;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h2:first-of-type {
    margin: 10px 0;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    width: 40%;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    margin: 10px 0 40px;
    color: #1ad9c4;
    font-weight: 600;
    display: flex;
    align-items: flex-start;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 40px;
    font-weight: 500;
  }
`;
