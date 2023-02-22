import React from 'react';

// props
// curPage
// ToggleNextBtn
// TogglePrevBtn
// usersCount
// usersPerPage

const Pagination = props => {
  const isPrevPageAvailable = props.currentPage === 1;
  const isNextPageAvailable = props.totalItems.length - props.currentPage * props.itemsPerPage > 0;

  return (
    <>
      <button className="btn" onClick={props.goPrev} disabled={isPrevPageAvailable}>
        {!isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button className="btn" onClick={props.goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </>
  );
};

export default Pagination;
