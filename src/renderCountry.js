import Notiflix from 'notiflix';
export default function (array, refs) {
  if (array.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  renderItem(array, refs);
  if (array.length === 1) {
    renderInfo(array, refs);
  }
}

function renderInfo(array, refs) {
  refs.infoRef.insertAdjacentHTML(
    'beforeend',
    `<span class="country-info-span">Capital: </span><span>${
      array[0].capital
    }<br></span>
    <span class="country-info-span">Population: </span><span>${
      array[0].population
    }<br></span>
    <span class="country-info-span">Languages: </span><span>${Object.values(
      array[0].languages
    )}</span >`
  );
}
function renderItem(array, refs) {
  const newHtml = array.map(
    ({ capital, flags, languages, name, population }) => {
      return `<li class="element">
          <img src="${flags.png}" width="40px">
          <span>${name.official}</span>
        </li>`;
    }
  );

  refs.listRef.insertAdjacentHTML('beforeend', newHtml.join(''));
}
