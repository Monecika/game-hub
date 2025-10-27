import useGenres from "../../hooks/useGenres";
import type { Genre } from "../../services/genres/genresService";
import getCroppedImageUrl from "../../services/imageUrl";
import "./GenreList.css";
import GenreSkeleton from "./GenreSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <p className="text-danger">{error.message}</p>;

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

      {data?.map((genre) => (
        <li key={genre.id}>
          <div className="d-flex gap-1 align-items-center mb-1 ps-3">
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt=""
              className="rounded-3 genre-img"
            />
            <button
              key={genre.id}
              onClick={() =>
                onSelectGenre(genre.id === selectedGenre?.id ? null : genre)
              }
              type="button"
              className={
                "p-0 m-0 genre-button btn text-start btn-link text-reset text-decoration-none" +
                (selectedGenre?.id === genre.id ? " fw-bold" : " fw-normal")
              }
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
