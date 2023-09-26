import "./styles/index.scss";
import { useState } from "react";
import { produceList } from "./database";
import { Header } from "./components/Header";
import { AddItemForm } from "./components/AddItemForm";
import { FruitList } from "./components/FruitList";

const App = () => {
  const [overallList, setOverallList] = useState(produceList);

  const fruitList = overallList.filter(item => item.category === "Frutas");
  const vegetableList = overallList.filter(item => item.category === "Legumes");

  const totalValue = overallList.reduce((value, item) => value + item.price, 0);

  return (
    <>
      <Header/>
      <AddItemForm produceList={overallList} setProduceList={setOverallList} />
      <section className="lists">
        <FruitList itemList={fruitList} />
        <FruitList itemList={vegetableList} />
      </section>
      <h2 className="total">Valor Total: {totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h2>
    </>
  );
}

export default App;
