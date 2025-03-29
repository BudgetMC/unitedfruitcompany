import { useState } from "react";
import TagToggle from "./TagToggle";
import styles from './TagDisplay.module.css';

interface Props {
  tags: string[];
  defaultTagDisplay: boolean;
  setQuery: (arg: string) => void;
  setSearchValue: (arg: string) => void;
}

const TagDisplay: React.FC<Props> = ({
  tags,
  defaultTagDisplay,
  setQuery,
  setSearchValue,
}) => {
  const [showTags, setShowTags] = useState(defaultTagDisplay);

  const setTag = (tag: string) => {
    setQuery(tag);
    setSearchValue(tag);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Enter") {
      const search = (event.target as HTMLElement).innerText;
      setTag(search);
    }
  };

  const handleTagDisplay = () => {
    if (showTags && tags.length > 0) {
      return (
        <ul className={styles.tagList}>
          {tags.map((tag, index) => (
            <li
              className={styles.tagItem}
              tabIndex={0}
              key={index}
              onClick={() => setTag(tag)}
              onKeyDown={(event: React.KeyboardEvent<HTMLLIElement>) =>
                handleKeyDown(event)
              }
            >
              {tag}
            </li>
          ))}
        </ul>
      );
    }
  };

  // There's no need to display this stuff if there are no tags at all.
  if (tags.length === 0) {
    return null;
  }

  return (
    <div>
      <div
        className={styles.mobileHeaderContainer}
        onClick={() => setShowTags(!showTags)}
      >
        <h3 className={styles.header}>
          Popular tags in this category
        </h3>
        <TagToggle display={showTags} />
      </div>
      <div className={styles.desktopHeaderContainer}>
        <h3 className={styles.header}>
          Popular tags in this category
        </h3>
      </div>
      {handleTagDisplay()}
    </div>
  );
};

export default TagDisplay;
