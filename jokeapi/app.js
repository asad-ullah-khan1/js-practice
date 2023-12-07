const button = document.querySelector('#getRandomJoke')
const jokes = document.querySelector('#jokes')

const btnHandler = async () => {
    const joke = await getData()
    const newLi = document.createElement('li')
    newLi.append(joke.joke)
    jokes.appendChild(newLi)
}
const getData = async () => {

    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config )
        return res.data    
    } catch (error) {
        console.log('No Jokes available')
    }
    
}
button.addEventListener('click', btnHandler)