// Import stylesheets
import './style.css';
const key = '3bfb3112';
const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';

const URL = base + '/' + op + '?key=' + key;
console.log(URL);
fetch(URL)
  .then(
    (response) => {
      console.log(response);
      return response.json()
    },
    (error) => alert(error)
  )
  .then((data) => {
    const db = JSON.parse(data);
    console.log(db[0].autore);
  });
