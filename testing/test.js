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
    case "Doritos":
      if (amount >= 3.75) {
        return { item: "Doritos", change: amount - 3.75 };
      }
      return "Not enough money for Doritos";
  }
}

console.log(
  getVendingItem(3.00, "Doritos")
);
