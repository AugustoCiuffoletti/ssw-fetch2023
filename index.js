// Import stylesheets
import './style.css';
const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';
const key = '3bfb3112';

const URL = base + '/' + op + '?key=' + key;
console.log(URL);
fetch(URL)
  .then(
    (response) => response.json(), // parsing per avere la stringa
    (error) => alert(error)
  )
  .then((data) => {
    console.log(data);
    const db = JSON.parse(data); // parsing per avere l'array
    console.log(db);
  });