import './style.css'
import { setupForm } from './modules/dom'

console.log("✅ Weather App booting…")

setupForm()

// fetchWeather("New York")
//     .then(data => {
//         if (data) {
//             console.log('Weather fetched successfully!')
//             console.log(data);
//         }
//     });