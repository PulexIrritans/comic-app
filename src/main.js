const baseUrl = 'https://rickandmortyapi.com/api/character?page=';
const numPages = 5;

const urls = Array(numPages)
              .fill() // [undefined, undefined, ...]
              .map((_, index) => baseUrl + (index + 1));

const promises = urls.map(url => fetch(url).then(res => res.json()))



const loadDataButtonElement = document.querySelector('.header-btn')
const cardContainerElement = document.querySelector('.cards-container')

loadDataButtonElement.addEventListener('click', () => {
    cardContainerElement.innerHTML='';
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
    const filterElement=document.querySelector('[list="character-state"]')
    if(filterElement.value===''){
  
  const newCardElement = document.createElement('article')
  newCardElement.classList.add('cards')
  cardContainerElement.append(newCardElement)

  const newImageElement = document.createElement('img')
  newImageElement.setAttribute('src', character.image)
  newCardElement.append(newImageElement)

  const paragraphElement = document.createElement('p')
  paragraphElement.textContent = character.name;
  newCardElement.append(paragraphElement)

    }
     if(filterElement.value==='Alive'){
        if(character.status==='Alive'){
        
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
        
          }
          if(filterElement.value==='Dead'){
        if(character.status==='Dead'){
        
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
          }
          if(filterElement.value==='Unknown'){
            if(character.status==='unknown'){
            
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
              }
}