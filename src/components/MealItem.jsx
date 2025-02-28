import { currencyFormatter } from '../util/formatting.js';
import ReadonlyRating from './UI/ReadonlyRating.jsx';


export default function MealItem({ meal }) {

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <div><ReadonlyRating value={meal.rating} /></div>
        </div>
      </article>
    </li>
  );
}