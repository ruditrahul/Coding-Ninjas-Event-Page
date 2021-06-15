import React, { useState, useEffect } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [indexNumber, setIndexNumber] = useState(1);

  function changePage() {
    paginate(indexNumber);
  }

  useEffect(() => changePage(), [indexNumber]);

  function changeToPrevPage() {
    if (indexNumber > 1) {
      setIndexNumber((indexNumber) => indexNumber - 1);
    }
  }

  function changeToNextPage() {
    if (indexNumber < pageNumbers.length) {
      setIndexNumber((indexNumber) => indexNumber + 1);
    }
  }

  return (
    <div className="pagination-div">
      <NavigateBeforeIcon
        fontSize="large"
        onClick={changeToPrevPage}
        className={`control-btn ${indexNumber === 1 ? "disabled" : " "}`}
      />
      <div className="control-div">
        <p>Page</p>
        <div className="numbers">
          <p>
            <b>{indexNumber}</b>
          </p>
          <p>
            of <b>{pageNumbers.length}</b>
          </p>
        </div>
      </div>
      <NavigateNextIcon
        fontSize="large"
        onClick={changeToNextPage}
        className="control-btn"
        className={`control-btn ${
          indexNumber === pageNumbers.length ? "disabled" : " "
        }`}
      />
    </div>
  );
};

export default Pagination;
