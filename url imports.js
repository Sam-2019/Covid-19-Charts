
let all = "https://corona.lmao.ninja/all";
let continents = "https://disease.sh/v2/continents";
let historical = "https://corona.lmao.ninja/v2/historical";
let histortDates = "https://corona.lmao.ninja/v2/historical/all";
let countries = "https://corona.lmao.ninja/countries";

const requestAll = axios.get(all);
const requestContinents = axios.get(continents);
const requestHistorical = axios.get(historical);
const requesthistortDates = axios.get(histortDates);
const requestCountries = axios.get(countries);

axios
  .all([
    requestAll,
    requestContinents,
    requestHistorical,
    requesthistortDates,
    requestCountries,
  ])
  .then(
    axios.spread((...responses) => {
      const requestAll = responses[0];
      const requestContinents = responses[1];
      const requestHistorical = responses[2];
      const requesthistortDates = responses[3];
      const requestCountries = responses[4];

      console.log(requestAll, requestContinents, requestHistorical, requesthistortDates, requestCountries);
      // use/access the results
    })
  )
  .catch((errors) => {
    // react on errors.
  });

  data={historyDates}
