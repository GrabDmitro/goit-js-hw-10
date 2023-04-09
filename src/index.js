import './css/styles.css';
import fetchCountry from './fetchCountries.js';
import renderCountry from './renderCountry';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const refs = {
  inputRef: document.querySelector('#search-box'),
  listRef: document.querySelector('.country-list'),
  infoRef: document.querySelector('.country-info'),
};
//refs.listRef.innerHTML = renderCountry(findCountry('USA').flag);

refs.inputRef.addEventListener(
  `input`,
  debounce(() => {
    clearRender(refs);
    console.log(refs.inputRef.value);
    fetchCountry(refs.inputRef.value).then(countries => {
      renderCountry(countries, refs);
    });
  }, DEBOUNCE_DELAY)
);
//console.log(renderCountry(a));
function clearRender(refs) {
  refs.listRef.innerHTML = '';
  refs.infoRef.innerHTML = '';
  console.log('s');
}
