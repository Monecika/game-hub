import useGenres, { type Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import "./GenreList.css";
import GenreSkeleton from "./GenreSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <p className="text-danger">No data to be loaded</p>;

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
            <button
              key={genre.id}
              onClick={() => onSelectGenre(genre)}
              type="button"
              className="p-0 m-0 genre-button btn text-start btn-link text-reset text-decoration-none"
            >
              {genre.name}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
