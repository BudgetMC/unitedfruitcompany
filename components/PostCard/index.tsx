import { ListedPost } from "../../lib/types";
import Link from "next/link";
import styles from './PostCard.module.css';

interface Props {
  post: ListedPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const handleImage = () => {
    if (post.featured_image) {
      return <img src={`${post.featured_image}?w=200`} alt={post.title} />;
    } else {
      return (
        <img
          src="https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=300"
          alt={post.title}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      <Link href={`/${post.categories[0]}/${post.slug}`} passHref>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
              {handleImage()}
            </div>
            <h2 className={styles.title}>
              {post.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
