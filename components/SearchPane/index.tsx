import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import TagDisplay from "./TagDisplay";
import { X } from "react-bootstrap-icons";
import styles from './SearchPane.module.css';
import useQueryState from "../../hooks/useQueryState";

interface Props {
  tags: string[];
}

const PaneContent: React.FC<Props> = ({ tags }) => {
  // Keep the form value locally, and only dispatch a query to SearchPane on submit.
  const [searchValue, setSearchValue] = useState("");
  const searchParam = useQueryState('search');

  useEffect(() => {
    if (searchParam.value && searchParam.value !== "") {
      setSearchValue(searchParam.value as string);
    }
  }, [searchParam.value]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchParam.setValue(searchValue);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const reset = () => {
    setSearchValue("");
    searchParam.setValue("");
  };

  const handleResetButton = () => {
    if (searchValue !== "") {
      return (
        <button
          className={styles.resetButton}
          onClick={reset}
          role='button'
          type="reset"
        >
          <X />
        </button>
      );
    }
  };

  return (
    <>
      <div className={styles.pane}>
        <div className={styles.content}>
          <form onSubmit={(event) => handleSubmit(event)}>
            <label className={styles.label}>
              Search:
              <input
                className={styles.input}
                type="text"
                value={searchValue}
                name="query"
                ref={searchInputRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleQueryChange(event)
                }
              />
              {handleResetButton()}
            </label>
          </form>
          <div className={styles.desktopTags}>
            <TagDisplay
              tags={tags}
              defaultTagDisplay={true}
              setQuery={searchParam.setValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className={styles.mobileTags}>
            <TagDisplay
              tags={tags}
              defaultTagDisplay={false}
              setQuery={searchParam.setValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaneContent;
