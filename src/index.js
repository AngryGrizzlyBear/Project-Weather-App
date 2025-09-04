import './style.css'
import { fetchWeather } from './modules/api'
console.log("✅ Weather App booting…")

fetchWeather("New York")
.then(data => {
    if (data) console.log('Weather fetched successfully!')
});