import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import TagDisplay from "./TagDisplay";
import { X } from "react-bootstrap-icons";
import styles from './SearchPane.module.css';

import { useQueryState } from "nuqs";

interface Props {
  tags: string[];
}

const PaneContent: React.FC<Props> = ({ tags }) => {
  // Keep the form value locally, and only dispatch a query to SearchPane on submit.
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useQueryState("search");

  useEffect(() => {
    if (query && query !== "") {
      setSearchValue(query);
    }
  }, [query]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(searchValue);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const reset = () => {
    setSearchValue("");
    setQuery("");
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
              setQuery={setQuery}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className={styles.mobileTags}>
            <TagDisplay
              tags={tags}
              defaultTagDisplay={false}
              setQuery={setQuery}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaneContent;
