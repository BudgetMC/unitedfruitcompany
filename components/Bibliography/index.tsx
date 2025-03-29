import TypeWriterScript from "../../components/TypewriterScript";
import BibliographyCard from "../BibliographyCard";
import Container from "../Container";
import { Post } from "../../lib/types";
import { useEffect, useState, useRef, useMemo } from "react";
import FilterOptions from "./FilterOptions";
import styles from "./Bibliography.module.css";

interface Props {
  items: Post[];
}

const Bibliography: React.FC<Props> = ({ items }) => {
  const [filter, setFilter] = useState<null | string>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsToShow = useMemo(() => {
    if (filter) {
      // Some special handling for the different words people might use for a image. I'm doing this so people don't have
      // to remember which specific term to use when adding bibliography items.
      if (filter === "picture") {
        return items.filter(
            (item) =>
              item.tags.labelTags.includes("picture") ||
              item.tags.labelTags.includes("image") ||
              item.tags.labelTags.includes("photo")
          );
      } else {
        return items.filter((item) => item.tags.labelTags.includes(filter));
      }
    } else {
      return items;
    }
  }, [filter, items])

  // Run the tail animation when the list changes
  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      Array.from(elements).forEach((el, index) => {
        el.animate(
          [
            { opacity: 0, transform: "translateY(-20px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 500,
            easing: "ease-out",
            delay: index * 100,
            fill: "backwards"
          }
        );
      });
    }
  }, [itemsToShow]);

  return (
    <Container>
      <h1 className={styles.header}>
        <TypeWriterScript text={"Resources"} averageDuration={1000} />
      </h1>
      <p className={styles.description}>
        This page lists the sources we used, as well as other resources that we
        couldn&apos;t secure the rights to reproduce.
      </p>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <div
        className={styles.postList}
        ref={containerRef}
      >
        {itemsToShow.map((item, index) => (
          <div key={index} className={styles.animatedItem}>
            <BibliographyCard item={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Bibliography;
