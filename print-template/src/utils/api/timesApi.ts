
export const getTimes = async () => {
    const response = await fetch(`https://api.ipify.org?format=json`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const ipAddress = await response.json();
    const coordinatesResponse = await getCoordinatesByIpAddress(ipAddress.ip);
    const timesResponse = await getTimesByCoordinates(coordinatesResponse.latitude, coordinatesResponse.longitude);
    return await timesResponse.results;
}

export const getCoordinatesByIpAddress = async (ipAddress: string) => {
    const response = await fetch(`http://api.ipstack.com/${ipAddress}?access_key=${import.meta.env.VITE_API_KEY}&fields=latitude,longitude`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export const getTimesByCoordinates = async (lat: number, lon: number) => {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}