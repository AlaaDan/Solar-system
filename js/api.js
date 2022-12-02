const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api';

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`);
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

export {getKey, getPlanets}

// This moudle is to meant to fetch the API and get the data from it and export it to the index.js 