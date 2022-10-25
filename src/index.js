import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import {fetchCountry} from './fetchCountries'

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const inputRef = document.querySelector('#search-box');

inputRef.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  const countryName = inputRef.value.trim().toLowerCase();
  fetchCountry(countryName).then(country => {
    console.log(country) 
  })
  .catch(error);
};

function error() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
