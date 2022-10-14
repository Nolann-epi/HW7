/* Tutorial 4
   Example 1 JavaScript code
*/

const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty
    }
}

const houseSelection = document.getElementById("house")

for (let house of houses) {
    let option = document.createElement("option")
    option.value = house.code
    option.textContent = house.name
    houseSelection.appendChild(option)
}

const charactersUl = document.getElementById("characters");
houseSelection.addEventListener("change", function() {
    charactersUl.innerHTML = "";
    let characters = getCharacters(this.value);
    for (let character of characters) {
        let li = document.createElement("li");
        li.textContent = character;
        charactersUl.appendChild(li);
    }
});