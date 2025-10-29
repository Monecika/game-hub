interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color =
    score > 75
      ? "text-bg-success"
      : score > 60
      ? "text-bg-warning"
      : "text-bg-danger";

  return (
    <h6 className="m-0">
      <span className={" badge " + color}>{score}</span>
    </h6>
  );
};

export default CriticScore;
