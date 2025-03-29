import BibTypeIcon from "./BibTypeIcon";
import styles from './FilterButton.module.css';

interface Props {
  type: string | null;
  filter: string | null;
  setFilter: (arg: string | null) => void;
}

const getLabel = (type: string | null) => {
  if (!type) {
    return <span>All</span>;
  } else {
    return <span>{`${type[0].toLocaleUpperCase()}${type?.slice(1)}`}</span>;
  }
};

const FilterButton: React.FC<Props> = ({ type, filter, setFilter }) => {
  const isSelected = filter === type

  return (
    <button
      className={styles.filterButton}
      onClick={() => setFilter(type)}
      role='button'
      style={{
        background: isSelected
          ? 'var(--darkBackground)'
          : '',
        color: isSelected
          ? '#ffffff'
          : ''
      }}
    >
      <BibTypeIcon type={type} />
      {getLabel(type)}
    </button>
  );
};

export default FilterButton;
