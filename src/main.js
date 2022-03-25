const baseUrl = 'https://rickandmortyapi.com/api/character?page=';
const numPages = 5;

const urls = Array(numPages)
              .fill() // [undefined, undefined, ...]
              .map((_, index) => baseUrl + (index + 1));

const promises = urls.map(url => fetch(url).then(res => res.json()))

const loadDataButtonElement = document.querySelector('.header-btn')
const cardContainerElement = document.querySelector('.cards-container')
let nameFound = 0
loadDataButtonElement.addEventListener('click', () => {
    cardContainerElement.innerHTML = ''
    Promise.all(promises).then((pages) => {
        // const characters =
        pages.flatMap((page) => page.results).forEach(renderCharacter)
        if (nameFound === 0) {
            alert('No Character found with the name:' + searchElement.value)
        }
        // characters.
    })
})

function renderCharacter(character) {
    const cardContainerElement = document.querySelector('.cards-container')
    const filterElement = document.querySelector('#character-state')
    const searchElement = document.querySelector('#search')

    // Filter by Character Status
    if (searchElement.value == '') {
        if (filterElement.value === 'All') {
            addCardElements(character)
        }
        if (filterElement.value === 'Alive') {
            if (character.status === 'Alive') {
                addCardElements(character)
            }
        }
        if (filterElement.value === 'Dead') {
            if (character.status === 'Dead') {
                addCardElements(character)
            }
        }
        if (filterElement.value === 'Unknown') {
            if (character.status === 'unknown') {
                addCardElements(character)
            }
        }
    }
    // Search the specific name!
    if (searchElement.value !== '') {
        console.log(searchElement.value)
        if (
            character.name
                .toLowerCase()
                .includes(searchElement.value.toLowerCase())
        ) {
            filterElement.value = 'All'
            addCardElements(character)
            nameFound++
        }
    }
}
// Function to add Element to CardContainer
function addCardElements(character){
    const newCardElement = document.createElement('article')
    newCardElement.classList.add('cards')
    cardContainerElement.append(newCardElement)
  
    const newImageElement = document.createElement('img')
    newImageElement.setAttribute('src', character.image)
    newCardElement.append(newImageElement)
  
    const paragraphElement = document.createElement('p')
    paragraphElement.textContent = character.name;
    newCardElement.append(paragraphElement)

    const paragraphStatusElement = document.createElement('p')
    paragraphStatusElement.textContent = character.status;
    newCardElement.append(paragraphStatusElement)
}