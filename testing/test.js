// const someJson = {
//     someProperty: "hello, Dolphin may get retro achievement support in the future"
// };

// class SomeClass {
//     constructor() {
//         this.someProperty = "hello, PCSX2 has retro achievement support now.";
//     }
// }

// const someObject = new SomeClass();

// console.log(someObject.someProperty);
// console.log(someJson.someProperty);

// const arrowParseJsonResponse = (response) => response.json();

// function parseJsonResponse(response) {
//     return response.json();
// }

// const pokemonGames = fetch('https://pokeapi.co/api/v2/generation/generation-i')
// .then(parseJsonResponse)
// .then(responseJson => void 0);

function getVendingItem(amount, item) {
  switch (item) {
    case "Soda":
      if (amount >= 2.5) {
        return { item: "Coca-Cola", change: amount - 2.5 };
      }
      return "Not enough money for Coca-Cola";
    case "Gum":
      if (amount >= 1.00) {
        return { item: "Gum", change: amount - 1.00 };
      }
      return "Not enough money for Gum";
  }
}

console.log(
  getVendingItem(1, "Gum")
);
