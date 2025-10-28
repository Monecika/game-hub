import React from "react";
import type { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {isLoading
          ? skeletons.map((s) => (
              <div className="col" key={`initial-skeleton-${s}`}>
                <GameCardSkeleton />
              </div>
            ))
          : data?.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.results.map((game) => (
                  <div className="col" key={game.id}>
                    <GameCard game={game} />
                  </div>
                ))}

                {pageIndex === data.pages.length - 1 &&
                  isFetchingNextPage &&
                  skeletons.map((s) => (
                    <div className="col" key={`skeleton-${s}`}>
                      <GameCardSkeleton />
                    </div>
                  ))}
              </React.Fragment>
            ))}
      </div>

      {hasNextPage && (
        <button
          className="btn btn-primary mt-3"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load"}
        </button>
      )}
    </>
  );
};

export default GameGrid;
