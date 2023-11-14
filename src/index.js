import './style.css';
import searchIcon from './images/search.png';

const search = new Image()
search.src = searchIcon;

const body = document.querySelector('body')
// const morningBtn = document.createElement('button')
// const dayBtn = document.createElement('button')  
// const nightBtn = document.createElement('button')

const box = document.createElement('div')
let locationName = document.createElement('h3')
let region = document.createElement('h3')
let country = document.createElement('h3')
let temp = document.createElement('p')
let aqi = document.createElement('p')
let inputBox = document.createElement('div')
let input = document.createElement('input')
let searchBtn = document.createElement('button')

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.classList.add('img-fit')

box.style.display = 'flex'
box.style.flexDirection = 'column'
box.style.alignItems = 'center'
box.style.padding = '20px'
box.style.height = '500px'
box.style.aspectRatio = 1.5
box.style.border = '2px solid black'
box.style.color = 'black'
body.appendChild(box)  

locationName.textContent = 'Bhagalpur'
region.textContent = 'Bihar'
country.textContent = 'India'

inputBox.style.display = 'flex'
input.style.display = 'flex'
search.style.height = '20px'
search.style.aspectRatio = 1;  
searchBtn.style.display = 'flex';
searchBtn.style.alignItems = 'center'

searchBtn.appendChild(search)
inputBox.appendChild(input)
inputBox.appendChild(searchBtn)




const weatherData = [locationName,region,country,temp,aqi,inputBox]

weatherData.forEach(data => {
    box.appendChild(data)
})

// morningBtn.textContent = 'Show Sunrise'
// dayBtn.textContent = 'Show sunny day'
// nightBtn.textContent = 'Show night'

// const btns = [morningBtn, dayBtn, nightBtn]

// btns.forEach(btn => {
//     body.appendChild(btn);
// })

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const img = body.getElementsByTagName('img')
//         if (btn == morningBtn) {
//             body.classList.remove('day')
//             body.classList.remove('night')
//             body.classList.add('morning')
//         } else if (btn == dayBtn) {
//             body.classList.remove('morning')
//             body.classList.remove('night')
//             body.classList.add('day')
//         } else {
//             body.classList.remove('morning')
//             body.classList.remove('day')
//             body.classList.add('night')
//         }
//     })
// })






// This is reference to access data in code:
// {
//     "location": {
//       "name": "London",
//       "region": "City of London, Greater London",
//       "country": "United Kingdom",
//       "lat": 51.52,
//       "lon": -0.11,
//       "tz_id": "Europe/London",
//       "localtime_epoch": 1699876642,
//       "localtime": "2023-11-13 11:57"
//     },
//     "current": {
//       "last_updated_epoch": 1699875900,
//       "last_updated": "2023-11-13 11:45",
//       "temp_c": 15,
//       "temp_f": 59,
//       "is_day": 1,
//       "condition": {
//         "text": "Partly cloudy",
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         "code": 1003
//       },
//       "wind_mph": 27.3,
//       "wind_kph": 43.9,
//       "wind_degree": 250,
//       "wind_dir": "WSW",
//       "pressure_mb": 995,
//       "pressure_in": 29.38,
//       "precip_mm": 0,
//       "precip_in": 0,
//       "humidity": 59,
//       "cloud": 25,
//       "feelslike_c": 13.2,
//       "feelslike_f": 55.8,
//       "vis_km": 10,
//       "vis_miles": 6,
//       "uv": 4,
//       "gust_mph": 24.6,
//       "gust_kph": 39.6
//     }
//   }