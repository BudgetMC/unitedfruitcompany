import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import TagDisplay from "./TagDisplay";
import { X } from "react-bootstrap-icons";
import { Pane, Content, Label, Input, ResetButton } from "./styles";
import styles from './TagDisplay.module.css';

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
        <ResetButton type="reset" onClick={() => reset()}>
          <X />
        </ResetButton>
      );
    }
  };

  return (
    <>
      <Pane>
        <Content>
          <form onSubmit={(event) => handleSubmit(event)}>
            <Label>
              Search:
              <Input
                type="text"
                value={searchValue}
                name="query"
                ref={searchInputRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleQueryChange(event)
                }
              />
              {handleResetButton()}
            </Label>
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
        </Content>
      </Pane>
    </>
  );
};

export default PaneContent;
