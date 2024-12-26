import Meal from './Meal';
import Error from './Error';
import { useContext } from 'react';
import APIsContext from '../Context/APIContext';

function MealsComponent() {
  const { getMeals } = useContext(APIsContext);
  const { loading, error: errorMessage, data: meals } = getMeals();

  if (loading) {
    return <p className="center">Data is fetching...</p>;
  }
  if (errorMessage) {
    return <Error title={'Data Fetched Error!'} message={errorMessage} />;
  }
  return (
    <div>
      <div id="meals">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default MealsComponent;
