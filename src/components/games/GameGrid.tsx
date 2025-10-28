import type { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const games = data?.pages.flatMap((p) => p.results) || [];

  if (error) return <p className="text-danger">{error.message}</p>;

  if (isLoading)
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {skeletons.map((s) => (
          <div className="col" key={`initial-skeleton-${s}`}>
            <GameCardSkeleton />
          </div>
        ))}
      </div>
    );

  return (
    <>
      <InfiniteScroll
        className="overflow-hidden"
        dataLength={games.length}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-0">
            {skeletons.map((s) => (
              <div className="col" key={`skeleton-${s}`}>
                <GameCardSkeleton />
              </div>
            ))}
          </div>
        }
        scrollThreshold={0.9}
      >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {games.map((game) => (
            <div className="col" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};
export default GameGrid;
