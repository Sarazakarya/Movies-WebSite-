import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../store/Slices/Movies";
import { getAllMovies } from "./../store/Slices/Movies";

export default function Pagenation() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      await dispatch(getAllMovies());
      setpageCount(movies.length);
    };

    fetchMovies();
  }, [dispatch, movies.length]);

  function handlePageClick(data) {
    dispatch(getPage(data.selected + 1));
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=" التالي>"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق  "
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}
