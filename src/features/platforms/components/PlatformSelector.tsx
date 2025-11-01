import useGameQueryStore from "../../../store";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const setPlatformId = useGameQueryStore((selector) => selector.setPlatformId);

  const { data, error } = usePlatforms();
  const platformName = usePlatform(platformId);

  if (error) return <p className="text-danger">{error.message}</p>;

  if (error) return;

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {platformId ? platformName : "Platforms"}
      </button>
      <ul className="dropdown-menu">
        {platformId && (
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setPlatformId(undefined)}
            >
              Display All
            </button>
          </li>
        )}
        {data?.map((platform) => {
          return (
            <li key={platform.id}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setPlatformId(platform.id)}
              >
                {platform.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlatformSelector;
