
import './App.css';
import axios from 'axios'
import {useState, useEffect } from 'react';
import NavMak from './components/NavMak';
import NewsCard from "./components/cards/NewsCard"
import moment from "moment"
import {newsClient, weatherClient} from './app/apiClients';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./components/pages/Business";
import LocalNews from './components/pages/LocalNews';
import GlobalNews from './components/pages/GlobalNews';
import Entertainment from './components/pages/Entertainment';
import Home from './components/pages/Home';
import Carousel from './components/carousel/Carousel';

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


    // useEffect(() => {
    //   newsClient.get('/latest_headlines', {
    //     countries: 'ug',
    //     //q: 'world',
    //     //category: 'business',
        
    //   }).then((response)=>{
    //     console.log(response.data.articles)
    //     setLocalNews(response.data.articles)
    //   })
    
      
    // }, [])

    // if(!localNews) return null


    const slides = [
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ]


  return (
    
    <div className="App">
     
      <NavMak/>
      <div className="container">
      <div className='carousel'>
        <div className="carousel-inner"> 
        { slides.map((slide, index) => (
           <div className="carousel-item">
          <Carousel
           slides={slides}
           interval={5000} 
           controls={true} 
          indicators={true}
           />
          </div> 
        ))}       
                
        </div>
      </div>
    </div>
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
      
     <Router >
       <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/business" element={<Business/>}/>
         <Route path="/local-news" element={<LocalNews/>}/>
         <Route path="/global-news" element={<GlobalNews/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
       </Routes>
     </Router>

    </div>
    
  );
}

export default App;
