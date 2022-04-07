import apisauce from 'apisauce';

const WEATHER_API = 'http://api.weatherapi.com/v1';
const WEATHER_API_KEY = 'fc6b0cadcb8e4657ab4155804220604';

const NEWS_API = 'https://api.newscatcherapi.com/v2';
const NEWS_API_KEY = 'TaNu16MAs1eV63vNmMyR-_Cj_brC3j94dZKeSAzNJgE';

const weatherClient = apisauce.create({
  baseURL: WEATHER_API,
  params: {key: WEATHER_API_KEY, aqi: 'no'},
});

const newsClient = apisauce.create({
  baseURL: NEWS_API,
  headers: {'x-api-key': NEWS_API_KEY},
  params: {lang: 'en'},
});


export {newsClient, weatherClient};