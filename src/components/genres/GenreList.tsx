import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import "./GenreList.css";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="list-unstyled">
      {isLoading &&
        skeletons.map((skeleton) => {
          return (
            <li key={skeleton}>
              <GenreSkeleton></GenreSkeleton>
            </li>
          );
        })}

      {data.map((genre) => (
        <li key={genre.id}>
          <div className="d-flex gap-1 align-items-center mb-1 ps-3">
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
              className="rounded-3 genre-img"
            />
            <p className="p-0 m-0 text-start genre-name">{genre.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
