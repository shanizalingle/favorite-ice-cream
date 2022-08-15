const flavors = ["Vanilla", "Chocolate", "Strawberry", "Rocky Road", "Late Night Snack", "Fudge", "Orange Creamsicle"];
const cones = ["Waffle cone", "Sugar cone", "Sprinkle cone", "Chocolate dipped cone"];
const toppings = ["Fudge", "Cherries", "Whipped cream", "Sprinkles", "Caramel"];

window.addEventListener("load", function(event){
  event.preventDefault();
  
  const flavorsDiv = document.getElementById("flavors-div");
  const conesDiv = document.getElementById("cones-div");
  const toppingsDiv = document.getElementById("toppings-div");
  const flavorsList = document.getElementById("flavors-list");
  const conesList = document.getElementById("cones-list");
  const toppingsList = document.getElementById("toppings-list");

  flavors.forEach(function(flavor){
    const li = document.createElement("li");
    li.append(flavor);
    flavorsList.append(li);
    console.log(flavorsList);
  });

  cones.forEach(function(cone){
    const li2 = document.createElement("li");
    li2.append(cone);
    conesList.append(li2);
    console.log(conesList);
  });

  toppings.forEach(function(topping){
    const li3 = document.createElement("li");
    li3.append(topping);
    toppingsList.append(li3);
    console.log(toppingsList);
  });

});

