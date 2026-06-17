'use client';

import { useEffect, useState } from "react";

interface Props {
  text: string;
  averageDuration?: number;
}

const getVisibility = (itemIndex: number, currentIndex: number) => {
  if (itemIndex < currentIndex) {
    return "visible";
  } else {
    return "hidden";
  }
};

const createSpans = (text: string, currentIndex: number) =>
  text.split("").map((char, index) => (
    <span
      key={index}
      style={{ visibility: getVisibility(index, currentIndex) }}
    >
      {char}
    </span>
  ));

const TypeWriterScript: React.FC<Props> = ({ text, averageDuration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atomizedElements, setAtomizedElements] = useState(
    createSpans(text, currentIndex)
  );
  const [averageTimeout, setAverageTimeout] = useState(150);

  const duration = averageDuration ? averageDuration : 3000;

  useEffect(() => {
    setCurrentIndex(0);
    // Make the speed dependent on how long the text is.
    // The user shouldn't have to wait forever for really long text to come in.
    setAverageTimeout(Math.floor(duration / text.length));
  }, [duration, text]);

  useEffect(() => {
    if (currentIndex < text.length + 1) {
      const timeout = Math.floor(Math.random() * averageTimeout);
      const timedFunction = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAtomizedElements(createSpans(text, currentIndex));
      }, timeout);

      // Return a cleanup function that cancels the timeout if the component unmounts.
      return () => {
        clearTimeout(timedFunction);
      };
    }
  }, [atomizedElements, averageTimeout, currentIndex, text]);

  return <>{atomizedElements}</>;
};

export default TypeWriterScript;
