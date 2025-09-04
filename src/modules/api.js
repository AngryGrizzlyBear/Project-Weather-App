const API_KEY = process.env.VISUALCROSSING_API_KEY;
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function fetchWeather(location) {
  try {
    const response = await fetch(`${BASE_URL}/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log('Raw weather data:', data);
    return data;
  } catch (error) {
    console.error('Fetch weather failed:', error);
    return null;
  }
}