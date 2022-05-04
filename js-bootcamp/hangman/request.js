const getPuzzle = (wordCount) => {
   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch(`https://restcountries.com/v3.1/all`).then((response) => {
         if (response.status === 200) {
             return response.json()
         } else {
             throw new Error('Unable to fetch country')
         }
     }).then((data) => data.find((country) => country.cca2 === countryCode))
 }

 const getLocation = () => {
     return fetch(`https://ipinfo.io/json?9fba1556259b4a`).then((response) => {
         if (response.status === 200) {
             return response.json()
         } else {
             throw new Error('Unable to fetch location')
         }
     })
 }

