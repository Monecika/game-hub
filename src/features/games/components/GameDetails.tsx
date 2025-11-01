import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../../../components/expandableText/ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error || !game) throw error;

  return <ExpandableText children={game.description} />;
};

export default GameDetails;
