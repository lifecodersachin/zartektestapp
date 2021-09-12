import "./card.css";
import nonVeg from "../assets/icons/nonveg.png";
import veg from "../assets/icons/veg.png";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";
import { useEffect, useState } from "react";

const Card = ({ dish }) => {
  let persistedDishCount = 0;
  try {
    persistedDishCount =
      JSON.parse(localStorage.getItem(`${dish.dish_id}`)) ?? 0;
  } catch (error) {
    console.error(error);
  }
  const { count } = useSelector((state) => state.counter);
  const [dishCount, setDishCount] = useState(persistedDishCount);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
    setDishCount((prevCount) => (prevCount += 1));
  };
  const decrementCount = () => {
    if (count > 0 && dishCount > 0) {
      dispatch(decrement());
      setDishCount((prevCount) => (prevCount -= 1));
    }
    // if (dishCount > 0) {
    // }
  };
  useEffect(() => {
    localStorage.setItem(`${dish.dish_id}`, JSON.stringify(dishCount));
  }, [dishCount]);

  return (
    <div className="card-parent-container">
      <div className="card-label-container">
        <img
          src={dish.dish_Type === 1 ? nonVeg : veg}
          alt="food-label"
          className="dish-label"
        />
      </div>
      <div className="card-info-container">
        <div className="card-headers">
          <h4 className="dish-name">{dish.dish_name}</h4>
          <div className="price-calories-wrapper">
            <h4 className="dish-price">{`${dish.dish_currency} ${dish.dish_price}`}</h4>
            <h4 className="dish-calories">
              {" "}
              {`${dish.dish_calories} Calories`}
            </h4>
          </div>
        </div>
        <p className="dish-description">{dish.dish_description}</p>
        <div className="card-footer">
          <div className="btn-group">
            <button
              className="btn-group-item btn btn-minus"
              onClick={decrementCount}
            >
              -
            </button>
            <span className="btn-group-item dish-count">{dishCount}</span>
            <button
              className="btn-group-item btn btn-plus"
              onClick={incrementCount}
            >
              +
            </button>
          </div>
          {dish.addonCat.length > 0 && (
            <p className="dish-addon-label">Customizations Available</p>
          )}
        </div>
      </div>
      <div className="card-image-container">
        <img
          src={dish.dish_image}
          alt="dish-thumbnail"
          className="dish-image"
        />
      </div>
    </div>
  );
};

export default Card;
