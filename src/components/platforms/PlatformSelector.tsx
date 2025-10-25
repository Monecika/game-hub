import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return;

  return (
    <div className="dropdown mb-2 ">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Platforms
      </button>
      <ul className="dropdown-menu">
        {data.map((platform) => {
          return (
            <li key={platform.id}>
              <button className="dropdown-item" type="button">
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
