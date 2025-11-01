import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="row">
      {data?.results.map((file) => (
        <img key={file.id} src={file.image} className="col-12 col-md-6 g-3" />
      ))}
    </div>
  );
};

export default GameScreenshots;
