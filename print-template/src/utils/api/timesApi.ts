export const getTimesByCity = (city: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.API_KEY}`).then(res => {
        console.log(res);
    })
}