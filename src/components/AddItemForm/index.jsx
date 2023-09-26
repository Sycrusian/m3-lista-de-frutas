import styles from "./style.module.scss";
import { useState } from "react";

export const AddItemForm = ({produceList, setProduceList}) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Frutas");
  
  const submit = event => {
    event.preventDefault();
  }

  const addFruit = () => {
    const newItem = { name: item, price: price, category: category};
    setItem("");
    setPrice(0);
    setProduceList([...produceList, newItem]);
  }

  return (
    <form className={styles.form} onSubmit={event => submit(event)}>
      <div>
        <label htmlFor="produce">Item</label>
        <input
          name="produce"
          type="text"
          value={item}
          onChange={e => setItem(e.currentTarget.value)} />
      </div>
      <div>
        <label htmlFor="price">Preço</label>
        <input
          name="price"
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.currentTarget.value))} />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={e => setCategory(e.currentTarget.value)}>
          <option value="Frutas">Frutas</option>
          <option value="Legumes">Legumes</option>
        </select>
      </div>
      <button onClick={addFruit}>Adicionar Item</button>
    </form>
  );
}