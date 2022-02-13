// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, { useAnimal } from "./data";

//destructuring array
const [cat, dog] = animals;
//console.log(cat);

//like useState
const [catName, catSound] = useAnimal(cat);
console.log(catName);
catSound();

//destructuring object
//const {name, sound} = cat;
//console.log(sound);

//destructuring object and change the name
// const {name: catName, sound: catSound} = cat;

//destructuring object and change the value
// const {name = "Fluffy", sound = "Purr"} = cat;

//destructuring object to get obj in obj
// const {
//   feedingReuirement: { food, drink }
// } = cat;
//console.log(food);

//destructuring the code - make it into table
const [honda, tesla] = cars;
//console.log(tesla);
// destructure for tesla
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
//destructure for honda
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
