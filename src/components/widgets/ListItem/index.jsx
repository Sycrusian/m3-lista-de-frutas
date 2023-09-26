import styles from "./style.module.scss";

export const ListItem = ({item}) => {
  return (
    <li className={styles.listItem}>
      <span>{item.name}</span>
      <span>Preço: {item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
    </li>
  );
}