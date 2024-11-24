import "./styles.css"

// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/?key=L294L6C244ZLCSJV32VN44K6R')
//     .then(response => response.json())
//     .then(data => {
//         const weatherDataArray = []
//         //console.log(data.days[0])
//         data.days.slice(0,2).forEach(day => {
//             if(!day.datetime || !day.description || !day.feelslike || !day.precip || !day.precipprob || !day.tempmin || !day.tempmax){
//                 console.error("One or more data fields are missing")
//             }
//             const weatherData = {
//                 datetime: day.datetime, 
//                 description: day.description, 
//                 feelslike: day.feelslike, 
//                 precip: day.precip, 
//                 precipprob: day.precipprob, 
//                 tempmin: day.tempmin, 
//                 tempmax: day.tempmax
//             }
//             weatherDataArray.push(weatherData)
//         });
//         console.log(weatherDataArray)
//     })
//     .catch(err => {
//         console.error(err)
//     })

    async function getWeatherData(range, location){
        try{
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=L294L6C244ZLCSJV32VN44K6R`, {mode:'cors'})
            const data = await response.json()
            const weatherDataArray = []
            data.days.slice(0,range).forEach(day => {
                if(!day.datetime || !day.description || !day.feelslike || !day.precip || !day.precipprob || !day.tempmin || !day.tempmax){
                    console.error("One or more data fields are missing")
                }
                const weatherData = {
                    datetime: day.datetime, 
                    description: day.description, 
                    feelslike: day.feelslike, 
                    precip: day.precip, 
                    precipprob: day.precipprob, 
                    tempmin: day.tempmin, 
                    tempmax: day.tempmax
                }
                weatherDataArray.push(weatherData)
                
            });
            console.log(weatherDataArray)
            return weatherDataArray
        } catch (error){
            console.log(error)
            const body = document.querySelector("body")
            body.classList.add("errorPage")
            body.innerHTML = "Sorry not working right now"
        }

    }

const locationForm = document.querySelector("#locationForm")
const location = document.querySelector("#location")
const range = document.querySelector("#range")
locationForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const locationValue = location.value 
    const rangeValue = range.value
    console.log(locationValue)
    console.log(rangeValue)
    getWeatherData(rangeValue, locationValue)
})

