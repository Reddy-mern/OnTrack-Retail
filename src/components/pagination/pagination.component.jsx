import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = (props) => {
  const {
    getPageNumber,
    itemsPerPage,
    totalBooks,
    activePage,
    currentPage,
    nextPage,
    prevPage,
  } = props;

  const { pagination } = createPagination({
    totalBooks,
    itemsPerPage,
    numberOfButtons: 10,
    currentPage,
  });

  let pageNumbers = [];
  pagination.map((page) =>
    pageNumbers.push(
      <Pagination.Item
        onClick={() => getPageNumber(page)}
        key={page}
        active={page === activePage}
      >
        {page}
      </Pagination.Item>
    )
  );

  return (
    <Pagination size="lg">
      <Pagination.Prev
        onClick={() => prevPage()}
        className={`${pagination[0] === currentPage && "disabled"}`}
      />
      {pageNumbers}
      <Pagination.Next
        onClick={() => nextPage()}
        className={`${pagination.reverse()[0] === currentPage && "disabled"}`}
      ></Pagination.Next>
    </Pagination>
  );
};

export default PaginationComponent;

const createPagination = (params) => {
  const { totalBooks, itemsPerPage, currentPage, numberOfButtons } = params;

  const numberOfPages = Math.ceil(totalBooks / itemsPerPage);

  if (currentPage > numberOfPages || currentPage < 1)
    return {
      pagination: [],
      currentPage,
    };

  const buttons = Array(numberOfPages)
    .fill(1)
    .map((e, i) => e + i);
  const sideButtons =
    numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;

  const calculLeft = (rest = 0) => {
    return {
      array: buttons
        .slice(0, currentPage - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse(),
      rest: function () {
        return sideButtons - this.array.length;
      },
    };
  };

  const calculRight = (rest = 0) => {
    return {
      array: buttons.slice(currentPage).slice(0, sideButtons + rest),
      rest: function () {
        return sideButtons - this.array.length;
      },
    };
  };

  const leftButtons = calculLeft(calculRight().rest()).array;
  const rightButtons = calculRight(calculLeft().rest()).array;

  return {
    pagination: [...leftButtons, currentPage, ...rightButtons],
    currentPage,
  };
};
