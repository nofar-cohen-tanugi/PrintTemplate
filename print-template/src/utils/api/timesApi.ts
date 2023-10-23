import { City } from "../../model/saturday/City.model";

export const getTimesByCity = async (city: City) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=,${city.code}&appid=${import.meta.env.VITE_API_KEY}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}