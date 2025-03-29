import { Post } from "../../lib/types";
import BibTypeIcon from "../Bibliography/BibTypeIcon";
import styles from './BibliographyCard.module.css';

interface Props {
  item: Post;
}

const BibliographyCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.box}>
      <BibTypeIcon
        type={item.tags.labelTags.length > 0 ? item.tags.labelTags[0] : null}
      />
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </div>
  );
};

export default BibliographyCard;
