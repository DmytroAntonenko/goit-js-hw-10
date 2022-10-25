import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const inputRef = document.querySelector('#search-box');

inputRef.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  const countryName = event.target.value.trim().toLowerCase();
  fetchContry(countryName).then(country => {
    console.log(country) 
  })
  .catch(error => {
    console.log(error)
  });
};


function fetchContry(name) {
  return fetch('https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages')
  .then(response => {
    return response.json()
  }) 
}
