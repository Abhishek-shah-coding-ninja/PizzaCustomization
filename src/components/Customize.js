import React from "react";

import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

function Customize({ ingredients, setIngredients }) {
  const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <div style={{ display: "flex" }}>
      {/* {JSON.stringify(ingredients)} */}
      <div style={{ border: "2px solid black", flex: 1 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <img
            src={Cheese}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Olive}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Pineapple}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Mushroom}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Basil}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img
            src={Tomato}
            alt="Pizza Base"
            height="100%"
            width="100%"
            className="ingredients"
          />
          <img src={Base} alt="Pizza Base" height="100%" width="100%" />
        </div>
      </div>
      <div style={{ border: "2px solid black", flex: 1 }}>
        <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        {/* <button
          onClick={() => history.push("/checkout")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button> */}
      </div>
      
    </div>
  );
}

export default Customize;
