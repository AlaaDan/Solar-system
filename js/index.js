
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const homePage = document.querySelector('#orbits');
const planetPage = document.querySelector('#description');
const planets = document.querySelectorAll('.planet');

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    //console.log(data);
    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    //console.log(data);
    return data   
}

function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function renderPlanets(id){
    const planets = await getPlanets()
    const planet = planets.bodies[id]
    document.querySelector('#name').innerHTML = planet.name
    document.querySelector('#latin_name').innerHTML = planet.latinName
    document.querySelector('#desc').innerHTML = planet.desc
    document.querySelector('#distance').innerHTML = numberWithSpaces(planet.circumference) + ' km'
    document.querySelector('#sun_distance').innerHTML = numberWithSpaces(planet.distance) + ' km'
    document.querySelector('#max').innerHTML = planet.temp.day + ' c'
    document.querySelector('#min').innerHTML = planet.temp.night + ' c'
    document.querySelector('#moon').innerHTML = planet.moons.join(' - ')
    document.querySelector('#type').innerHTML = planet.type
    document.querySelector('#orbit_period').innerHTML = numberWithSpaces(planet.orbitalPeriod) +' Earth days'
    document.querySelector('article img').setAttribute('src', '/images/'+id+'.png')
}


function showOrHide() {
    homePage.classList.toggle('hide'); // Om CSS - klassen hide finns tas den bort och vice versa
    planetPage.classList.toggle('hide'); // Om CSS - klassen hide finns tas den bort och vice versa
} 

planets.forEach((planet) => {
    planet.addEventListener('click', () => {
        const dataID = planet.getAttribute('data-id')
        if(typeof(dataID) === 'string'){
            renderPlanets(dataID)
            showOrHide()
        }else{
            showOrHide()   
        } 
    });
})

getPlanets();


