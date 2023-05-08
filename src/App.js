import Food from "./Food";
import PropTypes from "prop-types";

const foodILike = [
  { name: "Борщd", id: 1, rating: 4.8 },
  { name: "cen", id: 2, rating: 4.9 },
  { name: "Бdf", id: 3, rating: 4.4 },
  { name: "Боdfdfрщ", id: 4, rating: 4.1 },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
