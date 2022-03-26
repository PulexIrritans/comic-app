// API Fetch
const baseUrl = "https://rickandmortyapi.com/api/character?page=";
const numPages = 5;

const urls = Array(numPages)
  .fill() // [undefined, undefined, ...]
  .map((_, index) => baseUrl + (index + 1));

const promises = urls.map((url) => fetch(url).then((res) => res.json()));

// Global variables and constants
const loadDataButtonElement = document.querySelector(".header-btn");
const cardContainerElement = document.querySelector(".cards-container");
const searchElement = document.querySelector("#search");
let filteredCharactersArray;
let namesFoundCount;

// Load Button Event Listener
loadDataButtonElement.addEventListener("click", () => {
  namesFoundCount = 0;
  filteredCharactersArray = [];

  cardContainerElement.innerHTML = "";
  Promise.all(promises).then((pages) => {
      pages.flatMap((page) => page.results).forEach(character => {
          getFilteredCharacters(character)
      })
      if (namesFoundCount === 0) {
        alert("No Character found with the name: " + searchElement.value)
      } else {
      addCardElements(filteredCharactersArray)
      }
})
});

function getFilteredCharacters(character) {
  const filterElement = document.querySelector("#character-state");
  
  // Filter by Character Status
  if (searchElement.value === "") {
    if (filterElement.value === "All") {
      filteredCharactersArray.push(character);
      namesFoundCount++
    }
    if (filterElement.value === "Alive") {
      if (character.status === "Alive") {
        filteredCharactersArray.push(character);
        namesFoundCount++
      }
    }
    if (filterElement.value === "Dead") {
      if (character.status === "Dead") {
        filteredCharactersArray.push(character);
        namesFoundCount++
      }
    }
    if (filterElement.value === "Unknown") {
      if (character.status === "unknown") {
        filteredCharactersArray.push(character)
        namesFoundCount++
      }
    }
  }
  
  // Filter by specific name
  if (searchElement.value !== "") {
    if (
      character.name.toLowerCase().includes(searchElement.value.toLowerCase())
    ) {
      filterElement.value = "All";
      filteredCharactersArray.push(character);
      namesFoundCount++;
    }
  }
}

// Function to add Element to CardContainer
function addCardElements(filteredCharacters) {

    const cardContainerElement = document.querySelector(".cards-container")

    filteredCharacters.forEach((character) => {
      const newCardElement = document.createElement("article");
      newCardElement.classList.add("cards")
      cardContainerElement.append(newCardElement)

      const newImageElement = document.createElement("img")
      newImageElement.setAttribute("src", character.image)
      newCardElement.append(newImageElement)

      const paragraphElement = document.createElement("p")
      paragraphElement.textContent = character.name
      newCardElement.append(paragraphElement)

      const paragraphStatusElement = document.createElement("p")
      paragraphStatusElement.textContent = character.status
      newCardElement.append(paragraphStatusElement)
    });
}
