import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Context } from "../../../context";

import ListingRow from "./ListingRow";

const ListingTable = ({ navigate, page }) => {
  const { state } = useContext(Context);
  const { data } = state;
  return (
    <Table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Study Title</th>
          <th>Study Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(listing => {
            const { gov_id: govId } = listing;
            return (
              <ListingRow
                key={govId}
                listing={listing}
                navigate={navigate}
                page={page.toString()}
              />
            );
          })}
      </tbody>
    </Table>
  );
};

export default ListingTable;

ListingTable.defaultProps = {
  navigate: null,
  page: '1',
};

ListingTable.propTypes = {
  navigate: PropTypes.func,
  page: PropTypes.string,
};

const Table = styled.table`
  height: auto;
  th {
    text-align: left;
    padding: 20px 0 10px;
    font-size: 1.4rem;
    font-weight: 700;
    max-width: 300px;

    &:nth-of-type(4) {
      max-width: 75px;
    }
  }

  td {
    padding: 20px 20px 20px 0;
    vertical-align: middle;
    height: 75px;

    &:first-of-type {
      font-size: 1rem;
      max-width: 120px;
    }

    &:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: 600;
      max-width: 400px;
    }

    &:nth-of-type(4) {
      max-width: 100px;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 30px;
    color: #fff;
    background: #223547;
    border: 1px solid #223547;
    transition: all 300ms ease;
    min-width: 110px;

    &:hover {
      color: #223547;
      background: #fff;
    }
  }
`;
