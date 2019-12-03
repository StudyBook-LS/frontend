import React from "react";
import PropTypes from "prop-types";

import Status from "./Status";

const ListingRow = ({ listing, navigate, page }) => {
  const {
    gov_id: govId,
    condition,
    brief_title: briefTitle,
    state,
    city,
    country,
    overall_status: overallStatus,
  } = listing;
  const handleClick = e => {
    e.preventDefault();
    navigate(`/study/${govId}`, { searchPage: page });
  };
  return (
    <tr>
      <td>{condition}</td>
      <td>{briefTitle}</td>
      <td>
        {state === null
          ? `${city}, ${country}`
          : `${city}, ${state}, ${country}`}
      </td>
      <Status status={overallStatus} />
      <td>
        <button type="button" onClick={e => handleClick(e)}>
          View Study
        </button>
      </td>
    </tr>
  );
};

export default ListingRow;

ListingRow.defaultProps = {
  navigate: null,
  page: "1",
};

ListingRow.propTypes = {
  navigate: PropTypes.func,
  listing: PropTypes.shape({
    gov_id: PropTypes.string,
    condition: PropTypes.string,
    brief_title: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    overall_status: PropTypes.string,
  }).isRequired,
  page: PropTypes.string,
};
