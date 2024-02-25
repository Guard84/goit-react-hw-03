import css from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {
  
  return (
    <div className={css.wrapperSearchBar}>
      <p className={css.textSearchBar}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default SearchBar;