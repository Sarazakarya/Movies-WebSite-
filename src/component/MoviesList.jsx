import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Cardmovie from "./Cardmovie";
import Pagenation from "./Pagenation";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../store/Slices/Movies";

export default function MoviesList() {
  const { movies, error, isLoading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div>
      <Row className="mt-3">
        {isLoading ? (
          <h3 className="text-center p-5">Loading...</h3>
        ) : error ? (
          <h3 className="text-center p-5">{error}</h3>
        ) : movies.length > 0 ? (
          movies.map((mov) => <Cardmovie key={mov.id} mov={mov} />)
        ) : (
          <h3 className="text-center p-5">No movies found</h3>
        )}
      </Row>
      {movies.length >= 1 ? <Pagenation /> : null}
    </div>
  );
}
