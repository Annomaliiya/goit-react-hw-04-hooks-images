import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg";

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState("");
  };

  return (
    <header className={s.searchBar}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <button type="submit" className={s.btnSearch}>
          <span className={s.btnLabel}>
            <SearchIcon width="20" height="20" className={s.svg} />
          </span>
        </button>
        <input
          className={s.input}
          onChange={handleChange}
          name="query"
          value={state}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  changeQuery: PropTypes.func,
};
