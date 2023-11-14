import './style.css';
import sunriseImg from './images/sunrise.png';
import sunnyImg from './images/sunny.png';
import nightImg from './images/night.png';

const body = document.querySelector('body')
const morningBtn = document.createElement('button')
const dayBtn = document.createElement('button')
const nightBtn = document.createElement('button')

morningBtn.textContent = 'Show Sunrise'
dayBtn.textContent = 'Show sunny day'
nightBtn.textContent = 'Show night'

const btns = [morningBtn, dayBtn, nightBtn]

btns.forEach(btn => {
    body.appendChild(btn);
})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = body.getElementsByTagName('img')
        if (img.length > 0) {
            body.removeChild(img[0]);
        }

        if (btn == morningBtn) {
            const sunrise = new Image();
            sunrise.src = sunriseImg;
            body.appendChild(sunrise)
        } else if (btn == dayBtn) {
            const sunny = new Image();
            sunny.src = sunnyImg;
            body.appendChild(sunny)
        } else {
            const night = new Image()
            night.src = nightImg;
            body.appendChild(night)
        }
    })
})

// btns.forEach(btn => {
//     if (btn == morningBtn) {
//         btn.addEventListener('click',() => {
//             const sunrise = new Image();
//             sunrise.src = sunriseImg;
//             body.appendChild(sunrise)
//         })
//     } else if (btn == dayBtn) {
//         btn.addEventListener('click', () => {
//             const sunny = new Image();
//             sunny.src = sunnyImg;
//             body.appendChild(sunny)
//         })
//     } else {
//         btn.addEventListener('click', () => {
//             const night = new Image()
//             night.src = nightImg;
//             body.appendChild(night)
//         })
//     }
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