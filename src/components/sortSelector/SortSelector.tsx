const SortSelector = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {"Order by: Relevance"}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button">
            Relevance
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Date added
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Name
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Release date
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Popularity
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            Average rating
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortSelector;
