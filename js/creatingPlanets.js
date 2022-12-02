import {getPlanets, getKey} from './api.js'
// 
// Whenever the user clicks on a certain planet they will get the planet information pushed from this moudle to the HTML 
// This moudle is to push the information of the planets to the index,js 

function numberWithSpaces(number) {
    // This function addes a comma to the numbers and converts them into str 
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function renderPlanets(id){
    const planets = await getPlanets()
    const planet = planets[id]
    document.querySelector('#name').innerHTML = planet.name
    document.querySelector('#latin_name').innerHTML = planet.latinName
    document.querySelector('#desc').innerHTML = planet.desc
    document.querySelector('#distance').innerHTML = numberWithSpaces(planet.circumference) + ' km'
    document.querySelector('#sun_distance').innerHTML = numberWithSpaces(planet.distance) + ' km'
    document.querySelector('#max').innerHTML = planet.temp.day + ' &#8451;'
    document.querySelector('#min').innerHTML = planet.temp.night + ' &#8451;'
    document.querySelector('#moon').innerHTML = planet.moons.join(' - ')
    document.querySelector('#type').innerHTML = planet.type
    document.querySelector('#orbit_period').innerHTML = numberWithSpaces(planet.orbitalPeriod) +' Earth days'
    document.querySelector('article img').setAttribute('src', '/images/'+id+'.png')
}


export{renderPlanets}
