import React, {useEffect, useState} from 'react'
import {newsClient, weatherClient} from '../../app/apiClients';

const LocalNews = () => {
    const [localNews,setLocalNews] = useState(null);
    
    useEffect(() => {
        newsClient.get('/latest_headlines', {
          countries: 'ug',
          topic: 'business',
          //category: 'business',
          
        }).then((response)=>{
          console.log(response.data.articles)
          setLocalNews(response.data.articles)
        })
      
        
      }, [])
  
      if(!localNews) return null
  
  return (
    <div>LocalNews</div>
  )
}

export default LocalNews