
export const getTimes = async (code: string) => {
    const response = await fetch(`https://www.hebcal.com/shabbat?cfg=json&geonameid=${code}&M=on`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}
