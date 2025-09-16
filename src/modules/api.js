const API_KEY = process.env.VISUALCROSSING_API_KEY;
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';


function processWeatherData(data) {
    if (!data || !data.days || data.days.length === 0) {
        return null;
    }

    const today = data.days[0];

    return {
        location: data.resolvedAddress,
        date: today.datetime,
        temperature: today.temp,
        tempMax: today.tempmax,
        tempMin: today.tempmin,
        conditions: today.conditions,
        description: today.description,
        icon: today.icon,
    };
}


export async function fetchWeather(location) {
    try {
        const response = await fetch(`${BASE_URL}/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const rawData = await response.json();
        console.log('Raw weather data:', rawData);

        const processed = processWeatherData(rawData);
        console.log('Processed weather data:', processed);
        
        return processed;
        

    } catch (error) {
        console.error('Fetch weather failed:', error);
        return null;
    }
}