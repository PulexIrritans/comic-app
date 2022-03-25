const baseUrl = 'https://rickandmortyapi.com/api/character?page=';
const numPages = 5;

const urls = Array(numPages)
              .fill() // [undefined, undefined, ...]
              .map((_, index) => baseUrl + (index + 1));

const promises = urls.map(url => fetch(url).then(res => res.json()))



const loadDataButtonElement = document.querySelector('.header-btn')

loadDataButtonElement.addEventListener('click', () => {

Promise
  .all(promises)
  .then(pages => {
    // const characters = 
    pages.flatMap(page => page.results).forEach(renderCharacter)
    // characters.
  })
})


function renderCharacter(character) {
  const cardContainerElement = document.querySelector('.cards-container')
  
  const newCardElement = document.createElement('article')
  newCardElement.classList.add('cards')
  cardContainerElement.append(newCardElement)

  const newImageElement = document.createElement('img')
  newImageElement.setAttribute('src', character.image)
  cardContainerElement.append(newImageElement)

  const paragraphElement = document.createElement('p')
  paragraphElement.textContent = character.name;
  newCardElement.append(paragraphElement)

}