import "./GenreList.css";

const GenreSkeleton = () => {
  return (
    <div className="d-flex gap-1 align-items-center mb-1 ps-3">
      <img
        className="placeholder genre-img rounded"
        style={{ backgroundColor: "gray " }}
      />
      <p className="p-0 m-0 text-start genre-name placeholder col-3 rounded"></p>
    </div>
  );
};

export default GenreSkeleton;
