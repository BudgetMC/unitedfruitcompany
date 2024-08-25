import React, { useEffect, useRef, useState } from "react";
import { ListedPost } from "../../lib/types";
import useScreenHeight from "../../hooks/useScreenHeight";
import Banner from "./Banner";
import ImageBox from "./ImageBox";
import InfoBox from "./InfoBox";
import { Grid, Container, NavButton } from "./styles";

interface Props {
  posts: ListedPost[];
}

const getNearestIndex = (current: number, posts: ListedPost[]) => {
  if (current < 0) {
    return 0;
  } else if (current > posts.length - 1) {
    return posts.length - 1;
  } else {
    return current;
  }
};

const scrolltoItem = (index: number) => {
  const amountToScroll = window.innerHeight + window.innerHeight * index;
  window.scroll({ top: amountToScroll, behavior: "smooth" });
};

const Timeline: React.FC<Props> = ({ posts }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePost, setActivePost] = useState(posts[0]);

  const screenHeight = useScreenHeight();

  const gridRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    const handleKeyboardNav = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        scrolltoItem(currentIndex - 1);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        // Avoid skipping the first item if the user isn't there yet.
        if (scrollHeight < screenHeight) {
          scrolltoItem(0);
        } else {
          scrolltoItem(currentIndex + 1);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyboardNav);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyboardNav);
    };
  }, [currentIndex, screenHeight, scrollHeight]);

  useEffect(() => {
    if (!window) {
      setActivePost(posts[0]);
    } else {
      let currentHeight;
      // On mobile devices, the image box is on the top of the screen, with a height of 35vh.
      // We need to account for this while calculating which info box is closet.
      // So this statement adds an offset of 35vh to the scroll height number.
      if (window.innerWidth < 1000) {
        currentHeight = Math.round(scrollHeight - screenHeight * 0.65);
      } else {
        currentHeight = scrollHeight - screenHeight;
      }
      const currentIndex = Math.round(currentHeight / screenHeight);

      // Handle what to do if the user scrolls below or above the component.
      const displayIndex = getNearestIndex(currentIndex, posts);

      setActivePost(posts[displayIndex]);
      setCurrentIndex(displayIndex);
    }
  }, [posts, screenHeight, scrollHeight]);

  // Sort the posts by date (they're all titled e.g. 1880-1900)
  const sortedPosts = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  return (
    <Container>
      <Banner
        scrollToContent={() =>
          gridRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Grid ref={gridRef}>
        <NavButton
          isActive={activePost !== posts[0] && typeof window !== "undefined"}
          direction="up"
          onClick={() => scrolltoItem(currentIndex - 1)}
        >
          &#8593;
        </NavButton>
        <NavButton
          isActive={
            activePost !== posts[posts.length - 1] &&
            typeof window !== "undefined" &&
            window.scrollY >= screenHeight
          }
          direction="down"
          onClick={() => scrolltoItem(currentIndex + 1)}
        >
          &#8595;
        </NavButton>
        <div>
          {sortedPosts.map((post) => {
            return (
              <div key={post.ID}>
                <InfoBox post={post} activePost={activePost} />
              </div>
            );
          })}
        </div>
        <ImageBox activePost={activePost} />
      </Grid>
    </Container>
  );
};

export default Timeline;
