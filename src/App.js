
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import NavMak from './components/NavMak';
import Newscontent from "../src/components/NewsContent/Newscontent"
import apikey from './data/config';
import news from './data/news';
import {API_KEY} from "./api-keys";
import NewsCard from "./components/cards/NewsCard"
import image from "./images/banner.jpg";
import moment from "moment"
// import getTopHeadlines from "./app/index";
   
import {newsClient, weatherClient} from './app/apiClients';
import { Router } from '@material-ui/icons';

// get the top headlines.

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [localNews,setLocalNews] = useState(null);

  // const getTopHeadlines = async () =>{
  //   const newsResults = await newsClient.get('/latest_headlines', {
  //     countries: 'ug',
  //     //category: 'business',
      
  //   });
  //    const news=newsResults.data
  //    setLocalNews(news)
  //   return newsResults.data;
  // };


    useEffect(() => {
      newsClient.get('/latest_headlines', {
        countries: 'ug',
        //topic: 'business',
        //category: 'business',
        
      }).then((response)=>{
        console.log(response.data.articles)
        setLocalNews(response.data.articles)
      })
    
      
    }, [])

    if(!localNews) return null


  return (
    
    <div className="App">
    
      <NavMak/>
      <div className='news'>

      {
    localNews?.map(
        (news)=>
          <NewsCard
          title={news.title}
          SampleImage={news.media}
          body ={news.summary}
          link={news.link}
          author={news.author}
           time={moment(news.published_date).fromNow()}
        />

        
    )
   
}
      </div>


    </div>
    
  );
}

export default App;
