import FilterButton from "./FilterButton";
import styles from './FilterOptions.module.css';

interface Props {
  filter: null | string;
  setFilter: (arg: string | null) => void;
}

const FilterOptions: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className={styles.menu}>
      <FilterButton type={null} filter={filter} setFilter={setFilter} />
      <FilterButton type="book" filter={filter} setFilter={setFilter} />
      <FilterButton type="periodical" filter={filter} setFilter={setFilter} />
      <FilterButton type="picture" filter={filter} setFilter={setFilter} />
      <FilterButton type="website" filter={filter} setFilter={setFilter} />
      <FilterButton type="video" filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default FilterOptions;
