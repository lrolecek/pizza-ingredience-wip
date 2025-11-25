import {useState} from 'react';
import type {ITopping} from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect = ({ toppings }: IToppingsSelectProps) => {
  const [pizzaToppings, setPizzaToppings] = useState(toppings)

  const handleToppingChange = (name:string, selected: boolean) => {
    // vytvorime si kopii stavajiciho stavu
    const newToppings = [...pizzaToppings]
    // v kopii si najdeme ingredienci, kterou chceme menit
    const topping = newToppings.find((top) => top.name === name)
    if (topping) {
      // nastavime ingredience podle checkboxu
      topping.selected = selected
      // a nove upravene pole ulozime do stavu
      setPizzaToppings(newToppings)
    } else {
      console.log('Ingredience neexistuje')
    }
  }

  const totalPrice = pizzaToppings.reduce((total, topping) => { return topping.selected ? total + topping.price : total }, 0)

  const countSelected = pizzaToppings.reduce((count, topping) => { return topping.selected ? count + 1 : count}, 0)

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {countSelected}, total price: {totalPrice.toFixed(2)} Euro</p>

      <div className="toppings">
        {pizzaToppings.map((topping: ITopping) => (
          <Topping topping={topping} key={topping.name} onToppingChange={handleToppingChange} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
