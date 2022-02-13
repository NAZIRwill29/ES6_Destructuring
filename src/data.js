const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingReuirement: { food: "fish", drink: "milk" }
  },
  { name: "dog", sound: "woof" }
];

function useAnimal(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimal };
