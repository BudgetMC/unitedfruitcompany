import styled from "styled-components";
import BibTypeIcon from "./BibTypeIcon";

interface Props {
  type: string | null;
  filter: string | null;
  setFilter: (arg: string | null) => void;
}

const Button = styled.button<{ selected: boolean }>`
  background: var(--thirdary);
  border: none;
  padding: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;
  font-size: 1rem;
  border-radius: 3px;
  ${(props) =>
    props.selected ? `background: var(--darkBackground);` : ""}
  ${(props) => (props.selected ? "color: white;" : "")}

  &:hover {
    cursor: pointer;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const getLabel = (type: string | null) => {
  if (!type) {
    return <span>All</span>;
  } else {
    return <span>{`${type[0].toLocaleUpperCase()}${type?.slice(1)}`}</span>;
  }
};

const FilterButton: React.FC<Props> = ({ type, filter, setFilter }) => {
  return (
    <Button onClick={() => setFilter(type)} selected={filter === type}>
      <BibTypeIcon type={type} />
      {getLabel(type)}
    </Button>
  );
};

export default FilterButton;
