import React, { useContext } from "react";
import PropTypes from "prop-types";
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import { Context } from "../../../context";

const PageSelection = ({ page, pageChange }) => {
  const { state } = useContext(Context);
  const { totalResults } = state;

  const handleChange = (page) => {
    pageChange(page);
  }

  return (
    <Pagination 
      current={page}
      style={{display: 'flex', justifyContent: 'center'}}
      defaultPageSize={12}
      total={totalResults}
      onChange={handleChange}
      locale={localeInfo} />
  );
};

export default PageSelection;

PageSelection.propTypes = {
  page: PropTypes.string.isRequired,
};
