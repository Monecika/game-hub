import type { Platform } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return;

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </button>
      <ul className="dropdown-menu">
        {selectedPlatform && (
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onSelectPlatform(null)}
            >
              Display All
            </button>
          </li>
        )}
        {data.map((platform) => {
          return (
            <li key={platform.id}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => onSelectPlatform(platform)}
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
