const homePage = document.querySelector('#orbits');
const planetPage = document.querySelector('#description');
const planets = document.querySelectorAll('.planet');
import {getKey, getPlanets} from './api.js';
import{renderPlanets} from './creatingPlanets.js'


function showOrHide() {
    homePage.classList.toggle('hide');
    planetPage.classList.toggle('hide'); 
} 

planets.forEach((planet) => {
    planet.addEventListener('click', () => {
        const dataID = planet.getAttribute('data-id')
        if(typeof(dataID) === 'string'){
            //console.log("hey")
            planetPage.classList.add('animation')
            renderPlanets(dataID)
            showOrHide()
            
        }else{
            //console.log("Bye")
            planetPage.classList.remove('animation')
            planetPage.classList.add('fadeOutanimation')
            planetPage.addEventListener('animationend', ()=>{
                //console.log("Event listner")
                showOrHide() 
            planetPage.classList.remove('fadeOutanimation')

            }, {once: true})
              
        } 
    });
   
})


getPlanets();


