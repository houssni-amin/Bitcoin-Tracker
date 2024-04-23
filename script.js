const url = 'https://blockchain.info/ticker'
const price = document.querySelector('#price_label')

function recupererPrice() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Un problème est survenu, merci de revenir plus tard.')
            }
            return response.json()
        })  
        .then(data => {
            const dataPrice = data.EUR.last
            console.log(`Prix du dernier Bitcoin vendu: ${dataPrice}`)
            price.textContent = dataPrice
        })
        .catch(error => {
            console.log('Erreur lors de la récuperation des données:', error.meassage)
        })
}

recupererPrice()
setInterval(recupererPrice, 10000)