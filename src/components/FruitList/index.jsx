import styles from "./style.module.scss";
import { ListItem } from "../widgets/ListItem";

export const FruitList = ({itemList}) => {
  return (
    <div className={styles.div}>
      <h2 className={styles.title}>{itemList[0].category}</h2>
      <ul>
        {itemList.map(item => <ListItem key={item.name} item={item} />)}
      </ul>
    </div>
  );
}