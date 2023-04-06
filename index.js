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
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Function to fetch characters from an API and create HTML cards for each character
const fetchCharacters = async () => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    maxPage = data.info.pages;
    //console.log("MaxPage:", maxPage);
    //console.log("updatePageDisplay");
    updatePageDisplay();
    console.log(data);

    cardContainer.innerHTML = "";

    data.results.forEach((character) => {
      const card = createCharacterCard(character);
      cardContainer.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
};

function updatePageDisplay() {
  //console.log(maxPage);
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

// search bar
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchQuery = searchBar.querySelector("input").value;

  fetchCharacters();
});

// event listener previous button
prevButton.addEventListener("click", async () => {
  console.log("prev:");
  if (page > 1) {
    cardContainer.innerHTML = "";
    page--;
    fetchCharacters();
    // updatePageDisplay();
  }
});

// event listener next button
console.log("next:", nextButton);
nextButton.addEventListener("click", async () => {
  console.log("next:");
  if (page < maxPage) {
    cardContainer.innerHTML = "";
    page++;
    fetchCharacters();
    // updatePageDisplay();
  }
});
