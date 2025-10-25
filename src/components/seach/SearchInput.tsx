import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="input-group">
      <span className="input-group-text">
        <BsSearch></BsSearch>
      </span>
      <input
        id="search"
        type="text"
        className="form-control"
        placeholder="Search games..."
      />
    </div>
  );
};

export default SearchInput;
