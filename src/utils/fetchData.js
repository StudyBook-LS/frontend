import axios from "axios";

import countryList from "./countryList";
import format from "./formatStudy";

const fetchData = async (condition, postalCode, country, page, gender, age) => {
  try {
    const res = await axios.post(
      `https://places-dsn.algolia.net/1/places/query`,
      {
        query: postalCode,
        countries: [country.toLowerCase()],
      },
    );
    const [result] = res.data.hits;
    const { population, city, administrative } = result;
    const citySearch = population > 250000 && city ? city : administrative[0];
    const countrySearch = countryList.find(c => c.code === country).name;

    const response = await axios.post(
      `http://clinicaltrialadvisor.com/fetch_search`,
      {
        user_search: `${citySearch || countrySearch} ${condition}`,
        page,
        gender: gender || "all",
        age: age || 32,
      },
    );

    const { total_results: totalResults, status } = response.data;

    const results = JSON.parse(response.data.results);

    const studies = results.map(study => format(study));

    const finalResponse = { studies, totalResults, status };

    localStorage.setItem("studies", JSON.stringify(finalResponse));

    return finalResponse;
  } catch (err) {
    return { ...err.response };
  }
};

export default fetchData;
