import Notiflix from 'notiflix';
export default function (countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,languages,flags`
  )
    .then(r => {
      if (!r.ok) {
        throw new Error(responce.status);
      }
      return r.json();
    })
    .then(countries => {
      return countries;
    })
    .catch(error =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}
