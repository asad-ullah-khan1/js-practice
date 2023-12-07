const form = document.querySelector('#searchForm')
const showWraper = document.querySelector('#ShowWrapper')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const queryString = form.elements.query.value
    const shows = await getApiData(queryString)
    showWraper.innerHTML=""
    displayShows(shows)
})

const getApiData = async (queryString) => {
        const config = {params: {q: queryString}}
        const res = await axios.get('https://api.tvmaze.com/search/shows', config)
        return res.data
}

const displayShows = (shows) => {
    for(tvShow of shows){
        const individualShowImg = tvShow.show.image.medium
        const individualShowName = tvShow.show.name
        const showCard = document.createElement('div')
        const showTitle = document.createElement('h2')
        const showImage = document.createElement('IMG')
        showTitle.append(individualShowName)
        showImage.src = individualShowImg

        showCard.appendChild(showTitle)
        showCard.appendChild(showImage)

        showWraper.append(showCard)

    }
}