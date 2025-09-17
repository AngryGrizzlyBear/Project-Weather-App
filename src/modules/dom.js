import { fetchWeather } from "./api";

function renderWeather(data) {
    const output = document.getElementById("weather-output");
    output.innerHTML = `
    <h2>Weather for ${data.location}</h2>
    <p><strong>Date:</strong>${data.date}</p>
    <p><strong>Temperature:</strong>${data.temperature} °C</p>
    <p><strong>High:</strong>${data.tempMax} °C <strong>Low:</strong>${data.tempMin} °C</p>
    <p><strong>Conditions:</strong>${data.conditions}</p>
    <p><strong>Description:</strong>${data.description}</p>
    `
}

export function setupForm() {
    const form = document.getElementById("location-form");
    const input = document.getElementById("location-input");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const location = input.value.trim();
        if (!location) return;

        console.log(`Fetching weather for: ${location}`);
        const data = await fetchWeather(location);

        if (data) {
            console.log("Processed Data from form submit:", data);
            renderWeather(data);
        }
    });
}