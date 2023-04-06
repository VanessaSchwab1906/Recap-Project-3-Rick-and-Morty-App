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
    console.log(data);

    // Empty cardContainer
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
