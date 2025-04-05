import { DisplayedPost } from "../../lib/types";
import PostCard from "../PostCard";
import ExpandableContent from "./ExpandableContent";
import styles from './TimelinePost.module.css';

interface Props {
  post: DisplayedPost;
  bios: DisplayedPost[];
  docs: DisplayedPost[];
  articles: DisplayedPost[];
}

const TimelinePost: React.FC<Props> = ({ post, bios, docs, articles }) => {
  // Keep track of the number of visible sections so we can alternate the headers
  // between right and left aligned.
  let sectionCount = 0;

  const displayBios = () => {
    if (bios.length > 0) {
      sectionCount += 1;
      return (
        <div>
          <h2
            className={styles.header}
            style={{
              textAlign: sectionCount % 2 === 0 ? "left" : "right"
            }}
          >
            The people
          </h2>
          <ExpandableContent flex={true}>
            {bios.map((bio) => (
              <PostCard key={bio.ID} post={bio} />
            ))}
          </ExpandableContent>
        </div>
      );
    }
  };

  const displayDocs = () => {
    if (docs.length > 0) {
      sectionCount += 1;
      return (
        <div>
          <h2
            className={styles.header}
            style={{
              textAlign: sectionCount % 2 === 0 ? "left" : "right"
            }}
          >
            In their words
          </h2>
          <ExpandableContent flex={true}>
            {docs.map((doc) => (
              <PostCard key={doc.ID} post={doc} />
            ))}
          </ExpandableContent>
        </div>
      );
    }
  };

  const displayArticles = () => {
    if (articles.length > 0) {
      sectionCount += 1;
      return (
        <div>
          <h2
            className={styles.header}
            style={{
              textAlign: sectionCount % 2 === 0 ? "left" : "right"
            }}
          >
            Concepts
          </h2>
          <ExpandableContent flex={true}>
            {articles.map((article) => (
              <PostCard key={article.ID} post={article} />
            ))}
          </ExpandableContent>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      {/* Split the title into the starting and ending year for a e s t h e t i c */}
      <p className={`${styles.backgroundTitle} ${styles.backgroundTitleStart}`}>
        {post.title.slice(0, 4)}
      </p>
      <p className={`${styles.backgroundTitle} ${styles.backgroundTitleEnd}`}>
        {post.title.slice(5, 9)}
      </p>
      <p className={styles.mobileTitle}>
        {post.title}
      </p>
      <div>
        <h2
          className={styles.header}
          style={{
            textAlign: 'left'
          }}
        >
          The narrative
        </h2>
        <ExpandableContent flex={false}>
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
        </ExpandableContent>
      </div>
      {displayBios()}
      {displayDocs()}
      {displayArticles()}
    </div>
  );
};

export default TimelinePost;
