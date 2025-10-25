interface SortSelectorProps {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: SortSelectorProps) => {
  const sortOders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOders.find((order) => order.value === sortOrder);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </button>
      <ul className="dropdown-menu">
        {sortOders.map((order) => {
          return (
            <li key={order.value}>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortSelector;
