import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "react-bootstrap-icons";
import styles from './ExpandableContent.module.css';

interface Props {
  flex: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const ExpandableContent: React.FC<Props> = ({ flex, children }) => {
  const [expanded, setExpanded] = useState(false);

  const content = React.Children.toArray(children);

  const collapsedRef = useRef<HTMLDivElement>(null);

  const disableFocus = (element: HTMLElement) => {
    element.querySelectorAll("a").forEach((e) => (e.tabIndex = -1));
  };

  const displayContent = () => {
    if (expanded) {
      return (
        <div className={styles.expanded}>
          {handleFlex(content)}
        </div>
      );
    } else {
      return (
        <div
          className={styles.collapsed}
          ref={collapsedRef}
        >
          {handleFlex(content)}
        </div>
      );
    }
  };

  const handleFlex = (children: ReturnType<typeof React.Children.toArray>) => {
    if (flex) {
      return (
        <div className={styles.flex}>
          {children}
        </div>
      );
    } else {
      return children;
    }
  };

  // Disable tab focus on stuff that's inside a Collapsed div.
  useEffect(() => {
    if (!expanded && collapsedRef.current) {
      disableFocus(collapsedRef.current);
    }
  }, [expanded]);

  return (
    <>
      {displayContent()}
      {expanded ? (
        ""
      ) : (
        <button
          className={styles.toggleButton}
          onClick={() => setExpanded(true)}
          role='button'
        >
          <ArrowDown />
        </button>
      )}
    </>
  );
};

export default ExpandableContent;
