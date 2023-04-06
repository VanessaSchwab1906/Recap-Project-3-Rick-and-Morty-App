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
let searchQuery = "";

// Function to fetch characters from an API and create HTML cards for each character
const fetchCharacters = async () => {
  try {
    // Fetch data from API
    const response = await fetch("https://rickandmortyapi.com/api/character"); // https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}
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

// Add a submit event listener to the search bar
searchBar.addEventListener("submit" || "click", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = Object.fromEntries(formData);
  console.log(name);
  // Update the state variable searchQuery with the current text
  searchQuery = searchBar.querySelector("input").value;

  fetchCharacters();
  //document.querySelector;
  // Modify the fetch URL by adding another url encoded attribute name
  let fetchURL = `https://rickandmortyapi.com/api/character?name=${searchQuery}`;

  // Trigger the function fetch
  fetchCharacters(fetchURL);
});

//get input with class  2 get it value that is a text 3 fetch with the url add the text into the url
