export async function getAllPins(){

    return fetch('http://127.0.0.1:8000/pindex/pins/')
    .then(data => data.json())
}