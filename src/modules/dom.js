import { fetchWeather } from "./api";

export function setupForm() {
    const form = document.getElementById("location-form");
    const input = document.getElementById("location-input");

    form.addEventListener("Submit", async (e) => {
        e.preventDefault();
        const location = input.ariaValueMax.trim();
        if (!location) return;

        console.log(`Fetching weather for: $(location)`);
        const data = await fetchWeather(location);

        if (data) {
            console.log("Processed Data from form submit:", data);
        }
    });
}