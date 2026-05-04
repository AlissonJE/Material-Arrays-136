import { people } from './people.js'
// // console.log(people)

const fruits = ['apple', 'banana', 'orange', 'grape']
const names = ['John', 'Jane', 'Alice', 'Bob']
const numbers = [1, 2, 3, 4, 5]
const colors = ['red', 'green', 'blue', 'yellow']

// const animal = {
//     name: 'Dog',
//     species: 'Canine',
//     color: 'Brown',
//     skills: ['barking', 'fetching', 'guarding']
// }

// const card = document.querySelectorAll('.card')

// const myBody = document.querySelector('body')
// console.log(myBody.children)
// console.log(myBody.childNodes)


const makeCard = (name,ageP) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('h2')
    title.textContent = name

    const age = document.createElement('p')
    age.textContent = ageP

    const linkPage = document.createElement('a')
    linkPage.href = 'market.html'
    linkPage.textContent = 'Ir a Market'

    card.appendChild(title)
    card.appendChild(age)
    card.appendChild(linkPage)

    document.querySelector('main').appendChild(card)
}


const renderPeople = () => {
    people.forEach(person => makeCard(person.name,person.age))
}

window.addEventListener('DOMContentLoaded', renderPeople)
// ====================Arrays==============================
// console.log(fruits.length-1)
// console.log(fruits[0])

// fruits.push('leemon')


// const newInstanceArr = [...fruits,'strawberry']
// console.table(fruits)
// console.table(newInstanceArr)

// fruits.forEach( (fruit,idx) => console.log(fruit,idx))
// // console.table(numbers.filter( (num) => num >= 4  ))

// console.log(fruits.indexOf('banana'))
// console.log(fruits[200])















