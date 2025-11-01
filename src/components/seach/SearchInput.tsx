import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-100"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <div className="input-group">
        <span className="input-group-text">
          <BsSearch></BsSearch>
        </span>
        <input
          id="search"
          type="text"
          className="form-control"
          placeholder="Search games..."
          ref={ref}
        />
      </div>
    </form>
  );
};

export default SearchInput;
