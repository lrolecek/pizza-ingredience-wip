import Check from '../Check';
import type {ITopping} from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onToppingChange: (name: string, selected: boolean) => void;
}

const Topping = ({ topping, onToppingChange }: IToppingProps) => {

  const handleCheck = (checked:boolean) => {
    onToppingChange(topping.name, checked)
  }

  return (
    <div className="topping">
      <Check checked={topping.selected} onCheck={handleCheck} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
