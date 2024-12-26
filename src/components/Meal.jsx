import config from './Config';
import { currencyFormatter } from '../utils/formatting';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
export default function Meal({ meal }) {
  const { items, addItem } = useContext(CartContext);
  function handleAddItemFn() {
    addItem(meal);
  }
  return (
    <div className="meal-item">
      <article>
        <img src={`${config.baseUrl}/${meal.image}`} alt="Meal Image" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-actions">
            <Button onClick={handleAddItemFn}>add to cart</Button>
          </p>
        </div>
      </article>
    </div>
  );
}
