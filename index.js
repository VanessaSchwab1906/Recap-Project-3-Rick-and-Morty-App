console.log("hello");
import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Function to fetch characters from an API and create HTML cards for each character
const fetchCharacters = async () => {
  try {
    // Fetch data from API
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    //return data.results.slice(0, 20);

    console.log(data);
    // Import createCharacterCard function
    //const { createCharacterCard } = await import("./createCharacterCard");

    // Empty cardContainer
    //const cardContainer = document.querySelector("#cardContainer");
    cardContainer.innerHTML = "";

    // Create HTML card for each character and append it to the cardContainer
    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
};
fetchCharacters();

/* async function fetchCharacters() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=1"
      // ODER https://rickandmortyapi.com/api/character
    );
    if (!response.ok) {
      throw new Error("Rick has died");
    }
    const data = await response.json();
    // get the first 20 characters
    return data.results.slice(0, 20);
  } catch (err) {
    console.error("Rick is not home:", err);
  }
}

async function renderCharacters() {
  const characters = await fetchCharacters();
  const cardContainer = document.querySelector("#cardContainer");
  // OR INNER HTML
  // cardContainer.innerHTML = ""; // clear the container
  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
  });
}

renderCharacters();
 */
