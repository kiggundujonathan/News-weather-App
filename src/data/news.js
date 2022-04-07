import React from 'react'
import axios from "axios";


export default function news() {
  

const {data}=axios.request( {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: 'everything', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '3c2f4905bcmshae73697ee08f461p1d200cjsn58b5f743aa47'
    }
  }).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 return data
}
