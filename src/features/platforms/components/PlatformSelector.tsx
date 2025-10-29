import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import type { Platform } from "../services/platformService";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const platformName = usePlatform(selectedPlatformId);

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
        {selectedPlatformId ? platformName : "Platforms"}
      </button>
      <ul className="dropdown-menu">
        {selectedPlatformId && (
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
        {data?.map((platform) => {
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
