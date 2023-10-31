const url = 'https://majazocom.github.io/Data/solaris.json';

async function consoleData(adress) {
    const response = await fetch(adress);
    const jsonData = await response.json();
    console.log(jsonData);
}
consoleData(url);

async function createPlanets(adress) {
    const solarSystem = document.querySelector(`#Body-Names`);
    const response = await fetch(adress);
    const jsonData = await response.json();
    const planets = jsonData.map(item => item.name);
    planets.forEach(planetName => {
        const div = document.createElement('div');
        div.id = planetName;
        solarSystem.appendChild(div);
    });
}
createPlanets(url);
