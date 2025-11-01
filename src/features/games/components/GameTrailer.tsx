import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
      className="w-100"
    ></video>
  ) : (
    <video
      controls
      width={480}
      poster="https://via.placeholder.com/480x270?text=Video+Unavailable"
    >
      <source src="" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default GameTrailer;
