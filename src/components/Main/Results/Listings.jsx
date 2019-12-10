import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../../../context";
import { fetchData } from "../../../utils";

import ListingTable from "./ListingTable";
import PageSelection from "./PageSelection";

const Listings = ({ navigate, location }) => {
  const [page, setPage] = useState(1);

  const { state, dispatch } = useContext(Context);
  const {
    postalCode,
    country,
    condition,
    gender,
    age,
    totalResults: results,
    data,
  } = state;
  
  useEffect(() => {
    fetch(Number(location.pathname.slice(9)));
    setPage(Number(location.pathname.slice(9)))
  }, [location.pathname]);
  
  const fetch = async (pageNum) => {
    dispatch({ type: "DATA_FETCH_START" });
    const { status, studies, totalResults } = await fetchData(
      condition,
      postalCode,
      country,
      Number(pageNum),
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

  const pageChange = (pageNum) => {
    navigate(`../${pageNum}`);
    fetch(pageNum);
    setPage(pageNum);
  }

  return (
    <ListingsView>
      <h2>
        {(page - 1) * 12 + 1} -&nbsp;
        {page * 12 > results ? results : page * 12}
        &nbsp;of&nbsp;
        {results}
        &nbsp;Results
      </h2>
      <ListingTable navigate={navigate} page={page.toString()} />
      <PageSelection page={page.toString()} pageChange={pageChange}/>
    </ListingsView>
  );
};

export default Listings;

Listings.defaultProps = {
  page: "1",
  navigate: null,
};

Listings.propTypes = {
  page: PropTypes.string,
  navigate: PropTypes.func,
};

const ListingsView = styled.section`
  width: 100%;
  min-height: calc(100vh - 191px);
  padding: 0 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .pagination {
    display: flex;
    justify-content: center;
  }
`;
