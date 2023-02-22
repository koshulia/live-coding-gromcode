import React from 'react';

// props
// curPage
// ToggleNextBtn
// TogglePrevBtn
// usersCount
// usersPerPage

const Pagination = props => {
  const isPrevPageAvailable = props.currentPage > 1;

  const isNextPageAvailable =
    props.currentPage !== Math.ceil(props.totalItems.length / props.itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={props.goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button className="btn" onClick={props.goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
