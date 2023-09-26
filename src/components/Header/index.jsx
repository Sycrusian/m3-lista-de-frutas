import styles from "./style.module.scss";
import fruitsLogo from "../../assets/frutas.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={fruitsLogo} alt="Logo Frutas" />
      <h1><em>Vida</em>Fruta</h1>
    </header>
  );
}